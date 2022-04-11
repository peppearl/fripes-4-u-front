import Default from "../components/layouts/Default";
import Login from "../components/layouts/Login";
import {useUser} from "../contexts/UserContext";

export default function Home() {
    const {user, logOut} = useUser()
  return (
      <div>
        <Default>
            {!user && <Login/>}
            {user !== null &&
                <div>
                    <p>Bonjour {user}</p>
                    <button onClick={logOut}>Se déconnecter</button>
                </div>
            }
        </Default>
      </div>
  )
}
