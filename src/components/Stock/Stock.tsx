import Link from "next/link";
import type { Stock } from "@/api/stocks";

const Stock = ({ stock }: { stock: Stock }) => {
    return (
        <tr className="border-b hover:bg-muted/20" key={stock.symbol}>
            <td className="px-4 py-3 font-medium">
                <Link href={`/stocks/${stock.id}`} prefetch={false}>
                    {stock.symbol}
                </Link>
            </td>
            <td className="px-4 py-3 text-right font-medium">${stock.price}</td>
        </tr>
    );
};

export default Stock;
