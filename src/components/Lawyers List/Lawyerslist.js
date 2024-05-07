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
  Fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WorkIcon from "@material-ui/icons/Work";
import DescriptionIcon from "@material-ui/icons/Description";
import StarRatings from "react-star-ratings";
import en from "../../variables/en.json";
import "./LawyersList.css";

const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: "rgba(255,255,255,0.6)", // Increased transparency
    fontFamily: "'Roboto', sans-serif",
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    
  },
  card: {
    maxWidth: 350,
    margin: theme.spacing(2),
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    borderRadius: theme.spacing(2), // Glassmorphic card
    background: "rgba(255, 255, 255, 0.2)", // Reddish pink background (#FF3333)
    backdropFilter: "blur(10px)", // Glassmorphic card
    border: "1px solid rgba(255, 51, 51, 0.5)", // Glassmorphic card
    "&:hover": {
      transform: "scale(1.02)",
      transition: "transform 0.2s",
    },
  },
  media: {
    height: 100,
    width: 100,
    borderRadius: "50%",
    margin: "20px",
  },
  select: {
    margin: theme.spacing(1),
    minWidth: 120,
    border: "1px solid #FF3333", // Reddish pink border for select
    color: "#FF3333", // Reddish pink color for select
    '&:focus': {
      backgroundColor: 'transparent', // Override focus color here
      borderColor: '#FF3333', // Maintain the border color on focus
    },
  },
  icon: {
    color: "#FF3333", // Reddish pink icon color
    marginRight: theme.spacing(1),
  },
  name: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    color: "#3f3f3f",
  },
  button: {
    color: "#fff",
    backgroundColor: "#FF3333", // Reddish pink button background
    padding: theme.spacing(1.5, 4),
    height: "35px",
    borderRadius: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#FF3333", // Maintain the same color on hover
    },
  },
  animatedBg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
}));

const LawyersDisplay = () => {
  const classes = useStyles();
  const [lawyers, setLawyers] = useState([]);
  const [filters, setFilters] = useState({
    page: "1",
    case: "divorce-lawyers",
    place: "Chennai",
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
      <div className={classes.animatedBg}>
        {[...Array(20)].map((_, index) => (
          <div className="square" key={index}></div> // Changed to squares
        ))}
      </div>
      <Select
        name="case"
        value={filters.case}
        onChange={handleFilterChange}
        className={classes.select}
      >
        {en.case.map((item, index) => (
          <MenuItem key={index} value={item.key} style={{ color: "#FF3333" }}>
            {item.value}
          </MenuItem>
        ))}
      </Select>
      <Select
        name="place"
        value={filters.place}
        onChange={handleFilterChange}
        className={classes.select}
      >
        {en.city.map((item, index) => (
          <MenuItem key={index} value={item.key} style={{ color: "#FF3333" }}>
            {item.value}
          </MenuItem>
        ))}
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
                    style={{border:'1px solid red'}}
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
                        starRatedColor="#FF3333" // Reddish pink star color
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
                      {en.contact}
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
