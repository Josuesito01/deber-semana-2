import React from 'react'

export default function NotFound() {
    return (
        <div className="bg-gray-100 flex justify-center items-center h-[100dvh] w-[100dvw] ">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg">The page you are looking for does not exist.</p>
            </div>
        </div>
    )
}
