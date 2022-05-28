import { NavbarContainer } from "./style";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar: React.FC = () => {
    return (
        <>
            <NavbarContainer>
                <DesktopNavbar />
                <MobileNavbar />
            </NavbarContainer>
        </>
    );
};
