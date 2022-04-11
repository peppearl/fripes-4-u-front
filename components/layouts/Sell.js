import React from 'react';
import {useForm} from 'react-hook-form';
import axios from "axios";
import {useUser} from "../../contexts/UserContext";

export default function Sell() {

    const { token } = useUser()
    const { register,handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        axios.post('http://localhost:3000/clothes', data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                console.log(res)
                if (res.data.errmessage) {
                    alert('Error')
                    console.log(errors);
                } else {
                    alert('Product created')
                }
            })
    };


    return (
        <div>
            <section className="pt-5 pb-52">
                <div className="m-auto px-20">
                    <div className="text-center">
                        <h1 className="font-link text-9xl mt-5" style={{marginBottom: "-100px"}}>Vendre</h1>
                        <div className="my-5 m-auto border-2 border-solid rounded-3xl border-rouge bg-beige">
                            <div className="mt-24">
                                <p className="font-text font-semibold mb-6">Merci d&apos;entrer les informations
                                    ci-dessous :</p>
                                <form className="block" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-6 relative">
                                        <label
                                            className="p-0 bottom-ex absolute leading-normal font-link text-xs translate-y-1 ease-in-out duration-300 transition-all">Nom
                                            du produit</label>
                                        <input
                                            className="mb-2.5 py-2.5 px-3.5 w-96 font-semibold placeholder bg-transparent border-solid  focus-visible:outline-none focus:outline-none focus:border-rouge border border-rose font-text placeholder:color-rouge"
                                            type="text" placeholder="Nom du produit"
                                            autoFocus {...register("name", {})} />
                                    </div>
                                    <div className="mb-6 relative">
                                        <label
                                            className="p-0 bottom-ex absolute leading-normal font-link text-xs translate-y-1 ease-in-out duration-300 transition-all">Marque</label>
                                        <input
                                            className="mb-2.5 py-2.5 px-3.5 w-96 font-semibold placeholder bg-transparent border-solid  focus-visible:outline-none focus:outline-none focus:border-rouge border border-rose font-text placeholder:color-rouge"
                                            type="text" placeholder="Marque" {...register("brand", {})} />
                                    </div>
                                    <div className="mb-6 relative">
                                        <label
                                            className="p-0 bottom-ex absolute leading-normal font-link text-xs translate-y-1 ease-in-out duration-300 transition-all">Prix</label>
                                        <input
                                            className="mb-2.5 py-2.5 px-3.5 w-96 font-semibold placeholder bg-transparent border-solid  focus-visible:outline-none focus:outline-none focus:border-rouge border border-rose font-text placeholder:color-rouge"
                                            type="number" placeholder="Prix" {...register("price", {})} />
                                    </div>
                                    <div className="mb-6 relative">
                                        <label
                                            className="p-0 bottom-ex absolute leading-normal font-link text-xs translate-y-1 ease-in-out duration-300 transition-all">Description</label>
                                        <textarea
                                            className="mb-2.5 py-2.5 px-3.5 w-96 font-semibold placeholder bg-transparent border-solid  focus-visible:outline-none focus:outline-none focus:border-rouge border border-rose font-text placeholder:color-rouge"
                                            placeholder="Description" {...register("description", {})} />
                                    </div>
                                    <div className="mb-6 relative">
                                        <label
                                            className="p-0 bottom-ex absolute leading-normal font-link text-xs translate-y-1 ease-in-out duration-300 transition-all">Catégorie</label>
                                        <select {...register("category")}
                                                className="mb-2.5 py-2.5 px-3.5 w-96 font-semibold placeholder bg-transparent border-solid  focus-visible:outline-none focus:outline-none focus:border-rouge border border-rose font-text placeholder:color-rouge"
                                        >
                                            <option value="Tee-Shirt">Tee-Shirt</option>
                                            <option value="Pull">Pull</option>
                                            <option value="Jean">Jean</option>
                                            <option value="Robe">Robe</option>
                                            <option value="Top">Top</option>
                                            <option value="Jupe">Jupe</option>
                                            <option value="Chaussure">Chaussure</option>
                                            <option value="Accessoire">Accessoire</option>
                                        </select>
                                    </div>
                                    <div className="mb-6 relative">
                                        <label
                                            className="p-0 bottom-ex absolute leading-normal font-link text-xs translate-y-1 ease-in-out duration-300 transition-all">Condition</label>
                                        <select {...register("condition")}
                                                className="mb-2.5 py-2.5 px-3.5 w-96 font-semibold placeholder bg-transparent border-solid  focus-visible:outline-none focus:outline-none focus:border-rouge border border-rose font-text placeholder:color-rouge"
                                        >
                                            <option value="Neuf avec étiquette">Neuf avec étiquette</option>
                                            <option value="Neuf sans étiquette"> Neuf sans étiquette</option>
                                            <option value="Très bon état"> Très bon état</option>
                                            <option value="Bon état"> Bon état</option>
                                        </select>
                                    </div>
                                    <div className="mb-6 relative">
                                        <label
                                            className="p-0 bottom-ex absolute leading-normal font-link text-xs translate-y-1 ease-in-out duration-300 transition-all">Couleur</label>
                                        <input
                                            className="mb-2.5 py-2.5 px-3.5 w-96 font-semibold placeholder bg-transparent border-solid  focus-visible:outline-none focus:outline-none focus:border-rouge border border-rose font-text placeholder:color-rouge"
                                            type="text" placeholder="Couleur" {...register("color", {})} />
                                    </div>
                                    <div className="mb-6 relative">
                                        <label
                                            className="p-0 bottom-ex absolute leading-normal font-link text-xs translate-y-1 ease-in-out duration-300 transition-all">Url
                                            de l&apos;image</label>
                                        <input
                                            className="mb-2.5 py-2.5 px-3.5 w-96 font-semibold placeholder bg-transparent border-solid  focus-visible:outline-none focus:outline-none focus:border-rouge border border-rose font-text placeholder:color-rouge"
                                            type="text" placeholder="Url de l'image" {...register("image", {})} />
                                    </div>
                                    <button
                                        className="action-button mb-8 before:absolute before:bg-rouge relative text-beige border-rouge w-96 py-3.5 px-7 border border-solid uppercase text-center font-link"
                                        type="submit">Créer l&apos;article
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}