import Link from "next/link"

export default async function Video () {
    return(
        <div className="video-section text-center gap-4 items-center bg-paubeige bg-gradientup py-12 px-8 flex flex-col lg:grid lg:grid-cols-3">
            <div className=" flex flex-col text-content justify-self-center px-5">
                <h2 className='opacity-70 font-bold m-1 text-2xl text-center'>Moments Captivants Dévoilés</h2>
                <p className='text-xs self-center text-center w-3/4 m-1 md:text-sm'>Découvrez l'art de la création de bougies parfumées à la main avec dévouement et passion. Chaque bougie raconte une histoire, évoque un souvenir et illumine vos sens. Explorez notre collection dès aujourd'hui.</p>
                <Link href="/shop" className="self-center"><button className='pau-button m-2 text-sm md:text-base'>BOUTIQUE</button></Link>
            </div>
            <div className="video-framew-10/12 col-span-2 p-5 border border-black/30 shadow-lg justify-self-center">
                <video src="/candlevideo2.mp4" autoPlay muted loop></video>
            </div>
        </div>
    )
}