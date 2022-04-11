import Image from "next/image";
import React from "react";

export default function Pull({clothe}) {
    return (
        <div className="m-50auto max-w-7xl flex flex-row">
            <div className="pt-14 pl-14 mx-40">
                <div className="border-rouge border-2 border-solid">
                    <Image src={clothe.image} width={255} height={379}/>
                </div>
            </div>
            <div className="pt-14 mr-14 w-96">
                <div>
                    <h1 className="text-3xl font-nav">{clothe.name}</h1>
                    <p className="font-link text-xl mt-4">{clothe.price}€</p>
                    <hr className="border-t-rouge border-2 border-solid my-6"/>
                    <div className="mt-6">
                        <ul className="ml-8 list-outside marker:text-rouge list-disc" role="list">
                            <li className="py-1.5">
                                <span className="font-link">Marque: </span><span
                                className="font-text">{clothe.brand}</span>
                            </li>
                            <li className="py-1.5">
                                <span className="font-link">Couleurs: </span><span
                                className="font-text">{clothe.color}</span>
                            </li>
                            <li className="py-1.5">
                                <span className="font-link">Description: </span><span
                                className="font-text">{clothe.description}</span>
                            </li>
                            <li className="py-1.5">
                                <span className="font-link">Condition: </span><span
                                className="font-text">{clothe.condition}</span>
                            </li>
                        </ul>
                    </div>
                    <button
                        className="action-button my-6 before:absolute before:bg-rouge relative text-beige border-rouge w-96 py-3.5 px-7 border border-solid uppercase text-center font-link"
                        >Acheter directement
                    </button>
                    <div className="text-center font-nav">ou</div>
                    <button
                        className="action-button my-6 before:absolute before:bg-rouge relative text-beige border-rouge w-96 py-3.5 px-7 border border-solid uppercase text-center font-link"
                        >Envoyer un message
                    </button>
                </div>
            </div>
        </div>
    )
}
