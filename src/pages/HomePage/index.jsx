import Navbar from "../../components/Navbar/index";
import { Helmet } from "react-helmet";
import { MainContentContainer } from "./style";

function HomePage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Buy/Sell Bitcoin, Ether and Altcoins | Cryptocurrency Exchange | Binance</title>
                <link href="http://fonts.cdnfonts.com/css/gotham" rel="stylesheet"></link>
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
