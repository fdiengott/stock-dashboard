import Link from "next/link";

const Nav = () => {
    return (
        <header className="flex h-16 w-full items-center px-4 md:px-6">
            <Link href="/" className="text-lg font-bold" prefetch={false}>
                Anti Capital
            </Link>
        </header>
    );
};

export default Nav;
