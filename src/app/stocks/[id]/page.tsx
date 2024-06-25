"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useBuyStock, useStock } from "@/components/Stocks/hooks";
import { useState } from "react";
import Spinner from "@/components/Spinner/Spinner";
import Toast from "@/components/Toast/Toast";

const Page = ({ params }: { params: { id: string } }) => {
    const [shares, setShares] = useState(1);

    const { loading, error, data } = useStock(params.id);
    const {
        buyStock,
        status,
        loading: buyLoading,
        error: buyError,
    } = useBuyStock(params.id, shares);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await buyStock();

        if (status === "accepted") {
            setShares(1);
        }
    };

    return (
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
            <Toast show={status === "executed"} status={status} />
            <div className="grid gap-4 md:gap-10 items-start relative">
                <Spinner show={buyLoading} />
                <div className="hidden md:flex items-start">
                    <div className="grid gap-4">
                        <h1 className="font-bold text-3xl">{data.symbol}</h1>
                        <div className="text-xl font-bold">
                            Price: ${data.price}
                        </div>
                        <p className="text-base text-muted-foreground">
                            {data.descriptionMd}
                        </p>
                    </div>
                </div>
                <form className="grid gap-4 md:gap-8" onSubmit={handleSubmit}>
                    <div className="grid gap-2">
                        <Label htmlFor="shares" className="text-base">
                            Shares
                        </Label>
                        <div className="flex items-center gap-2">
                            <Input
                                id="shares"
                                type="number"
                                min="1"
                                className="w-24"
                                value={shares}
                                onChange={(e) =>
                                    setShares(Number(e.target.value))
                                }
                            />
                            <div className="text-2xl font-bold">
                                x ${data.price}
                            </div>
                            <div className="text-2xl font-bold ml-auto">
                                = ${data.price * shares}
                            </div>
                        </div>
                    </div>
                    <Button
                        className="border border-primary"
                        disabled={buyLoading}
                        size="lg"
                        type="submit"
                    >
                        Purchase
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Page;
