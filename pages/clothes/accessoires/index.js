import Default from "../../../components/layouts/Default";
import axios from "axios"
import Accessoires from "../../../components/clothes/accessoires";

export default function Accessories({clothes}) {
    return (
        <div>
            <Default>
                <section className="bg-beige w-full">
                    <header className="p-14">
                        <h1 className="text-center text-3xl font-link">Accessoires</h1>
                    </header>
                    <Accessoires clothes={clothes}/>
                </section>
            </Default>
        </div>
    )
}

export async function getStaticProps(context) {
    //Chercher des infos dans l'api
    const res = await axios.get("http://localhost:3000/clothes/collections/Accessoire")
    const clot = res.data.map(clothe => {
        return {
            id: clothe._id,
            name: clothe.name,
            brand: clothe.brand,
            price: clothe.price,
            description: clothe.description,
            category: clothe.category,
            condition: clothe.condition,
            color: clothe.color,
            image: clothe.image
        }
    });
    return {
        props: {
            clothes: clot,
        }
    }
}