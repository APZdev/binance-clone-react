import {
    NavbarContainer,
    BinanceNavLogo,
    NavbarCategoriesContainer,
    NavbarRightSection,
    AuthenticationButtonsContainer,
    LogInButton,
    RegisterButton,
    BinanceNavLogoLink,
} from "./style";
import ThemeSwitch from "../ThemeSwitch";
import BinanceLogo from "../../assets/Images/SVG/home-binance-logo.svg";

import NavbarCategory from "./NavbarCategory";
import { navbarData } from "../../constants/navbarData";

const NavbarCategories = () => {
    return (
        <>
            {navbarData.map((item, index) => (
                <NavbarCategory key={index} props={item} />
            ))}
        </>
    );
};

export default function Navbar() {
    return (
        <>
            <NavbarContainer>
                <BinanceNavLogoLink href="localhost:3000">
                    <BinanceNavLogo src={BinanceLogo} alt="binance-icon" />
                </BinanceNavLogoLink>
                <NavbarCategoriesContainer>
                    <NavbarCategories />
                </NavbarCategoriesContainer>
                <div className="empty_space"></div>
                <AuthenticationButtonsContainer>
                    <LogInButton href="https://www.binance.com/en">Log In</LogInButton>
                    <div className="empty_spacer" />
                    <RegisterButton href="https://www.binance.com/en">Register</RegisterButton>
                </AuthenticationButtonsContainer>
                <NavbarRightSection className="navbar_right_section">
                    <div className="download_button_container">
                        <p>Downloads</p>
                    </div>
                    <div className="navbar_user_section_container">
                        <p>English</p>
                        <div className="navbar_spacer" />
                        <p>USD</p>
                        <div className="navbar_spacer" />
                        <ThemeSwitch />
                    </div>
                </NavbarRightSection>
            </NavbarContainer>
        </>
    );
}
