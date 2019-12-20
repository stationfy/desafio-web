import styled from 'styled-components';

export const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: ${(props) => (props.hidden ? 'none' : 'flex')};
    justify-content: center;
    z-index: 2;
    align-items: center;
    height: 4em;
    background-color: black;
`;