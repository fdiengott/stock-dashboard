import { GET_BALANCES } from "@/api/stocks";
import { useQuery } from "@apollo/client";

export const useStocks = () => {
    const { loading, error, data } = useQuery(GET_BALANCES);

    return {
        loading,
        error,
        data: data?.portfolioAssetBalanceList?.portfolioAssetBalances,
    };
};
