import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import {
    DataDescription,
    DataTitle,
    EmailPhoneInput,
    GetStartedButton,
    InformativeDataTextContainer,
    InformativeDataTextsContainer,
    LandingImage,
    LandingSectionContainer,
    LandingSectionContentContainer,
    LandingText,
    NumberInputGetStarteContainer,
    PresentationContainer,
    PresentationStartSection,
    PresentationImageSection,
} from "./style";

import LandingImageDark from "../../assets/Images/PNG/dark-mode/foreground-image-dark.png";
import LandingImageWhite from "../../assets/Images/PNG/light-mode/foreground-image-light.png";
import { landingPageData } from "../../constants/landingPageData";
import { useMediaQuery } from "@mui/material";

export const LandingSection: React.FC = () => {
    const screenIsMobileSize = useMediaQuery("(min-width:767px)");
    const theme = useSelector((state: RootState) => state.theme.value);

    return (
        <LandingSectionContainer>
            <LandingSectionContentContainer>
                <PresentationContainer>
                    <PresentationStartSection>
                        <LandingText>Buy, trade, and hold 600+ cryptocurrencies on Binance</LandingText>
                        <NumberInputGetStarteContainer>
                            <EmailPhoneInput type="text" placeholder="Email/Phone number" />
                            <GetStartedButton>Get Started</GetStartedButton>
                        </NumberInputGetStarteContainer>
                    </PresentationStartSection>
                    <PresentationImageSection>
                        {screenIsMobileSize && (
                            <LandingImage src={theme === "light" ? LandingImageWhite : LandingImageDark} alt="landing-binance-image" />
                        )}
                    </PresentationImageSection>
                </PresentationContainer>
                <InformativeDataTextsContainer>
                    <InformativeDataTexts />
                </InformativeDataTextsContainer>
            </LandingSectionContentContainer>
        </LandingSectionContainer>
    );
};

const InformativeDataTexts = () => {
    return (
        <>
            {landingPageData.map((itemData, id) => (
                <InformativeDataTextContainer key={id}>
                    <DataTitle>{itemData.title}</DataTitle>
                    <DataDescription>{itemData.description}</DataDescription>
                </InformativeDataTextContainer>
            ))}
        </>
    );
};
