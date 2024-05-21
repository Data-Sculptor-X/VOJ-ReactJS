import React from "react";
import { Typography, makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    backgroundColor: "#fff5f5",
    borderRadius: "15px",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "#ff6f61",
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  superheading: {
    fontSize: "3rem",
    marginBottom:"20px",
    fontWeight: "800",
    color: "#ff6f61",
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  section: {
    marginBottom: theme.spacing(2),
  },
  point: {
    marginBottom: theme.spacing(1),
    color: "#333",
  },
  heading:{
    fontSize:"18px",
    fontWeight:"bolder"
  }
}));

const PrivacyPolicy = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.superheading}>Privacy Policy</Typography>
      <div className={classes.section}>
        <Typography variant="h6" className={classes.heading}>
          1. Introduction
        </Typography>
        <Typography variant="body1" className={classes.point}>
          We are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h6" className={classes.heading}>
          2. Information Collection
        </Typography>
        <Typography variant="body1" className={classes.point}>
          We collect information you provide directly to us and information we get from your use of our services.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h6" className={classes.heading}>
          3. Use of Information
        </Typography>
        <Typography variant="body1" className={classes.point}>
          We use the information to provide, maintain, and improve our services, and to communicate with you.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h6" className={classes.heading}>
          4. Sharing of Information
        </Typography>
        <Typography variant="body1" className={classes.point}>
          We do not share your personal information with third parties except as described in this policy.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h6" className={classes.heading}>
          5. Data Security
        </Typography>
        <Typography variant="body1" className={classes.point}>
          We use various security measures to protect your information from unauthorized access and disclosure.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h6" className={classes.heading}>
          6. Cookies
        </Typography>
        <Typography variant="body1" className={classes.point}>
          We use cookies to enhance your experience on our site. You can control the use of cookies through your browser settings.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h6" className={classes.heading}>
          7. User Rights
        </Typography>
        <Typography variant="body1" className={classes.point}>
          You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h6" className={classes.heading}>
          8. Changes to the Policy
        </Typography>
        <Typography variant="body1" className={classes.point}>
          We may update this policy from time to time. We will notify you of any changes by posting the new policy on our site.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h6" className={classes.heading}>
          9. Contact Information
        </Typography>
        <Typography variant="body1" className={classes.point}>
          If you have any questions about this policy, please contact us at privacy@example.com.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h6" className={classes.heading}>
          10. Acceptance of Terms
        </Typography>
        <Typography variant="body1" className={classes.point}>
          By using our services, you agree to the terms of this privacy policy.
        </Typography>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
