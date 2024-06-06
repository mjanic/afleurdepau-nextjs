import Pinksection from "@/app/(main)/components/ui/Pinksection"

export default function Reviews () {
    return(
        <div>
        <Pinksection
                title= "Découvrez ce que disent les autres..."
                paragraph= "Les avis de quelques-uns de nos clients fidèles"   
        />
        <div className='flex flex-col sm:grid sm:grid-cols-3 items-center justify-center p-8'>
            <div className='max-w-[300px] flex flex-col h-60 justify-self-center items-center m-2.5 bg-paubeige shadow-lg p-2.5 text-center rounded-lg'>                
                <h1>Geraldine</h1>
                <h3 className='m-2'>☆☆☆☆☆</h3>
                <p className='text-xs md:text-sm'>I am buyig candles every month and i am very happy, they smell amazing and they look beautifull.</p>              
            </div>          
            <div className='max-w-[300px] flex flex-col h-60 justify-self-center items-center m-2.5 bg-paubeige shadow-lg p-2.5 text-center rounded-lg'>                
                <h1>Anais</h1>
                <h3 className='m-2'>☆☆☆☆☆</h3>
                <p className='text-xs md:text-sm'>My colegue told me about how her daughter is making candles and broth them to us to see, i was amased and now when i dont have idea for a gift i know where to look.</p>              
            </div>  
            <div className='max-w-[300px] flex flex-col h-60 justify-self-center items-center m-2.5 bg-paubeige shadow-lg p-2.5 text-center rounded-lg'>                
                <h1>Nadia</h1>
                <h3 className='m-2'>☆☆☆☆☆</h3>
                <p className='text-xs md:text-sm'>I am hair sallon owner and i made a deal with Pauline to offer her candles to my clients, we sold out a lot so i give green light all shop owners to make busines with A fleur de Pau.</p>              
            </div> 
        </div>
        </div>
    )
}