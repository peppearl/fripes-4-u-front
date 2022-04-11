import Default from "../components/layouts/Default";
import Login from "../components/layouts/Login";
import Profil from "../components/layouts/Profil";
import {useUser} from "../contexts/UserContext";

export default function Home() {
    const {user, logOut} = useUser()
  return (
      <div>
        <Default>
            {!user && <Login/>}
            {user !== null &&
                <Profil/>
            }
        </Default>
      </div>
  )
}
