import Default from "../../../../components/layouts/Default";
import {useRouter} from "next/router";
import axios from "axios";
import Clothe from "../../../../components/clothes/all/Clothe";

export default function IdJupe({clothe}) {
    const rooter = useRouter();
    return (
        <div>
            <Default>
                <section className="bg-beige w-full">
                    <Clothe clothe={clothe}/>
                </section>
            </Default>
        </div>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await axios.get("http://localhost:3000/clothes")
    const paths = res.data.map((clothe) => ({
        params: {id: clothe._id.toString()}
    }));
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths, fallback: false}
}

// This also gets called at build time
export async function getStaticProps(context) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    //const res = await fetch(`https://.../posts/${params.id}`)
    const id = context.params.id;
    const res = await axios.get(`http://localhost:3000/clothes/${id}`);
    const clothe = res.data;
    // Pass post data to the page via props
    return {props: {clothe: clothe}}
}
