import styled from "styled-components";

export const BannerContainer = styled.div`
    pointer-events: all;
    z-index: 5;
    width: 100%;
    height: 66px;

    @media (max-width: 768px) {
        height: 60px;
    }
`;
export const BannerPageSpaceCreator = styled.div`
    pointer-events: none;
    width: 100%;
    height: 66px;

    background-color: #fff;

    @media (max-width: 768px) {
        height: 60px;
    }
`;

export const BannerContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 100%;
    width: auto;

    background-color: rgba(18, 22, 28, 0.9);
`;

export const BinanceLogo = styled.img`
    width: 34px;
    height: 34px;
    margin-right: 12px;

    background-color: black;
    padding: 4.5px;
    border-radius: 3px;
`;

export const DownloadButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(p) => p.theme.brand.default};

    width: 36px;
    height: 36px;
    margin: 0 12px;
    border-radius: 50%;
`;

export const AppInfoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    & .title {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.3;
        color: #fff;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    & .description {
        font-size: 14px;
        line-height: 1.3;
        color: #fff;

        @media (max-width: 768px) {
            font-size: 12px;
        }
    }
`;

export const CloseButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
