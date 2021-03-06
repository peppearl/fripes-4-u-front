import Link from 'next/link';
import Image from 'next/image';
import logo from '../../img/fripes4u.png'
import styles from "../../styles/Home.module.css";
import {useUser} from "../../contexts/UserContext";

export default function Navigation() {
    const {user, role} = useUser()
    return (
        <header className={styles.container}>
            <div className="flex px-4 py-8 items-center justify-between h-40">
                <div className="flex items-center mb-10 flex-1">
                    <div>
                        <div className="text-base font-link">
                            <Link href="/a-propos" passHref>
                                <a className="inline-block px-2.5">A propos</a>
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
                                <Link href="/clothes/all" passHref>
                                    <a>Accueil</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/clothes/tee-shirt" passHref>
                                    <a>Tee-Shirt</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/clothes/pulls" passHref>
                                    <a>Pulls</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/clothes/jeans" passHref>
                                    <a>Jeans</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/clothes/robes" passHref>
                                    <a>Robes</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/clothes/tops" passHref>
                                    <a>Tops</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/clothes/jupes" passHref>
                                    <a>Jupes</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/clothes/chaussures" passHref>
                                    <a>Chaussures</a>
                                </Link>
                            </li>
                            <li className="mx-5 inline-block my-1.5">
                                <Link href="/clothes/accessoires" passHref>
                                    <a>Accessoires</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="mb-10 flex justify-center">
                    <span className="w-29%">
                        <Link href="/" passHref>
                            <a><Image src={logo} alt="Fripes 4 u"/></a>
                        </Link>
                    </span>
                </div>
                <div className="flex items-center mb-10 justify-end flex-1">
                    <Link href="/admin/users" passHref>
                        <a className="inline-block leading-none ml-6 font-link" aria-label="Admin">
                            {user !== null && role === "admin" &&
                                <p>Admin</p>
                            }
                        </a>
                    </Link>
                    <Link href="/vendre" passHref>
                        <a className="inline-block leading-none ml-6 font-link" aria-label="Recherche">
                            {user !== null &&
                                <p>Vendre un article</p>
                            }
                        </a>
                    </Link>
                    <Link href="/compte" passHref>
                        <a className="inline-block leading-none ml-6"
                           aria-label="Compte">
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
                    <Link href="/messages" passHref>
                        <a className="inline-block leading-none ml-6 font-link"
                           aria-label="Messages">
                            <p>Messages</p>
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}