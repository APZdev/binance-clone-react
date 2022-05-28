import { ArrowIconContainer, CurrencyIcon, CurrencySelectorContainer, CurrencyValue, CurrencyValueContainer, PayWithText } from "./style";

import EuroIcon from "../../../../../../assets/Images/PNG/euro-icon.png";
import { SvgIcon } from "../../../../../../helpers/SVG/svgImport";

export const CurrencySelector: React.FC = () => {
    return (
        <CurrencySelectorContainer>
            <PayWithText>Pay with</PayWithText>
            <CurrencyValueContainer>
                <CurrencyIcon src={EuroIcon} alt="currency-icon" />
                <CurrencyValue>EUR</CurrencyValue>
                <ArrowIconContainer>
                    <SvgIcon id="icon-h-dropdown-arrow" width={18} height={18} />
                </ArrowIconContainer>
            </CurrencyValueContainer>
        </CurrencySelectorContainer>
    );
};
