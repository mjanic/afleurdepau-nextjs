import Pinksection from "@/app/(main)/components/ui/Pinksection";
import Image from "next/image";

export default async function Features () {
    return (
        <>
        <Pinksection
                title= 'Caractéristiques'
                paragraph= 'Chaque notre bougie souivre le reglement stricte et passe le testing. Alors parce que cest fait main chaque bougie est unique. '
        />
        <div className='features flex items-center justify-center p-8 flex-col sm:flex-row'>
            <div className='feature flex flex-col items-center m-2.5 max-w-96 bg-paubeige shadow-lg'>               
                <Image className='max-w-full' 
                    src="/soya-wax232.jpg" 
                    alt="hand candle"
                    width={600}
                    height={400} 
                /> 
                <h2 className='p-2 md:text-xl'>100% Soya Wax</h2>              
            </div>          
            <div className='feature flex flex-col items-center m-2.5 max-w-96 bg-paubeige shadow-lg'>                
                <Image className='max-w-full' 
                    src="/handmade232.jpg" 
                    alt="pitcher" 
                    width={600}
                    height={400} 
                />    
                <h2 className='p-2 md:text-xl'>Fait Main </h2>           
            </div>
            <div className='feature flex flex-col items-center m-2.5 max-w-96 bg-paubeige shadow-lg'>               
                <Image className='max-w-full' 
                    src="/parfumes-image232.jpg" 
                    alt="parfume" 
                    width={600}
                    height={400} 
                />  
                <h2 className='p-2 md:text-xl'>Parfumes natureles</h2>             
            </div>
        </div>
        </>
    )
}