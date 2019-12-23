import styled from 'styled-components';
import GridUI from '@material-ui/core/Grid';

export const Container = styled(GridUI)`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: transparent;
`;

export const RepositoryInfoContainer = styled(GridUI)`
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

    svg {
      font-size: 14px;
      margin-right: 5px;
    }
  }
  .description {
    color: #505050;
    flex-wrap: wrap;
    word-break: break-all;
  }
`;

export const ForkStarInfoContainer = styled(GridUI)`
  padding-top: 5px;

  div {
    font-weight: bolder;

    color: #daa520;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 3px;
      margin-left: 10px;
      font-size: 17px;
    }

    .firstIcon {
      margin-left: 0px;
    }
  }
`;

export const UserInfoContainer = styled(GridUI)`
  margin-left: auto;
  margin-right: 5px;
`;
