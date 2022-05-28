import { NavbarSubCategoryCard } from "./NavbarSubCategoryCard";
import { CurrencySelector } from "./CurrencySelector";

import { NavbarCategoryContainer, NavbarCategorySelectorContainer, NavbarSubCategoriesContainer, SubCategoriesCardContainer } from "./style";
import { NavbarItem } from "../../NavbarItem";
import { useState } from "react";
import { SvgIcon } from "../../../../../helpers/SVG/svgImport";

const SubCategories = ({
    subCategories,
}: {
    subCategories: Array<{
        newLabel: boolean;
        name: string;
        description: string;
    }>;
}) => {
    return (
        <>
            {subCategories.map((subCategoriesData, index) => (
                <NavbarSubCategoryCard key={index} subCategoriesData={subCategoriesData} />
            ))}
        </>
    );
};

interface Props {
    item: {
        categoryIcon: JSX.Element;
        categoryName: string;
        payWithBanner: boolean;
        labelText: string;
        subCategoriesColumnSize: number;
        subCategories: Array<{
            newLabel: boolean;
            name: string;
            description: string;
        }>;
    };
}

export const NavbarCategory: React.FC<Props> = ({
    item: { categoryIcon, categoryName, payWithBanner, labelText, subCategoriesColumnSize, subCategories },
}) => {
    const [categoryCollapsed, setCategoryCollapsed] = useState<boolean>(true);

    return (
        <NavbarCategoryContainer>
            <NavbarCategorySelectorContainer
                onClick={() => {
                    setCategoryCollapsed(!categoryCollapsed);
                }}
            >
                <NavbarItem
                    icon={categoryIcon}
                    name={categoryName}
                    labelName={labelText}
                    optionalComponent={
                        subCategories.length > 0 ? (
                            <div className={"navbar_item_arrow_container" + (categoryCollapsed ? " reversed" : "")}>
                                <SvgIcon id="icon-h-dropdown-arrow" width={18} height={18} />
                            </div>
                        ) : (
                            <></>
                        )
                    }
                />
            </NavbarCategorySelectorContainer>
            {subCategories.length > 0 ? (
                <NavbarSubCategoriesContainer categoryCollapsed={categoryCollapsed} numberOfItems={subCategories.length} payWith={payWithBanner}>
                    {payWithBanner ? <CurrencySelector /> : <div className="empty_spacer"></div>}
                    <SubCategoriesCardContainer subCategoriesColumnSize={subCategoriesColumnSize}>
                        <SubCategories subCategories={subCategories} />
                    </SubCategoriesCardContainer>
                </NavbarSubCategoriesContainer>
            ) : (
                <></>
            )}
        </NavbarCategoryContainer>
    );
};
