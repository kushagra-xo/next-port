import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-white py-4 text-black font-medium">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">KUSHAGRA J.</Link>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/blog">BLOG</Link>
                        </li>
                        <li>
                            <Link href="/projects">PROJECTS</Link>
                        </li>
                        <li>
                            <Link href="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link href="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;