import React from 'react'
import { Link } from 'react-router-dom'

const pictures = [
    {src:"img1.jpeg", label:"Picture1"}, 
    {src:"img2.jpeg", label:"Picture2"}, 
    {src:"img3.jpeg", label:"Picture3"}, 
    {src:"img4.jpeg", label:"Picture4"}, 
    {src:"img5.jpeg", label:"Picture5"}, 
    {src:"img6.jpeg", label:"Picture6"}, 
    {src:"img7.jpeg", label:"Picture7"}, 
    {src:"img8.jpeg", label:"Picture8"}, 
    {src:"img9.jpeg", label:"Picture9"}

]
export default function History() {
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
                    La historia detras de "The Tortured Poets Department"
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

            <div class="grid-cols-1 sm:grid md:grid-cols-3 bg-[#EFE8DF] px-6 py-3">
                {pictures?.map((value, index)=>{
                    return (
                        <div
                        class="mx-3 mt-6 flex flex-col self-start border-white border bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 rounded-2xl">
                        <a href="#!">
                            <img
                                class=" bg-cover "
                                src={`/resources/${value?.src}`}
                                alt={value?.label} />
                        </a>
                    </div>
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
                        <Link to="/songs" className='self-end'>
                            <span className='cursor-pointer text-blue-800 underline text-end self-end hover:no-underline'>Ver mas...</span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
