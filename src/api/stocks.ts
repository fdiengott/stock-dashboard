import { gql } from "@apollo/client";

export type Stock = {
    symbol: string;
    name: string;
    amountUsdValue: number;
};
export const GET_BALANCES = gql`
    query GetPorfolio {
        portfolioAssetBalanceList {
            portfolioAssetBalances {
                name
                symbol
                amountUsdValue
            }
        }
    }
`;
