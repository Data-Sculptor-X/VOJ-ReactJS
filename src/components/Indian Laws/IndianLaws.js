import React, { useEffect, useState } from "react";
import { IndianLawList, getQuery } from "store/actions/General/authActions";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  IconButton,
  InputBase,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: "#fff5f5",
  },
  card: {
    margin: theme.spacing(2),
    "&:hover": {
      transform: "scale(1.02)",
      transition: "transform 0.2s",
    },
    borderRadius: "15px",
    boxShadow:
      "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#ff6f61",
    marginBottom: theme.spacing(2),
  },
  enactmentDate: {
    fontSize: "1rem",
    color: "#888",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: theme.shape.borderRadius,
    height: "48px",
    maxWidth:"400px",
    padding: "0 16px",
    marginBottom: "16px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#333",
  },
  iconButton: {
    color: "#ff6f61",
  },
}));

const IndianLaws = () => {
  const classes = useStyles();
  const [laws, setLaws] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery) {
        try {
          const data = await getQuery({ query: searchQuery });
          setSearchResults(data);
        } catch (error) {
          console.error("Error fetching search results:", error);
          setSearchResults([]);
        }
      } else {
        const data = await IndianLawList({ page });
        setLaws(data);
      }
    };

    fetchData();
  }, [searchQuery, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = async () => {
    setPage(1);
    try {
      const data = await getQuery({ query: searchQuery });
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} style={{ textAlign: "center" }}>
        Indian E-Law Book
      </Typography>
      <div className={classes.search}>
        <InputBase
          className={classes.input}
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <IconButton className={classes.iconButton} onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </div>
      {searchQuery ? (
        searchResults.length === 0 ? (
          <Typography variant="body1" style={{ textAlign: "center" }}>
            No matching search found
          </Typography>
        ) : (
          searchResults.map((law, index) => (
            <Card className={classes.card} key={index}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {law["Act Title"]}
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.enactmentDate}
                    style={{ marginBottom: "12px", marginTop: "2px" }}
                  >
                    <strong> {law["Enactment Date"]} </strong>
                  </Typography>
                </Typography>
                <ReactMarkdown>
                  {Object.values(law["Act Definition"]).join(" ")}
                </ReactMarkdown>
                {law["Chapters"] && (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Chapters</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container direction="column">
                        {Object.entries(law["Chapters"]).map(
                          ([chapterID, chapter], idx) => (
                            <Accordion key={idx}>
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                              >
                                <Typography>{chapterID}</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  <strong>{chapter.Name}</strong>
                                  <ReactMarkdown>
                                    {Object.values(chapter.Sections).join(" ")}
                                  </ReactMarkdown>
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          )
                        )}
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                )}
              </CardContent>
            </Card>
          ))
        )
      ) : (
        laws.map((law, index) => (
          <Card className={classes.card} key={index}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {law["Act Title"]}
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.enactmentDate}
                  style={{ marginBottom: "12px", marginTop: "2px" }}
                >
                  <strong> {law["Enactment Date"]} </strong>
                </Typography>
              </Typography>
              <ReactMarkdown>
                {law["Act Definition"]
                  ? Object.values(law["Act Definition"]).join(" ")
                  : ""}
              </ReactMarkdown>
              {law["Chapters"] && (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Chapters</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container direction="column">
                      {Object.entries(law["Chapters"]).map(
                        ([chapterID, chapter], idx) => (
                          <Accordion key={idx}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography>{chapterID}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <strong>{chapter.Name}</strong>
                                <ReactMarkdown>
                                  {chapter.Sections
                                    ? Object.values(chapter.Sections).join(" ")
                                    : ""}
                                </ReactMarkdown>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        )
                      )}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              )}
            </CardContent>
          </Card>
        ))
      )}
      {searchQuery
        ? searchResults.length > 0 && (
            <div className={classes.pagination}>
              <Pagination count={43} page={page} onChange={handlePageChange} />
            </div>
          )
        : laws.length > 0 && (
            <div className={classes.pagination}>
              <Pagination count={43} page={page} onChange={handlePageChange} />
            </div>
          )}
    </div>
  );
};

export default IndianLaws;
