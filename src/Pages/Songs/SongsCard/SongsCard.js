import React from 'react'

export default function SongsCard({ item }) {
    return (
        <article className="group  flex h-32 w-full overflow-hidden rounded-2xl bg-[#3a4448]">

            <div className=" inset-y-0 left-0 w-28">
                <img src="/resources/canciones.jpg" alt="" className="h-full w-full object-cover object-center opacity-95" />

            </div>

            <div className="flex-1 relative inset-y-0  overflow-hidden rounded-e-2xl transition-all ">
                <div style={{
                    backgroundImage: "url('/resources/canciones.jpg')"
                }}
                    className="h-full w-full bg-cover bg-center">
                    <div className="h-full w-full bg-[#455055]/80 transition-all group-hover:bg-[#31383b]/80"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-3 text-white">
                    <div className="flex flex-col h-full">
                        <div className="text-xl font-medium mb-2 leading-tight flex-1">{item?.nombre}</div>
                        <div className='flex flex-col gap-y-1'>
                            <div className="text-xs font-medium">Written by {item?.escritor}</div>
                            <div className="text-xs">
                                Produced by {item?.productor}
                            </div>
                            <div className='w-full flex flex-row gap-x-3 text-xs '>
                                <div className="flex items-center space-x-1">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <div>75.7k</div>
                                </div>

                                <div className="flex items-center space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    <div>{item?.duracion}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
