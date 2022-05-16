import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavbarSubCategoryCard from "./NavbarSubCategoryCard";
import NavbarLabel from "./NavbarLabel";
import CurrencySelector from "./CurrencySelector";

import { NavbarCategoryContainer, NavbarCategorySelectorContainer, NavbarSubCategoriesContainer, SubCategoriesCardContainer } from "./style";

export default function NavbarCategory(props: any) {
    const { categoryGraphics, payWithBanner, labelText, subCategories, subCategoriesColumnSize } = props.props;

    return (
        <NavbarCategoryContainer>
            <NavbarCategorySelectorContainer>
                {categoryGraphics}
                {labelText === "" ? <></> : <NavbarLabel text={labelText} />}
                {subCategories.length > 0 ? <FontAwesomeIcon className="category_arrow" icon={faCaretDown} /> : ""}
            </NavbarCategorySelectorContainer>
            {subCategories.length > 0 ? (
                <NavbarSubCategoriesContainer>
                    {payWithBanner === true ? <CurrencySelector /> : <div className="empty_spacer"></div>}
                    <SubCategoriesCardContainer subCategoriesColumnSize={subCategoriesColumnSize}>
                        {subCategories.map((item: any, index: any) => (
                            <NavbarSubCategoryCard key={index} item={item} />
                        ))}
                    </SubCategoriesCardContainer>
                </NavbarSubCategoriesContainer>
            ) : (
                <></>
            )}
        </NavbarCategoryContainer>
    );
}
