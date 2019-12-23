import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const Profile = styled(Grid)`
  padding-left: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;

  strong {
    color: #181818;
    font-size: 12px;
  }

  img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin-bottom: 3px;
  }
`;
