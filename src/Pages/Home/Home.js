import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
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
                    backgroundImage: 'url("/resources/portada1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '400px' // Ajusta la altura según sea necesario
                }}
            >
                <span className='max-w-[150px] text-[5rem] leading-none text-white font-extrabold text-start'>
                    The Tortured Poets Department
                </span>
            </div>
            <div className='flex flex-col-reverse md:flex-row gap-x-2 bg-[#EFE8DF] py-6 px-6 items-center justify-center '>
                <p className='flex-1 min-w-[250px] text-2xl leading-snug text-gray-900 font-light py-4 px-6 text-justify max-w-[1000px] w-full'>
                    The Tortured Poets Department (TTPD) es el álbum #11 de Taylor Swift que relata los sucesos reales que tuvo que vivir en las etapas de negación, ira, negociación, depresión y aceptación de su relación de seis años con Joe Alwyn. En este álbum deja en claro que ella quería ser amada, estar en una relación donde el amor sea correspondido, donde sea mutuo, ella quería todo con él, llegar a un altar mientras él la esperaba, pero lamentablemente en las letras de este álbum vemos como ella vivió la infidelidad, aunque Joe ya sabía que ella se enteró, nunca quiso confesarse y decidieron simplemente romper, dejándola con las ilusiones en el suelo.
                </p>
                <div className='flex flex-col min-w-[250px] justify-center items-center relative'>
                    <img
                        alt="original cover album"
                        src="/resources/original.jpeg"
                        className='bg-cover max-h-[400px]'
                    />
                    <span className='bottom-0 absolute font-light text-base text-center'>{`<Portada Original del Album>`}</span>
                </div>
            </div>

            <div className='flex flex-row flex-wrap gap-x-8 gap-y-6 px-6 py-8 bg-[#EFE8DF] justify-center'>
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
                                Fecha de Lanzamiento: 19 de Abril, 2024 <br/>
                                Grabación	2022-2023 <br/>
                                Duración <br/>
                                65:08 minutos<br/>
                                122 minutos (The Anthology Edition)
                            </p>
                        </div>
                       
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
                        <Link to="/songs" className='self-end'>
                            <span className='cursor-pointer text-blue-800 underline text-end self-end hover:no-underline'>Ver mas...</span>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
