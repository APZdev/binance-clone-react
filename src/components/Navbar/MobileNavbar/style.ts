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
    overflow-y: scroll;
    position: absolute;
    z-index: 2;
    pointer-events: all;

    display: flex;
    flex-direction: column;

    width: 392px;
    height: 100vh;
    padding-bottom: 32px;

    background-color: ${(p) => p.theme.mobileNavbar.default};

    transition: transform 0.5s;

    transform: translateX(${(props) => (props.isMobile ? "0px" : "392px")});
`;

export const CloseButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 16px;

    color: #848e9c;
`;

export const AuthenticationSectionContainer = styled.div`
    padding: 16px;
`;
