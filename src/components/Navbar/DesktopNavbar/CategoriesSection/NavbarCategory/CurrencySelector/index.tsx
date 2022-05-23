import { ArrowIconContainer, CurrencyIcon, CurrencySelectorContainer, CurrencyValueContainer } from "./style";

import EuroIcon from "../../../../../../assets/Images/PNG/euro-icon.png";
import { SvgIcon } from "../../../../../../helpers/SVG/svgImport";

export default function CurrencySelector() {
    return (
        <CurrencySelectorContainer>
            <p>Pay with</p>
            <CurrencyValueContainer>
                <CurrencyIcon src={EuroIcon} alt="currency-icon" />
                <p className="currency_value">EUR</p>
                <ArrowIconContainer>
                    <SvgIcon id="icon-h-dropdown-arrow" width={18} height={18} />
                </ArrowIconContainer>
            </CurrencyValueContainer>
        </CurrencySelectorContainer>
    );
}
