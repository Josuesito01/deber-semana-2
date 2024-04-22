import React from 'react'
import { Link } from 'react-router-dom'
import SongsCard from './SongsCard/SongsCard'

const songs = [
    {nombre:"Fortnight", escritor:"Taylor Swfit", productor:"Taylor Swift, Jack Antonoff", duracion:"3:48", },
    {nombre:"The Tortured Poets Departmen", escritor:"Taylor Swfit", productor:"Taylor Swfit, Jack Antonoff", duracion:"4:53", },
    {nombre:"My Boy Only Breaks His Favorite Toys", escritor:"Taylor Swfit", productor:"Taylor Swfit, Jack Antonoff", duracion:"3:23", },
    {nombre:"Down Bad", escritor:"Taylor Swfit", productor:"Taylor Swift, Jack Antonoff", duracion:"4:21", },
    {nombre:"So Long, London", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"4:22", },
	{nombre:"But Daddy I Love Him", escritor:"Taylor Swfit", productor:"Taylor Swift, Jack Antonoff", duracion:"5:40", },
	{nombre:"Fresh Out The Slamer", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"3:30", },
	{nombre:"Florida!!", escritor:"Taylor Swfit, Florence + The Machine", productor:"Taylor Swift, Jack Antonoff", duracion:"3:35", },
	{nombre:"Guilty as Sin?", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"4:14", },
	{nombre:"Who's Afraid of Little Old Me?", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"3:30", },
	{nombre:"I Can Fix Him (No Really I Can)", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"2:36", },
	{nombre:"loml", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"4:37", },
	{nombre:"I Can Do With a Broken Heart", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"3:38", },
	{nombre:"The Samllest Man Who Ever Lived", escritor:"Taylor Swfit", productor:"Taylor Swift, Jack Antonoff", duracion:"4:05", },
	{nombre:"The Alchemy", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"3:16", },
	{nombre:"Clara Bow", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"3:36", },
	{nombre:"The Black Dog", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"3:58", },
	{nombre:"imgonnagetyouback", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"3:42", },
	{nombre:"The Albatross", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"3:03", },
	{nombre:"Chloe or Sam or Sophia or Marcus", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"3:33", },
	{nombre:"How Did It End?", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"3:58", },
	{nombre:"So High School", escritor:"Taylor  Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"3:48", },
	{nombre:"I Hate It Here", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"4:03", },
	{nombre:"thanK you aIMe", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"4:23", },
	{nombre:"I Look in People's Windows", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"2:11", },
	{nombre:"The Prophecy", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"4:09", },
	{nombre:"Cassandra", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"4:09", },
	{nombre:"Peter", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"4:43", },
	{nombre:"The Bolter", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"3:58", },
	{nombre:"Robin", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"4:00", },
	{nombre:"The Manuscript", escritor:"Taylor Swift", productor:"Taylor Swift, Jack Antonoff", duracion:"3:44", }	
]

export default function Songs() {
    return (
        <div className='bg-white flex flex-col'>
            <div className='flex flex-row justify-between w-full bg-[#EFE8DF] py-2 px-6 text-lg sm:text-2xl font-semibold text-[#625548] items-center'>
                <Link to={"/"}>
                    <img
                        alt="logo"
                        src="/resources/logo.png"
                        className='h-14 w-auto '
                    />
                </Link>

                <span >The Tortured Poets Department</span>
            </div>
            <div className='px-6 sm:px-[40px] flex flex-row items-center'
                style={{
                    backgroundImage: 'url("/resources/manuscript.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '200px' // Ajusta la altura según sea necesario
                }}
            >
                <span className=' text-[2rem] leading-none text-white font-extrabold text-start'>
                    Canciones
                </span>
            </div>
            <div className='flex flex-col-reverse md:flex-row gap-x-2 bg-[#EFE8DF] py-6 px-6 items-center justify-center '>
                <p className='flex-1 min-w-[250px] text-2xl leading-snug text-gray-900 font-light py-4 px-6 text-justify max-w-[1000px] w-full'>
                    Todo empieza en el álbum Reputation donde ella no se sentía apoyada por nadie ni por sus propios fans, conoce a Joe quien le da un aliento de esperanza, dedicándole canciones como …Ready for it, End Game, Delicate y muchas más. Pasa el tiempo y podemos ver como ella está muy enamorada que le dedica otras caciones de amor y de ahí nace Lover, pero después llega la ruptura, de lo cual en pandemia de 2021 llega folklore, dándonos pequeñas pistas de lo que ha vivido en su ruptura, pero nadie empezaba a notar esas señales hasta que llega Midgnights con una canción interesante, YOURE LOSING ME, con esa canción entendimos que Joe no le dio importancia perderla, y ahora con este nuevo álbum vemos como ella se desahoga con sus fans para hacernos saber lo que en realidad pasó con Joe, como ella se enteró de la infidelidad, donde lo encontraba con otra chica, y muchas cosas más que no puedo detallar si aún no han escuchado el álbum completo.
                </p>
                <div className='flex flex-col min-w-[250px] justify-center items-center relative'>
                    <img
                        alt="original cover album"
                        src="/resources/portada2.jpeg"
                        className='bg-cover max-h-[400px]'
                    />
                </div>
            </div>

            <div class="grid-cols-1 sm:grid md:grid-cols-3 2xl:grid-cols-4 gap-6 bg-[#EFE8DF] px-12 py-3">
                {songs?.map((value, index)=>{
                    return (
                        <SongsCard key={index} item={value}/>
                    )
                })}
            </div>

            <div className='flex flex-row flex-wrap gap-x-8 gap-y-6 px-6 pb-8 bg-[#EFE8DF] justify-center pt-12'>
                <div
                    className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
                    <img
                        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
                        src="/resources/image1.jpg"
                        alt="" />
                    <div className="flex flex-col justify-start p-6">
                        <h5 className="mb-2 text-xl font-medium">Album 2024</h5>
                        <div className='flex flex-col'>
                            <p className="mb-4 text-base">
                                Fecha de Lanzamiento: 19 de Abril, 2024 <br />
                                Grabación	2022-2023 <br />
                                Duración <br />
                                65:08 minutos<br />
                                122 minutos (The Anthology Edition)
                            </p>
                        </div>
                        <Link to="/" className='self-end'>
                            <span className='cursor-pointer text-blue-800 underline text-end self-end hover:no-underline'>Ver mas...</span>
                        </Link>
                    </div>
                </div>
                <div
                    className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
                    <img
                        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
                        src="/resources/manuscript.jpeg"
                        alt="" />
                    <div className="flex flex-col justify-start p-6">
                        <h5 className="mb-2 text-xl font-medium">Historia</h5>
                        <div className='flex flex-col flex-1'>
                            <p className="mb-4 text-base line-clamp-4 text-justify">
                                Todo empieza en el álbum Reputation donde ella no se sentía apoyada por nadie ni por sus propios fans, conoce a Joe quien le da un aliento de esperanza, dedicándole canciones como …Ready for it, End Game, Delicate y muchas más. Pasa el tiempo y podemos ver como ella está muy enamorada que le dedica otras caciones de amor y de ahí nace Lover, pero después llega la ruptura, de lo cual en pandemia de 2021 llega folklore, dándonos pequeñas pistas de lo que ha vivido en su ruptura, pero nadie empezaba a notar esas señales hasta que llega Midgnights con una canción interesante, YOURE LOSING ME, con esa canción entendimos que Joe no le dio importancia perderla, y ahora con este nuevo álbum vemos como ella se desahoga con sus fans para hacernos saber lo que en realidad pasó con Joe, como ella se enteró de la infidelidad, donde lo encontraba con otra chica, y muchas cosas más que no puedo detallar si aún no han escuchado el álbum completo.
                            </p>
                        </div>
                        
                        <Link to="/history" className='self-end'>
                            <span className='cursor-pointer text-blue-800 underline text-end self-end hover:no-underline'>Ver mas...</span>
                        </Link>
                    </div>
                </div>
                <div
                    className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
                    <img
                        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
                        src="/resources/canciones.jpg"
                        alt="" />
                    <div className="flex flex-col justify-start p-6">
                        <h5 className="mb-2 text-xl font-medium">Canciones</h5>
                        <div className='flex flex-col flex-1'>
                            <p className="mb-4 text-base line-clamp-4 text-justify">
                                The Tortured Poets Department recibió elogios generalizados por parte de especialistas musicales.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}