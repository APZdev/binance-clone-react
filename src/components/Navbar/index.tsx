import { NavbarContainer, BinanceNavLogo } from "./style";
import ThemeSwitch from "../ThemeSwitch";
import BinanceLogo from "../../assets/Images/SVG/home-binance-logo.svg";

export default function Navbar() {
    return (
        <>
            <NavbarContainer>
                <a href="localhost:3000">
                    <BinanceNavLogo src={BinanceLogo} alt="binance-icon" />
                </a>
                <ThemeSwitch />
            </NavbarContainer>
        </>
    );
}
