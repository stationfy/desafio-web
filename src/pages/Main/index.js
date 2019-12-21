import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';
import HeaderLayout from '../../layouts/header';

export default function Main() {
  return (
    <HeaderLayout title="GitHub Pops" mainPage>
      <Container>
        <h1>main</h1>
        <p>
          <Link to="/repository">repository</Link>
        </p>
      </Container>
    </HeaderLayout>
  );
}
