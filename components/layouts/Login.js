import React from 'react';
import {useForm} from 'react-hook-form';
import Link from 'next/link';
import {useUser} from "../../contexts/UserContext";
const axios = require('axios');

export default function Login() {
    const {setToken, token} = useUser();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios
            .post("http://localhost:3000/auth/login", data)
            .then((response) => {
                if(response.data.errmessage){
                    this.errmessage=response.data.errmessage
                } else {
                    setToken(response.data.access_token)
                }});
    }

    return (
        <div>
            <section className="pt-5 pb-52">
                <div className="m-auto px-20">
                    <div className="text-center">
                        <h1 className="font-link text-9xl mt-5" style={{marginBottom: "-100px"}}>Connexion</h1>
                        <div className="my-5 m-auto border-2 border-solid rounded-3xl border-rouge bg-beige">
                            <div className="mt-24">
                                <p className="font-text font-semibold mb-6">Merci d&apos;entrer votre identifiant et mot
                                    de
                                    passe</p>
                                <form className="block" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-6 relative">
                                        <label
                                            className="p-0 bottom-ex absolute leading-normal font-link text-xs translate-y-1 ease-in-out duration-300 transition-all">Identifiant</label>
                                        <input
                                            className="mb-2.5 py-2.5 px-3.5 w-96 font-semibold placeholder bg-transparent border-solid  focus-visible:outline-none focus:outline-none focus:border-rouge border border-rose font-text placeholder:color-rouge"
                                            type="text" placeholder="Identifiant"
                                            autoFocus {...register("username", {})} />
                                    </div>
                                    <div className="mb-6 relative">
                                        <label
                                            className="p-0 bottom-ex absolute leading-normal font-link text-xs translate-y-1 ease-in-out duration-300 transition-all">Mot
                                            de passe</label>
                                        <input
                                            className="mb-2.5 py-2.5 px-3.5 w-96 font-semibold placeholder bg-transparent border-solid  focus-visible:outline-none focus:outline-none focus:border-rouge border border-rose font-text placeholder:color-rouge"
                                            type="password" placeholder="Mot de passe" {...register("password", {})} />
                                    </div>
                                    <button
                                        className="action-button before:absolute before:bg-rouge relative text-beige border-rouge w-96 py-3.5 px-7 border border-solid uppercase text-center font-link"
                                        type="submit">Connexion
                                    </button>
                                    <div className="mb-8 mt-6 font-text font-semibold">
                                        <span>Tu n'as pas de compte ? </span><Link href="/signup" passHref><a>Crées en un</a></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}