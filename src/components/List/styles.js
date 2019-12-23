import styled from 'styled-components';
import ContainerUI from '@material-ui/core/Container';
import ListUI from '@material-ui/core/List';

export const ListStyled = styled(ListUI)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  overflow-y: auto;
  height: 85vh;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Container = styled(ContainerUI)``;
