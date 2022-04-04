import Link from 'next/link';
import Image from 'next/image';
import logo from '../../img/fripes4u.png'

export default function Navigation() {
    return (
        <header>
            <div className="flex px-4 py-8 items-center justify-between h-40">
                <div className="flex items-center mb-10">
                    <div>
                        <div className="text-base font-link">
                            <Link href="/about" passHref>
                                <a className="inline-block px-2.5">About</a>
                            </Link>
                            <Link href="/contact" passHref>
                                <a className="inline-block px-2.5">Contact</a>
                            </Link>
                            <Link href="/faq" passHref>
                                <a className="inline-block px-2.5">FAQ</a>
                            </Link>
                        </div>
                    </div>
                    <nav className="absolute top-28 left-0 pb-4 text-center w-full font-nav">
                        <ul className="mx-0">
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/" passHref>
                                    <a>Accueil</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/tee-shirt" passHref>
                                    <a>Tee-Shirt</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/pull" passHref>
                                    <a>Pulls</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/jeans" passHref>
                                    <a>Jeans</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/robes" passHref>
                                    <a>Robes</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/tops" passHref>
                                    <a>Tops</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/jupes" passHref>
                                    <a>Jupes</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/chaussures" passHref>
                                    <a>Chaussures</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/accessoires" passHref>
                                    <a>Accessoires</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="mb-10 flex justify-center">
                    <h1 className="w-29%">
                        <Link href="/" passHref>
                            <a><Image src={logo} alt="Fripes 4 u"/></a>
                        </Link>
                    </h1>
                </div>
                <div className="flex items-center mb-10 justify-end">
                    <Link href="/search" passHref>
                        <a className="inline-block leading-none" data-action="toggle-search" aria-label="Recherche">
                            <svg className="relative top-0.5 w-5 h-5" role="presentation" viewBox="0 0 21 21">
                                <g transform="translate(1 1)" stroke="currentColor" strokeWidth="2" fill="none"
                                   fillRule="evenodd" strokeLinecap="square">
                                    <path d="M18 18l-5.7096-5.7096"></path>
                                    <circle cx="7.2" cy="7.2" r="7.2"></circle>
                                </g>
                            </svg>
                        </a>
                    </Link>
                    <Link href="/compte" passHref>
                        <a className="inline-block leading-none ml-6" data-action="toggle-search"
                           aria-label="Recherche">
                            <svg className="relative top-0.5 w-5 h-5" role="presentation" viewBox="0 0 20 20">
                                <g transform="translate(1 1)" stroke="currentColor" strokeWidth="2" fill="none"
                                   fillRule="evenodd" strokeLinecap="square">
                                    <path
                                        d="M0 18c0-4.5188182 3.663-8.18181818 8.18181818-8.18181818h1.63636364C14.337 9.81818182 18 13.4811818 18 18"></path>
                                    <circle cx="9" cy="4.90909091" r="4.90909091"></circle>
                                </g>
                            </svg>
                        </a>
                    </Link>
                    <Link href="/panier" passHref>
                        <a className="inline-block leading-none ml-6" data-action="toggle-search"
                           aria-label="Recherche">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.6 148.3"
                                 className="relative top-0.5 w-5 h-5" role="presentation" stroke="currentColor">
                                <path className="fill-rouge" d="M104.3,35.3C100.5,15.2,83.8,0,63.8,0S27,15.2,23.3,35.3H0v113h127.6v-113H104.3z M63.8,7.8
	c15.8,0,29,11.8,32.5,27.5H31.2C34.8,19.5,48,7.8,63.8,7.8z"></path>
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}