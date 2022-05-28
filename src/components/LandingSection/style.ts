import styled from "styled-components";
import LandingBackgroundImage from "../../assets/Images/PNG/web-background-image.png";

export const LandingSectionContainer = styled.div`
    height: 840px;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${LandingBackgroundImage});
    -webkit-font-smoothing: antialiased;
`;

export const LandingSectionContentContainer = styled.div`
    max-width: 1248px;
    margin: 0 auto;
    padding: 0 24px;
`;

export const PresentationContainer = styled.div`
    padding-top: 80px;
    display: flex;
`;

export const PresentationLeftSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 486px;
    margin-right: 106px;
`;

export const NumberInputGetStarteContainer = styled.div`
    margin-top: 48px;
    display: flex;
    align-items: center;
`;

export const LandingText = styled.h1`
    font-weight: 600;
    font-size: 56px;
    line-height: 64px;
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
`;

export const PresentationRightSection = styled.div`
    width: auto;
    flex: 1 1 0%;
    order: 2;
`;

export const LandingImage = styled.img`
    width: 100%;
`;

export const InformativeDataTextsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
    margin-left: -40px;
    margin-right: -40px;
`;

export const InformativeDataTextContainer = styled.div`
    display: flex;

    flex-direction: column;
    width: 320px;
    height: 96px;
    padding: 0 40px;
`;

export const DataTitle = styled.p`
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
`;

export const DataDescription = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;
