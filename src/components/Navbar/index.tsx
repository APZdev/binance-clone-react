import { NavbarContainer } from "./style";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export default function Navbar() {
    return (
        <>
            <NavbarContainer>
                <DesktopNavbar />
                <MobileNavbar />
            </NavbarContainer>
        </>
    );
}
