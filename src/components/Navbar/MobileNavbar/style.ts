import styled from "styled-components";

export const MobileNavbarContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    pointer-events: none;

    width: 100vw;
    height: 100vh;

    & .closing_background {
        position: absolute;
        z-index: 1;

        width: 100vw;
        height: 100vh;
    }
`;

export const ClosingBackground = styled.div`
    position: absolute;
    z-index: 1;
    background-color: #00000033;
    pointer-events: auto;

    width: 100vw;
    height: 100vh;
`;

interface NavbarState {
    isMobile: boolean;
}

export const NavbarContentContainer = styled.div<NavbarState>`
    position: absolute;
    z-index: 2;
    pointer-events: all;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: red;
    width: 365px;
    height: 100vh;

    background-color: ${(props) => props.theme.mobileNavbar.default};

    transition: transform 0.5s;

    transform: translateX(${(props) => (props.isMobile ? "0px" : "375px")});
`;
