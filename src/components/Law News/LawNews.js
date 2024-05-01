import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Grid, Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: '#fff5f5',
  },
  card: {
    maxWidth: "100%",
    height: 'auto',
    margin: theme.spacing(5),
    '&:hover': {
      transform: 'scale(1.02)',
      transition: 'transform 0.2s',
    },
    borderRadius: '15px',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)',
  },
  media: {
    height: 200,
  },
  select: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  icon: {
    color: '#ff6f61',
    marginRight: theme.spacing(1),
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  date: {
    fontSize: '0.8rem',
    color: '#777',
    marginBottom: theme.spacing(1),
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
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ff6f61',
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
}));

const LawNews = () => {
  const classes = useStyles();
  const [news, setNews] = useState([]);
  const url = process.env.REACT_APP_NEWS_LINK;

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(url);
      setNews(response.data.results);
    };

    fetchNews();
  }, []);

  return (
    <div className={classes.root} >
      <Typography className={classes.heading}>Know What's Happening in Indian Law</Typography>
      {news.map((results, index) => (
        <Card className={classes.card} key={index}>
          <Grid container>
            <Grid item xs={6}>
              <CardMedia
                className={classes.media}
                image={results.image_url}
                title={results.title}
              />
            </Grid>
            <Grid item xs={6}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                  {results.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.date}>
                  {results.pubDate}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {results.description}
            </Typography>
            <Box mt={2}>
              <Button variant="outlined" className={classes.button} href={results.link}>Read more</Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LawNews;
