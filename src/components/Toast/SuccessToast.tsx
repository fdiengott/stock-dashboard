import { CircleCheckIcon } from "lucide-react";
import { DialogTitle } from "../ui/dialog";

const SuccessToast = () => {
    return (
        <>
            <CircleCheckIcon className="size-12 text-green-500" />
            <div className="space-y-2 text-center">
                <DialogTitle asChild>
                    <h3 className="text-2xl font-bold">
                        Transaction Successful
                    </h3>
                </DialogTitle>
                <p className="text-muted-foreground">
                    Your payment has been processed successfully.
                </p>
            </div>
        </>
    );
};

export default SuccessToast;
