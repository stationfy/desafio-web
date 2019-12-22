import styled from 'styled-components';
import ToolbarUI from '@material-ui/core/Toolbar';
import TypographyUI from '@material-ui/core/Typography';

export const Toolbar = styled(ToolbarUI)`
  background: #212121;
  width: 100%;
  height: 70px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    left: 0px;
    margin: auto 10px;
    cursor: pointer;
  }
`;
export const Typography = styled(TypographyUI)``;
