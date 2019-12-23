import React from 'react';
import PropTypes from 'prop-types';
import { GoArrowLeft as BackIcon } from 'react-icons/go';

import history from '../../services/history';
import { Grid, Toolbar, Typography } from './styles';

export default function Header({ title, mainPage }) {
  function handleBackHistory() {
    history.goBack();
  }

  return (
    <Grid container direction="column" justify="center" alignItems="stretch">
      <Toolbar>
        {!mainPage && <BackIcon onClick={handleBackHistory} />}
        <Typography variant="h5" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </Grid>
  );
}

Header.defaultProps = {
  mainPage: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  mainPage: PropTypes.bool,
};
