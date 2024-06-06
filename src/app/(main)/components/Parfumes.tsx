import Pinksection from "@/app/(main)/components/ui/Pinksection";
import prisma from "@/lib/db";

export default async function Parfumes () {
    const parfumes = await prisma.parfume.findMany();
    const parfumeArray = parfumes.map( (parfume) => {
          return (
            <div key={parfume.id} className='parfume flex flex-col items-center justify-center'>
                <img className="rounded-[176px/130px] cursor-pointer w-10/12" src={`${parfume.imgUrl.substring(6)}`} alt={parfume.name}/>
                <h2 className={`mb-4`}>{parfume.name}</h2>
            </div>
          )      
    }) 

    return (
        <>
            <Pinksection 
                title="Parfums"
                paragraph="Pour notre mélange, nous n'utilisons que des parfums fabriqués en France et garantis sans CMR. Ci-dessous, vous pouvez sélectionner l'un des parfums et voir tous les produits avec ce parfum disponibles."
            />
            <div className='parfumes grid grid-cols-2 sm:grid-cols-5 text-center py-5 px-12'>
                {parfumeArray}
            </div>
        </>
    )
}