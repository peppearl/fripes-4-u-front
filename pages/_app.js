import '../styles/globals.css'
import '../styles/style.css'
import UserContext from "../contexts/UserContext";

function MyApp({Component, pageProps}) {
    return (
        <UserContext>
            <Component {...pageProps} />
        </UserContext>
    )
}

export default MyApp
