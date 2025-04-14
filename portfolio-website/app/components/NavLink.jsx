import Link from "next/link";
const NavLink = ({ href, title }) => {
    return (
        <a
            href={href}
            className="block py-2 pl-3 pr-4 font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-300 sm:text-2xl rounded md:p-0 hover:text-white">
            {title}
        </a>
    );
};

export default NavLink;