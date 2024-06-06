export default function Footerimage() {
    return(
        <div className='footer-image w-full relative bg-[url("/flowersfooter.jpg")] bg-cover h-[30vw] bg-center'>
            <div className='overlay absolute top-0 left-0 w-full h-full bg-black/20'>

            </div>
            <div className='flowers-text relative z-1 px-[10vw] pt-[12vw]'>
                <p className='text-center text-white p-3 border-white border-l-4 bg-black/50 italic text-xs sm:text-sm md:text-base'> 
                    Laissez vous tenter par une agréable  et unique expérience 
                    olfactive qui vous procurera une douce sensation de chaleur et de bien être. 
                </p>
            </div>
        </div>
    )
}