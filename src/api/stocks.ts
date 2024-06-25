import { gql } from "@apollo/client";

export type Stock = {
    id: string;
    symbol: string;
    price: number;
};
export const GET_BALANCES = gql`
    query GetPorfolio {
        portfolioAssetBalanceList {
            portfolioAssetBalances {
                id
                symbol
                amountUsdValue
            }
        }
    }
`;

export const GET_STOCK = gql`
    query GetStock($id: String!) {
        assetMarketData(in: { id: $id }) {
            id
            symbol
            latestPriceUsd
            descriptionMd
        }
    }
`;

export const GET_QUOTE = gql`
    mutation GetQuote($assetId: String!, $amount: Float!) {
        tradeCreateQuote(
            in: { assetId: $assetId, amount: $amount, direction: "market_buy" }
        ) {
            id
        }
    }
`;

export const ACCEPT_QUOTE = gql`
    mutation AcceptQuote($quoteId: String!) {
        tradeAcceptQuote(in: { id: $quoteId, direction: "market_buy" }) {
            status
        }
    }
`;
