import { useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
    AppInfoTextContainer,
    BannerContainer,
    BannerContentContainer,
    BannerPageSpaceCreator,
    BinanceLogo,
    CloseButtonContainer,
    DownloadButtonContainer,
} from "./style";

import BinanceAppLogo from "../../assets/Images/PNG/logo.png";
import { FixedModalPortal } from "../../shared/components/FixedModalPortal";
import { SvgIcon } from "../../helpers/SVG/svgImport";

export const MobileAppBanner: React.FC = () => {
    const [displayBanner, setDisplayBanner] = useState<boolean>(true);
    const displayMobileAppBanner: boolean = !useMediaQuery("(min-width:1024px)") && displayBanner;

    return (
        <>
            {displayMobileAppBanner && (
                <>
                    <FixedModalPortal>
                        <BannerContainer>
                            <BannerContentContainer>
                                <BinanceLogo src={BinanceAppLogo} alt="binance-logo" />
                                <AppInfoTextContainer>
                                    <p className="title">BINANCE APP</p>
                                    <p className="description">Secure, fast and elegant.</p>
                                </AppInfoTextContainer>
                                <DownloadButtonContainer>
                                    <SvgIcon id="download-icon" width={20} height={20} />
                                </DownloadButtonContainer>
                                <CloseButtonContainer
                                    onClick={() => {
                                        setDisplayBanner(false);
                                    }}
                                >
                                    <SvgIcon id="close-icon" width={18} height={18} />
                                </CloseButtonContainer>
                            </BannerContentContainer>
                        </BannerContainer>
                    </FixedModalPortal>
                    <BannerPageSpaceCreator />
                </>
            )}
        </>
    );
};
