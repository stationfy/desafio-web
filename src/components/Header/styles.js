import styled from 'styled-components';
import ToolbarUI from '@material-ui/core/Toolbar';
import TypographyUI from '@material-ui/core/Typography';
import GridUI from '@material-ui/core/Grid';

export const Grid = styled(GridUI)``;

export const Toolbar = styled(ToolbarUI)`
  z-index: 999;
  background: #181818;
  width: 100%;
  height: 70px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  svg {
    color: #fff;
    font-size: 30px;
    position: absolute;
    left: 0px;
    margin: auto 10px;
    cursor: pointer;
  }
`;
export const Typography = styled(TypographyUI)``;
