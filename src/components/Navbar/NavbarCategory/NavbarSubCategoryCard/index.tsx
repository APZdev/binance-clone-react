import { CardContainer, CardDescription, CardName, RightArrowIcon } from "./style";

export default function NavbarSubCategoryCard(item: any) {
    const { iconGraphics, name, description } = item.item;

    return (
        <CardContainer>
            <div className="image_container">{iconGraphics}</div>
            <div className="card_info_container">
                <CardName>{name}</CardName>
                <CardDescription>{description}</CardDescription>
            </div>
            <RightArrowIcon />
        </CardContainer>
    );
}
