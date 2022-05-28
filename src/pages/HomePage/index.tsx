import { Navbar } from "../../components/Navbar/index";
import { Helmet } from "react-helmet-async";
import { Footer, Header, Main } from "./style";
import { LandingSection } from "../../components/LandingSection";
import { PopularCryptoSection } from "../../components/PopularCryptoSection";

export const HomePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Buy/Sell Bitcoin, Ether and Altcoins | Cryptocurrency Exchange | Binance</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Header>
                <Navbar></Navbar>
            </Header>
            <Main>
                <LandingSection />
                <PopularCryptoSection />
            </Main>
            {/* <Footer>Footer</Footer> */}
        </>
    );
};
