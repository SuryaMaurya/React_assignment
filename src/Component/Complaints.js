import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { amber, green } from '@material-ui/core/colors';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles1 = makeStyles(theme => ({
  positive: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, variant } = props;

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          {message}
        </span>
      }
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  variant: PropTypes.oneOf(['error', 'info', 'positive']).isRequired,
};

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles2();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      
      <MySnackbarContentWrapper
        variant="error"
        className={classes.margin}
        message="This is an error message!"
      />
      <MySnackbarContentWrapper
        variant="info"
        className={classes.margin}
        message="This is an information message!"
      />
      <MySnackbarContentWrapper
        variant="positive"
        className={classes.margin}
        message="This is for positive Complaints"
      />
    </div>
  );
}