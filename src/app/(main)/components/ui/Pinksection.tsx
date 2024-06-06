export default function Pinksection(props: {title: string, paragraph?: string}) {
    return (
        <div className='pink-section flex flex-col items-center text-center w-full'>
            <div className='pink-title w-full'>
                <h1 className='text-white text-3xl bg-pautranspink py-4 my-2.5 sm:text-4xl'>{props.title}</h1>
            </div>
            <div className='pink-p py-2 w-3/4 mb-4 h-auto text-sm md:mb-0 md:w-1/2'>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}