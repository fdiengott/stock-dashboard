import { DialogTitle } from "../ui/dialog";

const ErrorToast = () => {
    return (
        <>
            <div className="space-y-2 text-center">
                <DialogTitle asChild>
                    <h3 className="text-2xl font-bold">Error</h3>
                </DialogTitle>
                <p className="text-muted-foreground">
                    Something went wrong. Please try again later.
                </p>
            </div>
        </>
    );
};

export default ErrorToast;
