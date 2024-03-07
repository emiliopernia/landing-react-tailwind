import { bicycleLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"
const Nav = () => {
    return (
        <header className="padding-x absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={bicycleLogo}
                        alt="logo"
                        width={110}
                        height={110} />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-gray-700 hover:underline"
                            >{item.label}
                            </a>
                        </li>
                    ))
                    }
                </ul>
                <div className="hidden max-lg:block">
                    <img
                        src={hamburger}
                        alt="hamburguer menu"
                        width={25}
                        height={25} />
                </div>
            </nav>
        </header>
    )
}

export default Nav