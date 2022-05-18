import { CurrencyIcon, CurrencySelectorContainer, CurrencyValueContainer } from "./style";

import EuroIcon from "../../../../../assets/Images/PNG/euro-icon.png";
import RightArrow from "../../../../../shared/components/RightArrow";

export default function CurrencySelector() {
    return (
        <CurrencySelectorContainer>
            <p>Pay with</p>
            <CurrencyValueContainer>
                <CurrencyIcon src={EuroIcon} alt="currency-icon" />
                <p className="currency_value">EUR</p>
                <RightArrow />
            </CurrencyValueContainer>
        </CurrencySelectorContainer>
    );
}
