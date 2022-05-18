import Navbar from "../../components/Navbar/index";
import { Helmet } from "react-helmet-async";
import { MainContentContainer } from "./style";

function HomePage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Buy/Sell Bitcoin, Ether and Altcoins | Cryptocurrency Exchange | Binance</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=IBM+Plex+Sans+Condensed:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=IBM+Plex+Serif:ital@0;1&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <MainContentContainer>MainContent</MainContentContainer>
            </main>
            <footer>Footer</footer>
        </>
    );
}

export default HomePage;
