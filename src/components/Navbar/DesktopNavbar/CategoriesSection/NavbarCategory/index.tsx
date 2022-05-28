import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    EmptySpacer,
    NavbarCategoryContainer,
    NavbarCategorySelectorContainer,
    NavbarSubCategoriesContainer,
    SubCategoriesCardContainer,
} from "./style";

import { Label } from "../../../../../shared/components/Label";

import { NavbarSubCategoryCard } from "./NavbarSubCategoryCard";
import { CurrencySelector } from "./CurrencySelector";

interface Props {
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
}

export const NavbarCategory: React.FC<Props> = ({ categoryGraphics, payWithBanner, labelText, subCategoriesColumnSize, subCategories }) => {
    return (
        <NavbarCategoryContainer>
            <NavbarCategorySelectorContainer>
                {categoryGraphics}
                {labelText !== "" && <Label text={labelText} />}
                {subCategories.length > 0 && <FontAwesomeIcon className="category_arrow" icon={faCaretDown} />}
            </NavbarCategorySelectorContainer>
            {subCategories.length > 0 && (
                <NavbarSubCategoriesContainer>
                    {payWithBanner ? <CurrencySelector /> : <EmptySpacer />}
                    <SubCategoriesCardContainer subCategoriesColumnSize={subCategoriesColumnSize}>
                        <SubCategoryCards subCategories={subCategories} />
                    </SubCategoriesCardContainer>
                </NavbarSubCategoriesContainer>
            )}
        </NavbarCategoryContainer>
    );
};

interface SubCategoriesCardsProps {
    subCategories: { iconGraphics: JSX.Element; newLabel: boolean; name: string; description: string }[];
}

const SubCategoryCards: React.FC<SubCategoriesCardsProps> = ({ subCategories }) => {
    return (
        <>
            {subCategories.map((subCategoriesData, index) => (
                <NavbarSubCategoryCard key={index} subCategoriesData={subCategoriesData} />
            ))}
        </>
    );
};
