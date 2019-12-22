import React from 'react';
import PropTypes from 'prop-types';
import BackIcon from '@material-ui/icons/KeyboardArrowLeft';
import Grid from '@material-ui/core/Grid';

import { Toolbar, Typography } from './styles';
import history from '../../services/history';

export default function Header({ title, mainPage }) {
  function handleBackHistory() {
    history.goBack();
  }

  return (
    <Grid container x>
      <Toolbar>
        {!mainPage && (
          <BackIcon
            onClick={handleBackHistory}
            style={{ fontSize: 50 }}
            color="#fff"
          />
        )}
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
