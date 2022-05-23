import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavbarSubCategoryCard } from "./NavbarSubCategoryCard";
import CurrencySelector from "./CurrencySelector";

import { NavbarCategoryContainer, NavbarCategorySelectorContainer, NavbarSubCategoriesContainer, SubCategoriesCardContainer } from "./style";
import { Label } from "../../../../../shared/components/Label";

interface Props {
    item: {
        categoryGraphics: JSX.Element;
        payWithBanner: boolean;
        labelText: string;
        subCategoriesColumnSize: number;
        subCategories: Array<{
            iconGraphics: JSX.Element;
            newLabel: boolean;
            name: string;
            description: string;
        }>;
    };
}

export const NavbarCategory: React.FC<Props> = ({ item }) => {
    const { categoryGraphics, payWithBanner, labelText, subCategoriesColumnSize, subCategories } = item;

    return (
        <NavbarCategoryContainer>
            <NavbarCategorySelectorContainer>
                {categoryGraphics}
                {labelText !== "" && <Label text={labelText} />}
                {subCategories.length > 0 ? <FontAwesomeIcon className="category_arrow" icon={faCaretDown} /> : ""}
            </NavbarCategorySelectorContainer>
            {subCategories.length > 0 ? (
                <NavbarSubCategoriesContainer>
                    {payWithBanner ? <CurrencySelector /> : <div className="empty_spacer"></div>}
                    <SubCategoriesCardContainer subCategoriesColumnSize={subCategoriesColumnSize}>
                        {subCategories.map((subCategoriesData, index) => (
                            <NavbarSubCategoryCard key={index} subCategoriesData={subCategoriesData} />
                        ))}
                    </SubCategoriesCardContainer>
                </NavbarSubCategoriesContainer>
            ) : (
                <></>
            )}
        </NavbarCategoryContainer>
    );
};
