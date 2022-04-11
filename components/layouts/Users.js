import React, {useEffect, useState} from 'react';
import {useUser} from "../../contexts/UserContext";
import axios from "axios";

export default function Users() {

    const {user, token} = useUser()

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/users", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((response) => {
            console.log(response)
            setUsers(response.data);
        })
    }, [token]);
    return (
        <div>
            <section className="pt-5 pb-52">
                <div className="m-auto px-20">
                    <div className="text-center">
                        <h1 className="font-link text-9xl mt-5" style={{marginBottom: "-100px"}}>Utilisateurs
                            inscrits</h1>
                        <div className="my-5 m-auto border-2 border-solid rounded-3xl border-rouge bg-beige">
                            <div className="mt-24">
                                <p className="font-text font-semibold mb-6">Bonjour {user}</p>
                            </div>
                            <ul>
                                {users.map(user => {
                                    return (
                                        <li className="mb-2 align-top text-base font-text"
                                            key={user.id}>
                                            {user.username}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
