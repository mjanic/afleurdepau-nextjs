import Link from "next/link";
import { courgette } from "@/lib/fonts";

export default function Hero () {
    return (
        <div className='hero p-6 sm:p-8 md:p-12 items-left overflow-hidden bg-[url("/hero-mobile.jpg")] md:bg-[url("/hero-desktop.jpg")] bg-cover h-[550px] sm:h-[95vh]'>
            <div className='hero-text'>
                <h1 className={`${courgette.className} text-paulightpink my-2 text-4xl md:text-6xl`}>L'Art des Bougies</h1>
                <p className='py-2'>Créez une Ambiance Envoûtante <br />avec Nos Bougies Parfumées <br />Faite Main</p>
                <Link href="/shop"><button className="pau-button">EXPLOREZ</button></Link>
            </div>
        </div>
    )
}