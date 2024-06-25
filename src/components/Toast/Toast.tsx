import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SuccessToast from "./SuccessToast";
import ErrorToast from "./ErrorToast";
import { useEffect, useState } from "react";

const Toast = ({ show, status }: { show: boolean; status: string }) => {
    const [open, setOpen] = useState(show);

    const message = status === "executed" ? <SuccessToast /> : <ErrorToast />;

    useEffect(() => {
        setOpen(show);
    }, [show]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                className="sm:max-w-[425px]"
                style={{
                    backgroundColor:
                        "black" /* TODO: replace with custom prop */,
                }}
            >
                <div className="flex flex-col items-center justify-center gap-4 py-8">
                    {message}
                </div>
                <DialogFooter>
                    <div>
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Close
                            </Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default Toast;
