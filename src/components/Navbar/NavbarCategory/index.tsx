import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavbarSubCategoryCard from "./NavbarSubCategoryCard";
import NavbarLabel from "./NavbarLabel";
import CurrencySelector from "./CurrencySelector";

import { NavbarCategoryContainer, NavbarCategorySelectorContainer, NavbarSubCategoriesContainer } from "./style";

export default function NavbarCategory(props: any) {
    const { categoryGraphics, payWithBanner, labelText, child } = props.props;

    return (
        <NavbarCategoryContainer>
            <NavbarCategorySelectorContainer>
                {categoryGraphics}
                {labelText === "" ? <></> : <NavbarLabel text={labelText} />}
                {child.length > 0 ? <FontAwesomeIcon className="category_arrow" icon={faCaretDown} /> : ""}
            </NavbarCategorySelectorContainer>
            <NavbarSubCategoriesContainer>
                {payWithBanner === true ? <CurrencySelector /> : <div className="empty_spacer"></div>}
                {child.map((item: any, index: any) => (
                    <NavbarSubCategoryCard key={index} item={item} />
                ))}
            </NavbarSubCategoriesContainer>
        </NavbarCategoryContainer>
    );
}