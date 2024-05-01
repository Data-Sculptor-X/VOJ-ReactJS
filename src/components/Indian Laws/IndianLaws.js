import React, { useEffect, useState } from 'react';
import { IndianLawList } from "store/actions/General/authActions";
import { Card, CardContent, Typography, Box, Button, makeStyles, Accordion, AccordionSummary, AccordionDetails, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pagination from '@material-ui/lab/Pagination';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: '#fff5f5',
  },
  card: {
    margin: theme.spacing(2),
    '&:hover': {
      transform: 'scale(1.02)',
      transition: 'transform 0.2s',
    },
    borderRadius: '15px',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ff6f61',
    marginBottom: theme.spacing(2),
  },
  button: {
    color: '#ff6f61',
    borderColor: '#ff6f61',
    padding: '5px 20px',
    '&:hover': {
      backgroundColor: '#ff6f61',
      color: '#fff',
    },
  },
  enactmentDate: {
    fontSize: '1rem',
    color: '#888',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));

const IndianLaws = () => {
  const classes = useStyles();
  const [laws, setLaws] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchLaws = async () => {
      const data = await IndianLawList({ page });
      setLaws(data);
    };

    fetchLaws();
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} style={{textAlign:'center'}}>Indian E-Law Book</Typography>
      {laws.map((law, index) => (
        <Card className={classes.card} key={index}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {law['Act Title']}
              <Typography variant="body2" component="p" className={classes.enactmentDate}>
                {law['Enactment Date']}
              </Typography>
            </Typography>
            <ReactMarkdown>{Object.values(law['Act Definition']).join(' ')}</ReactMarkdown>
            {law['Sections'] && typeof law['Sections'] === 'object' && (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Sections</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container direction="column">
                    {Object.entries(law['Sections']).map(([sectionTitle, sectionContent], idx) => (
                      <Accordion key={idx}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{sectionTitle}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <strong>{sectionContent.heading}</strong>
                            <ReactMarkdown>{Object.values(sectionContent.paragraphs).join(' ')}</ReactMarkdown>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            )}
          </CardContent>
        </Card>
      ))}
      <div className={classes.pagination}>
        <Pagination count={43} page={page} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default IndianLaws;
