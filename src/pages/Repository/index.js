import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import HeaderLayout from '../../layouts/header';

export default function Repository() {
  const repository = useSelector(state => state.repositories);
  console.log(repository);

  return (
    <HeaderLayout title="Repository xx">
      <Container>
        <h1>repo data:</h1>
        <h1>{repository && JSON.stringify(repository, null, 2)}</h1>
      </Container>
    </HeaderLayout>
  );
}
