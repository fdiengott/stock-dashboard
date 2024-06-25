import {
    ACCEPT_QUOTE,
    GET_BALANCES,
    GET_QUOTE,
    GET_STOCK,
    Stock,
} from "@/api/stocks";
import { useMutation, useQuery } from "@apollo/client";

export const useStocks = () => {
    const { loading, error, data } = useQuery(GET_BALANCES);

    const stocks = data?.portfolioAssetBalanceList?.portfolioAssetBalances;

    type StockType = Omit<Stock, "price"> & {
        amountUsdValue?: number;
        latestPriceUsd?: number;
    };

    const transformedStocks = stocks?.map((stock: StockType) => ({
        id: stock.id,
        symbol: stock.symbol,
        price: stock.amountUsdValue || stock.latestPriceUsd,
    }));

    return {
        loading,
        error,
        data: transformedStocks,
    };
};

export const useStock = (id: string) => {
    const { loading, error, data } = useQuery(GET_STOCK, {
        variables: { id },
    });

    const stock = data?.assetMarketData;

    return {
        loading,
        error,
        data: { ...stock, price: stock?.latestPriceUsd },
    };
};

export const useBuyStock = (id: string, shares: number) => {
    const [getQuote, { data: gqData, loading: gqLoading, error: gqError }] =
        useMutation(GET_QUOTE);

    const [acceptQuote, { data: aqData, loading: aqLoading, error: aqError }] =
        useMutation(ACCEPT_QUOTE);

    const buyStock = async () => {
        try {
            const { data: gqData } = await getQuote({
                variables: { assetId: id, amount: shares },
            });

            const quoteId = gqData?.tradeCreateQuote?.id;

            console.log({ gqData, quoteId });

            if (!quoteId) throw new Error("Failed to get quote");

            const { data: acceptData } = await acceptQuote({
                variables: { quoteId },
            });

            return {
                status: acceptData?.tradeAcceptQuote?.status,
                buyStock,
            };
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    const status = aqData?.tradeAcceptQuote?.status;

    return {
        loading: gqLoading || aqLoading,
        error: gqError || aqError,
        status,
        buyStock,
        data: gqData,
    };
};
