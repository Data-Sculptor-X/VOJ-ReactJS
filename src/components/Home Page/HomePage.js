import React from "react";
import { makeStyles, Typography, Container, Grid, Button } from "@material-ui/core";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom"; // Correct import for navigation

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    backgroundColor: "#fff5f5",
    borderRadius: "15px",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)",
    overflow: "hidden",
  },
  section: {
    marginBottom: theme.spacing(8),
  },
  image: {
    width: "100%",
    borderRadius: "15px",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
    padding: theme.spacing(2),
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#ff6f61",
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  subheading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: theme.spacing(2),
  },
  point: {
    marginBottom: theme.spacing(2),
    color: "#333",
  },
  button: {
    backgroundColor: "#ff6f61",
    color: "#fff",
    marginTop: theme.spacing(4),
    "&:hover": {
      backgroundColor: "#e65e52",
    },
  },
}));

const NewHomepage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleExploreClick = () => {
    navigate("/login"); // Correct use of navigate function
  };

  return (
    <Container className={classes.root}>
      <animated.div style={fade}>
        <Typography className={classes.heading}>
          Welcome to Indian E-Law Book
        </Typography>
      </animated.div>

      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInUp}>
            <Grid container spacing={4} className={classes.section}>
              <Grid item xs={12} md={6}>
                <img src="https://source.unsplash.com/featured/?law,books" alt="Extensive Database" className={classes.image} />
              </Grid>
              <Grid item xs={12} md={6} className={classes.textContainer}>
                <Typography variant="h5" className={classes.subheading}>
                  Extensive Database
                </Typography>
                <Typography variant="body1" className={classes.point}>
                  Our platform provides access to a comprehensive collection of Indian laws and regulations. You can easily navigate through various acts, sections, and chapters to find the legal information you need. The database is meticulously organized to ensure you can find specific laws without hassle.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        )}
      </InView>

      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInUp}>
            <Grid container spacing={4} className={classes.section}>
              <Grid item xs={12} md={6} className={classes.textContainer}>
                <Typography variant="h5" className={classes.subheading}>
                  Up-to-date Information
                </Typography>
                <Typography variant="body1" className={classes.point}>
                  Stay informed with the latest updates and amendments to Indian laws. Our platform ensures that you have access to the most current legal information, keeping you updated with changes in legislation as they happen.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src="https://source.unsplash.com/featured/?law,legal" alt="Up-to-date Information" className={classes.image} />
              </Grid>
            </Grid>
          </motion.div>
        )}
      </InView>

      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInUp}>
            <Grid container spacing={4} className={classes.section}>
              <Grid item xs={12} md={6}>
                <img src="https://source.unsplash.com/featured/?law,justice" alt="User-Friendly Interface" className={classes.image} />
              </Grid>
              <Grid item xs={12} md={6} className={classes.textContainer}>
                <Typography variant="h5" className={classes.subheading}>
                  User-Friendly Interface
                </Typography>
                <Typography variant="body1" className={classes.point}>
                  Navigate through our app with ease, thanks to its intuitive design and layout. We prioritize user experience, ensuring that both legal professionals and the general public can access the information they need quickly and efficiently.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        )}
      </InView>

      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInUp}>
            <Grid container spacing={4} className={classes.section}>
              <Grid item xs={12} md={6} className={classes.textContainer}>
                <Typography variant="h5" className={classes.subheading}>
                  Legal AI Chatbot
                </Typography>
                <Typography variant="body1" className={classes.point}>
                  Our state-of-the-art AI chatbot is designed to answer your legal questions efficiently. Whether you need information on specific laws or general legal advice, our chatbot provides accurate and prompt responses, making legal information accessible to everyone.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src="https://source.unsplash.com/featured/?chatbot,AI" alt="Legal AI Chatbot" className={classes.image} />
              </Grid>
            </Grid>
          </motion.div>
        )}
      </InView>

      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInUp}>
            <Grid container spacing={4} className={classes.section}>
              <Grid item xs={12} md={6}>
                <img src="https://source.unsplash.com/featured/?news,law" alt="Law News" className={classes.image} />
              </Grid>
              <Grid item xs={12} md={6} className={classes.textContainer}>
                <Typography variant="h5" className={classes.subheading}>
                  Law News
                </Typography>
                <Typography variant="body1" className={classes.point}>
                  Stay updated with the latest news in the legal world. Our platform provides current news and developments in the field of law, helping you stay informed about significant legal changes and trends.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        )}
      </InView>

      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInUp}>
            <Grid container spacing={4} className={classes.section}>
              <Grid item xs={12} md={6} className={classes.textContainer}>
                <Typography variant="h5" className={classes.subheading}>
                  Lawyer Details
                </Typography>
                <Typography variant="body1" className={classes.point}>
                  Find detailed information about lawyers, including their areas of expertise, contact information, and professional background. Our directory makes it easy to connect with the right legal professional for your needs.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src="https://source.unsplash.com/featured/?lawyer,legal" alt="Lawyer Details" className={classes.image} />
              </Grid>
            </Grid>
          </motion.div>
        )}
      </InView>

      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Grid container justifyContent="center">
          <Button variant="contained" className={classes.button} onClick={handleExploreClick}>
            Explore Now
          </Button>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default NewHomepage;
