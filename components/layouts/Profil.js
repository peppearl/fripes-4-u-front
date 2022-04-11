import React from 'react';
import Link from 'next/link';
import {useUser} from "../../contexts/UserContext";
import {useForm} from "react-hook-form";
import axios from "axios";
import Router from "next/router";

export default function Profil() {
    const {user, logOut} = useUser()

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {
        axios
            .post("http://localhost:3000/users", data)
            .then((response) => {
                if (response.data.errmessage) {
                    this.errmessage = response.data.errmessage
                } else {
                    Router.push('/')
                }
            });
    }

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