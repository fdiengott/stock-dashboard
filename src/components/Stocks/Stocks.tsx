"use client";

import { Stock } from "@/api/stocks";
import { useStocks } from "./hooks";
import Link from "next/link";

export default function Stocks() {
    const { loading, error, data: stocks } = useStocks();

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Stock Dashboard</h1>
            </header>
            <main className="flex-1 p-6">
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-muted text-muted-foreground">
                                <th className="px-4 py-3 text-left font-medium">
                                    Ticker
                                </th>
                                <th className="px-4 py-3 text-right font-medium">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {stocks?.map((stock: Stock) => (
                                <tr
                                    className="border-b hover:bg-muted/20"
                                    key={stock.symbol}
                                >
                                    <td className="px-4 py-3 font-medium">
                                        <Link href={`/stocks/${stock.symbol}`}>
                                            {stock.symbol}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-3 text-right font-medium">
                                        ${stock.amountUsdValue}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
