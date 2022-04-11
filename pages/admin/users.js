import Users from "../../components/layouts/Users";
import Login from "../../components/layouts/Login";
import Default from "../../components/layouts/Default";
import {useUser} from "../../contexts/UserContext";

export default function UsersAdmin() {
    const {user, role} = useUser()
  return (
      <div>
        <Default>
            {!user && <Login/>}
            {user !== null && role === "admin" &&
                <Users/>
            }
        </Default>
      </div>
  )
}
