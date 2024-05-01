import React, { useState, useEffect } from "react";
import { LawyersList } from "store/actions/General/authActions";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Select,
  MenuItem,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WorkIcon from "@material-ui/icons/Work";
import DescriptionIcon from "@material-ui/icons/Description";
import StarRatings from "react-star-ratings";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: "#fff5f5",
  },
  card: {
    maxWidth: 350,
    margin: theme.spacing(2),
    "&:hover": {
      transform: "scale(1.02)",
      transition: "transform 0.2s",
    },
  },
  media: {
    height: 100,
    width: 100,
  },
  select: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  icon: {
    color: "#ff6f61",
    marginRight: theme.spacing(1),
  },
  name: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  button: {
    color: "#fff",
    backgroundColor: "#ff6f61",
    padding: theme.spacing(1.5, 4),
    height:'35px',
    borderRadius: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#e2583e",
    },
  },
}));

const LawyersDisplay = () => {
  const classes = useStyles();
  const [lawyers, setLawyers] = useState([]);
  const [filters, setFilters] = useState({
    page: "1",
    case: "divorce-lawyers",
    city: "Chennai",
  });

  useEffect(() => {
    const fetchLawyers = async () => {
      const data = await LawyersList(filters);
      setLawyers(data);
    };

    fetchLawyers();
  }, [filters]);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <Select
        name="case"
        value={filters.case}
        onChange={handleFilterChange}
        className={classes.select}
      >
        <MenuItem value="divorce-lawyers">Divorce Lawyers</MenuItem>
        <MenuItem value="criminal-lawyers">Criminal Lawyers</MenuItem>
        <MenuItem value="banking-finance-lawyers">Banking & Finance Lawyers</MenuItem>
        <MenuItem value="civil-lawyers">Civil Lawyers</MenuItem>
        <MenuItem value="patent-lawyers">Patent Lawyers</MenuItem>
        <MenuItem value="property-lawyers">Property Lawyers</MenuItem>
      </Select>
      <Select
        name="city"
        value={filters.city}
        onChange={handleFilterChange}
        className={classes.select}
      >
        <MenuItem value="Chennai">Chennai</MenuItem>
        <MenuItem value="Mumbai">Mumbai</MenuItem>
        <MenuItem value="Delhi">Delhi</MenuItem>
        <MenuItem value="Noida">Noida</MenuItem>
        <MenuItem value="Kerala">Kerala</MenuItem>
        <MenuItem value="Gurgaon">Gurgaon</MenuItem>▬
        <MenuItem value="Pune">Pune</MenuItem>
      </Select>
      <Grid container spacing={3}>
        {lawyers.map((lawyer, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <Grid container alignItems="center">
                <Grid item>
                  <CardMedia
                    className={classes.media}
                    image={lawyer.image_link}
                    title={lawyer.name}
                  />
                </Grid>
                <Grid item>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h2"
                      className={classes.name}
                    >
                      {lawyer.name}
                    </Typography>
                    <Box display="flex" alignItems="center" mb={2}>
                      <StarRatings
                        rating={Number(lawyer.rating)}
                        starRatedColor="#ff6f61"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                        starSpacing="2px"
                      />
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <LocationOnIcon className={classes.icon} />
                      {lawyer.location}
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <WorkIcon className={classes.icon} />
                      Experience: {lawyer.experience}
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <DescriptionIcon className={classes.icon} />
                      Practice Area: {lawyer.practice_area}
                    </Box>
                    <Button
                      variant="contained"
                      className={classes.button}
                      href={lawyer.contact_link}
                    >
                      Contact
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LawyersDisplay;
