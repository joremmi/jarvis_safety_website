import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-3">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.svg"
                            alt="Jarvis Safety Logo"
                            width={50}
                            height={30}
                            priority
                        />
                        <span className="ml-2 text-xl font-semibold text-gray-800">
                            Jarvis Safety
                        </span>
                    </Link>
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-700 hover:text-blue-600">
                            Home
                        </Link>
                        <Link href="/services" className="text-gray-700 hover:text-blue-600">
                            Services
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
