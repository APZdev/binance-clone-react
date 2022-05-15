import Navbar from "../../components/Navbar/index";
import { MainContentContainer } from "./style";

function HomePage() {
    return (
        <>
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
