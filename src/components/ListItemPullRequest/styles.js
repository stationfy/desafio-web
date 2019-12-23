import styled from 'styled-components';
import GridUI from '@material-ui/core/Grid';

export const Container = styled(GridUI)`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: transparent;
`;

export const PullRequestInfoContainer = styled(GridUI)`
  display: flex;
  flex-direction: column;

  .name {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #4e277b;
    font-size: 15px;
    margin-bottom: 3px;
    flex-wrap: wrap;
    word-break: break-all;
  }

  .description {
    margin-bottom: 3px;
    color: #505050;
    flex-wrap: wrap;
    word-break: break-all;
  }

  .date {
    color: #202020;
    font-weight: bold;
  }
`;

export const UserInfoContainer = styled(GridUI)`
  margin-left: auto;
  margin-right: 5px;
`;
