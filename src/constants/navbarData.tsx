import styled from "styled-components";

import { SvgIcon } from "../helpers/SVG/svgImport";

const MenuGridIcon = styled.div`
    color: ${(props) => props.theme.text.default};

    &:hover {
        color: ${(props) => props.theme.text.hover};
    }
`;

export const navbarData = [
    {
        categoryGraphics: (
            <MenuGridIcon className="category_icon">
                <SvgIcon id="icon-h-top-menu-s" width={24} height={24} />
            </MenuGridIcon>
        ),
        payWithBanner: false,
        labelText: "",
        subCategoriesColumnSize: 5,
        subCategories: [
            {
                iconGraphics: <SvgIcon id="spot" width={26} height={26} />,
                newLabel: false,
                name: "Exchange",
                description: "Blockchain and crypto asset exchange",
            },
            {
                iconGraphics: <SvgIcon id="institutional-and-vip" width={26} height={26} />,
                newLabel: false,
                name: "Institutional & VIP Services",
                description: "White-glove approach for tailored trading solutions",
            },
            {
                iconGraphics: <SvgIcon id="cloud" width={26} height={26} />,
                newLabel: false,
                name: "Cloud",
                description: "Enterprise exchange solutions",
            },
            {
                iconGraphics: <SvgIcon id="launchpad" width={26} height={26} />,
                newLabel: false,
                name: "Launchpad",
                description: "Token Launch Platform",
            },
            {
                iconGraphics: <SvgIcon id="gift-card" width={26} height={26} />,
                newLabel: false,
                name: "Binance Gift Card",
                description: "Customizable crypto gift card",
            },
            {
                iconGraphics: <SvgIcon id="academy" width={26} height={26} />,
                newLabel: false,
                name: "Academy",
                description: "Blockchain and crypto education",
            },
            {
                iconGraphics: <SvgIcon id="educate" width={26} height={26} />,
                newLabel: false,
                name: "Learn & Eearn",
                description: "Blockchain and crypto education",
            },
            {
                iconGraphics: <SvgIcon id="Dex" width={26} height={26} />,
                newLabel: false,
                name: "DEX",
                description: "Fast and secure decentralized digital asset exchange",
            },
            {
                iconGraphics: <SvgIcon id="research" width={26} height={26} />,
                newLabel: false,
                name: "Reasearch",
                description: "Institutional-grade analysis and reports",
            },
            {
                iconGraphics: <SvgIcon id="live" width={26} height={26} />,
                newLabel: true,
                name: "Binance Live",
                description: "Bringing blockchain broadcasts to you live",
            },
            {
                iconGraphics: <SvgIcon id="broker" width={26} height={26} />,
                newLabel: false,
                name: "Broker",
                description: "Trading terminal solutions",
            },
            {
                iconGraphics: <SvgIcon id="charity" width={26} height={26} />,
                newLabel: false,
                name: "Charity",
                description: "Powering blockchain for good",
            },
            {
                iconGraphics: <SvgIcon id="labs" width={26} height={26} />,
                newLabel: false,
                name: "Labs",
                description: "Incubator for top blockchain projects",
            },
            {
                iconGraphics: <SvgIcon id="trust-wallet" width={26} height={26} />,
                newLabel: false,
                name: "Trust Wallet",
                description: "Binance's official crypto wallet",
            },
            {
                iconGraphics: <SvgIcon id="api" width={26} height={26} />,
                newLabel: false,
                name: "APIs",
                description: "Unlimited opportunities with one Key",
            },
        ],
    },
    {
        categoryGraphics: <p className="category_title">Buy Crypto</p>,
        payWithBanner: true,
        labelText: "EUR",
        subCategoriesColumnSize: 5,
        subCategories: [
            {
                iconGraphics: <SvgIcon id="bank" width={26} height={26} />,
                newLabel: false,
                name: "Bank Deposit",
                description: "Deposit EUR via SEPA or card",
            },
            {
                iconGraphics: <SvgIcon id="card" width={26} height={26} />,
                newLabel: false,
                name: "Credit/Debit Card",
                description: "Buy crypto via card",
            },
            {
                iconGraphics: <SvgIcon id="p2p" width={26} height={26} />,
                newLabel: false,
                name: "P2P Trading",
                description: "Bank transfer and 100+ options",
            },
            {
                iconGraphics: <SvgIcon id="wallet" width={26} height={26} />,
                newLabel: false,
                name: "Cash Balance",
                description: "Buy Crypto with your EUR balance",
            },
            {
                iconGraphics: <SvgIcon id="payment" width={26} height={26} />,
                newLabel: false,
                name: "Third-party Payment",
                description: "Simplex, Banxa (SEPA)",
            },
        ],
    },
    {
        categoryGraphics: <p className="category_title">Markets</p>,
        payWithBanner: false,
        labelText: "",
        subCategoriesColumnSize: 1,
        subCategories: [],
    },
    {
        categoryGraphics: <p className="category_title">Trade</p>,
        payWithBanner: false,
        labelText: "",
        subCategoriesColumnSize: 7,
        subCategories: [
            {
                iconGraphics: <SvgIcon id="convert" width={26} height={26} />,
                newLabel: false,
                name: "Binance Convert",
                description: "The easiest way to trade",
            },
            {
                iconGraphics: <SvgIcon id="spot" width={26} height={26} />,
                newLabel: false,
                name: "Spot",
                description: "Trade crypto with advanced tools",
            },
            {
                iconGraphics: <SvgIcon id="margin" width={26} height={26} />,
                newLabel: false,
                name: "Margin",
                description: "Increase your profits with leverage",
            },
            {
                iconGraphics: <SvgIcon id="p2p" width={26} height={26} />,
                newLabel: false,
                name: "P2P",
                description: "Bank transfer and 100+ options",
            },
            {
                iconGraphics: <SvgIcon id="strategy-trading" width={26} height={26} />,
                newLabel: false,
                name: "Strategy Trading",
                description: "Trading made easy, trade like a pro",
            },
            {
                iconGraphics: <SvgIcon id="swap-farming" width={26} height={26} />,
                newLabel: false,
                name: "Swap Farming",
                description: "Swap to earn Bnb",
            },
            {
                iconGraphics: <SvgIcon id="fan-token" width={26} height={26} />,
                newLabel: false,
                name: "Fan Token",
                description: "Upgrade your fan experience",
            },
        ],
    },
    {
        categoryGraphics: <p className="category_title">Derivatives</p>,
        payWithBanner: false,
        labelText: "",
        subCategoriesColumnSize: 8,
        subCategories: [
            {
                iconGraphics: <SvgIcon id="futures" width={26} height={26} />,
                newLabel: false,
                name: "Binance Futures Overview",
                description: "View our fll range of crypto-derivative instruments",
            },
            {
                iconGraphics: <SvgIcon id="responsible-trading" width={26} height={26} />,
                newLabel: false,
                name: "Responsible Trading",
                description: "Learn how you could practice responsible trading with Binance Futures",
            },
            {
                iconGraphics: <SvgIcon id="futures-usdt-m" width={26} height={26} />,
                newLabel: false,
                name: "USDⓈ-M Futures",
                description: "Perpetual or Quarterly Contracts settled in Cryptocurrency",
            },
            {
                iconGraphics: <SvgIcon id="futures-coin-m" width={26} height={26} />,
                newLabel: false,
                name: "COIN-M Futures",
                description: "Perpetual or Quarterly Contracts settled in Cryptocurrency",
            },
            {
                iconGraphics: <SvgIcon id="futures-options-vanilla" width={26} height={26} />,
                newLabel: false,
                name: "Vanilla Options",
                description: "Buy and Sell European-style Vanilla Options.",
            },
            {
                iconGraphics: <SvgIcon id="futures-leveraged-token" width={26} height={26} />,
                newLabel: false,
                name: "Leveraged Tokens",
                description: "Enjoy increased leverage without risk of liquidation",
            },
            {
                iconGraphics: <SvgIcon id="battle" width={26} height={26} />,
                newLabel: false,
                name: "Battle",
                description: "Battle to Win, Long vs Short",
            },
            {
                iconGraphics: <SvgIcon id="vip" width={26} height={26} />,
                newLabel: false,
                name: "Derivatives Portal",
                description: "VIP Exclusive, Tailor-made Institutional Grade Services",
            },
        ],
    },
    {
        categoryGraphics: <p className="category_title">Earn</p>,
        payWithBanner: false,
        labelText: "",
        subCategoriesColumnSize: 5,
        subCategories: [
            {
                iconGraphics: <SvgIcon id="piggy-bank" width={26} height={26} />,
                newLabel: false,
                name: "Binance Earn",
                description: "One-stop Investment Solution",
            },
            {
                iconGraphics: <SvgIcon id="earn-savings" width={26} height={26} />,
                newLabel: false,
                name: "Savings",
                description: "Your Crypto Savings Account",
            },
            {
                iconGraphics: <SvgIcon id="vault" width={26} height={26} />,
                newLabel: false,
                name: "BNB Vault",
                description: "Earn Multi-benefits with BNB",
            },
            {
                iconGraphics: <SvgIcon id="liquid-swap" width={26} height={26} />,
                newLabel: false,
                name: "Liquidity Farming",
                description: "Add liquidity and earn double",
            },
            {
                iconGraphics: <SvgIcon id="pool" width={26} height={26} />,
                newLabel: false,
                name: "Binance Pool",
                description: "Mine more rewards by connecting to the pool",
            },
            {
                iconGraphics: <SvgIcon id="launchpad" width={26} height={26} />,
                newLabel: false,
                name: "Launchpad",
                description: "Token Launch Platform",
            },
            {
                iconGraphics: <SvgIcon id="earn-staking" width={26} height={26} />,
                newLabel: false,
                name: "Staking",
                description: "Easy Stake, Higher Returns",
            },
            {
                iconGraphics: <SvgIcon id="savings-dual" width={26} height={26} />,
                newLabel: false,
                name: "Dual Investment",
                description: "Commit your crypto holdings and enjoy high returns",
            },
            {
                iconGraphics: <SvgIcon id="auto-invest" width={26} height={26} />,
                newLabel: true,
                name: "Auto-Invest",
                description: "Accumulate crypto on autopilot",
            },
        ],
    },
    {
        categoryGraphics: <p className="category_title">Finance</p>,
        payWithBanner: false,
        labelText: "",
        subCategoriesColumnSize: 3,
        subCategories: [
            {
                iconGraphics: <SvgIcon id="card-binance" width={26} height={26} />,
                newLabel: false,
                name: "Binance Visa Card",
                description: "Convert and pay with crypto worldwide",
            },
            {
                iconGraphics: <SvgIcon id="wallet" width={26} height={26} />,
                newLabel: false,
                name: "Crypto Loans",
                description: "Get an instant loan secured by crypto assets",
            },
            {
                iconGraphics: <SvgIcon id="pay" width={26} height={26} />,
                newLabel: false,
                name: "Binance Pay",
                description: "Send and spend crypto at zero fees",
            },
        ],
    },
    {
        categoryGraphics: <p className="category_title">NFT</p>,
        payWithBanner: false,
        labelText: "New",
        subCategoriesColumnSize: 3,
        subCategories: [],
    },
];

export type NavbarCateogryType = typeof navbarData;
