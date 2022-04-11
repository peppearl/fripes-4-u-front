import Image from 'next/image'
import Link from 'next/link';

export default function Robes({clothes}) {
    return (
        <div className="mt-14 flex">
            <div className="px-6 flex flex-row flex-wrap">
                {clothes.map(clothe => {
                    return (
                        <div className="mb-14 mr-14 align-top inline-block text-base border-rouge border-2 border-solid"
                             key={clothe.id}>
                            <Link href={`/clothes/tee-shirt/${clothe.id}`}>
                                <a>
                                    <Image src={clothe.image} width={255} height={379} />
                                    <div className="border-t-rouge border-solid border-2 mt-6minus pt-2 min-h-75" >
                                        <h2 className="mx-4 font-nav text-lg">{clothe.name}</h2>
                                        <div className="font-link mx-4">
                                            <span>{clothe.price}€</span>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
