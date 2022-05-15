import { NavbarContainer, BinanceNavLogo, NavbarCategoriesContainer, MenuGridIcon } from "./style";
import ThemeSwitch from "../ThemeSwitch";
import BinanceLogo from "../../assets/Images/SVG/home-binance-logo.svg";

import NavbarCategory from "./NavbarCategory";

const NavbarCategories = () => {
    return (
        <>
            {navbarCategories.map((item, index) => (
                <NavbarCategory key={index} props={item} />
            ))}
        </>
    );
};

const navbarCategories = [
    {
        categoryGraphics: <MenuGridIcon />,
        payWithBanner: true,
        labelText: "",
        child: [
            {
                iconGraphics: <MenuGridIcon />,
                name: "Exchange",
                description: "Blockchain and crypto asset exchange",
            },
        ],
    },
    {
        categoryGraphics: <p>Buy Crypto</p>,
        payWithBanner: false,
        labelText: "EUR",
        child: [
            {
                iconGraphics: <MenuGridIcon />,
                name: "Bank Deposit",
                description: "Deposit EUR via SEPA or card",
            },
        ],
    },
    {
        categoryGraphics: <p>Markets</p>,
        payWithBanner: false,
        labelText: "",
        child: [],
    },
];
export type NavbarCateogryType = typeof navbarCategories;

export default function Navbar() {
    return (
        <>
            <NavbarContainer>
                <a href="localhost:3000">
                    <BinanceNavLogo src={BinanceLogo} alt="binance-icon" />
                </a>
                <NavbarCategoriesContainer>
                    <NavbarCategories />
                </NavbarCategoriesContainer>
                <div className="empty_space"></div>
                <div className="navbar_right_section">
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
                </div>
            </NavbarContainer>
        </>
    );
}
