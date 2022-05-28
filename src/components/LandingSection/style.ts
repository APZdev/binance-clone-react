import styled from "styled-components";
import DesktopLandingBackgroundImage from "../../assets/Images/PNG/web-background-image.png";
import TabletLandingBackgroundImage from "../../assets/Images/PNG/pad-background-image.png";
import MobileLandingBackgroundImage from "../../assets/Images/PNG/mobile-background-image.png";

export const LandingSectionContainer = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    justify-content: center;
    background-image: url(${DesktopLandingBackgroundImage});

    @media (max-width: 1022px) {
        background-image: url(${TabletLandingBackgroundImage});
    }

    @media (max-width: 767px) {
        background-image: url(${MobileLandingBackgroundImage});
    }
`;

export const LandingSectionContentContainer = styled.div`
    margin: 0 auto;
    padding: 0 24px;
    max-width: 1248px;

    @media (max-width: 767px) {
        padding: 0 16px;
    }
`;

export const PresentationContainer = styled.div`
    display: flex;
    padding-top: 80px;

    @media (max-width: 1022px) {
        padding-top: 40px;
        flex-direction: column-reverse;
    }

    @media (max-width: 767px) {
        padding-top: 24px;
    }
`;

export const PresentationStartSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 486px;
    margin-right: 106px;

    @media (max-width: 1022px) {
        padding-top: 50px;
        width: 100%;
        margin: 0;
    }

    @media (max-width: 767px) {
        padding: 0;
    }
`;

export const NumberInputGetStarteContainer = styled.div`
    margin-top: 48px;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;

        width: 100%;
        margin-top: 40px;
    }
`;

export const LandingText = styled.h1`
    font-weight: 600;
    font-size: 56px;
    line-height: 64px;
    min-height: 1.2em;

    @media (max-width: 767px) {
        font-size: 40px;
        line-height: 48px;
    }
`;

export const EmailPhoneInput = styled.input`
    width: 282px;
    height: 46px;
    padding: 0 12px;
    border-radius: 4px;
    border: 1px solid ${(p) => p.theme.input.border.default};
    color: ${(p) => p.theme.text.default};

    background-color: ${(p) => p.theme.input.background};

    &:hover {
        border-color: ${(p) => p.theme.input.border.hover};
    }

    &::placeholder {
        color: ${(p) => p.theme.text.alt};
        font-weight: 400;
        opacity: 0.7;
    }

    @media (max-width: 1022px) {
        width: 352px;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: 40px;
    }
`;

export const GetStartedButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(p) => p.theme.button.text};
    background-color: #fcd535;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 4px;
    margin-left: 16px;
    width: 160px;
    height: 48px;

    &:hover {
        color: #181a20;
        opacity: 0.9;
    }

    @media (max-width: 1022px) {
        width: 168px;
    }

    @media (max-width: 767px) {
        width: 100%;
        margin: 16px 0 0 0;
    }
`;

export const PresentationImageSection = styled.div`
    width: auto;
    flex: 1 1 0%;

    @media (max-width: 1022px) {
        width: 66%;
        margin: 0 auto;
    }
`;

export const LandingImage = styled.img`
    width: 100%;
`;

export const InformativeDataTextsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    padding: 80px 0;
    margin-left: -40px;
    margin-right: -40px;

    @media (max-width: 1022px) {
        padding: 56px 0;
        margin: 0;
    }

    @media (max-width: 767px) {
        padding: 24px 0 48px 0;
        margin-left: -8px;
        margin-right: -8px;
    }
`;

export const InformativeDataTextContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 25%;
    min-height: 96px;
    padding: 0 40px;

    @media (max-width: 1022px) {
        width: 50%;
        height: auto;

        padding: 24px 0;
    }

    @media (max-width: 767px) {
        padding: 16px 8px;
    }
`;

export const DataTitle = styled.p`
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;

    @media (max-width: 767px) {
        font-size: 24px;
        line-height: 32px;
    }
`;

export const DataDescription = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media (max-width: 767px) {
        font-size: 12px;
        line-height: 16px;
    }
`;
