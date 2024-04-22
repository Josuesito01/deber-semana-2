import React from 'react'

export default function SuspensePage() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Loading...</h1>
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        </div>
    </div>
  )
}
