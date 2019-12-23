import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { Container, ListStyled } from './styles';

export default function List({ children }) {
  return (
    <Grid container direction="column" justify="center" alignItems="stretch">
      <Container>
        <ListStyled>{children}</ListStyled>
      </Container>
    </Grid>
  );
}

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
