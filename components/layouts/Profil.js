import React from 'react';
import {useUser} from "../../contexts/UserContext";

export default function Profil() {
    const {user, logOut} = useUser()

    return (
        <div>
            <section className="pt-5 pb-52">
                <div className="m-auto px-20">
                    <div className="text-center">
                        <h1 className="font-link text-9xl mt-5" style={{marginBottom: "-100px"}}>Profil</h1>
                        <div className="my-5 m-auto border-2 border-solid rounded-3xl border-rouge bg-beige">
                            <div className="mt-24">
                                <p className="font-text font-semibold mb-6">Bonjour {user}</p>
                                <button
                                    onClick={logOut}
                                    className="action-button before:absolute before:bg-rouge relative text-beige border-rouge w-96 py-3.5 px-7 border border-solid uppercase text-center font-link mb-6"
                                >Se déconnecter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}