import React from 'react'

function Main() {
    return (
        <div className='pb-3'>
            <div className='relative border-none mx-3'>
                <img
                    src="https://png.pngtree.com/background/20210710/original/pngtree-home-e-commerce-poster-background-banner-picture-image_998919.jpg"
                    alt="banner"
                    className='w-full h-96 object-cover opacity-85'
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-center'>
                        <h5 className='text-4xl text-white font-bold my-3'>New Session Arrivals</h5>
                        <p className='text-lg text-white hidden sm:block'>This is a wider card with supporting text <br /> below as a natural
                            lead-in additional content. <br /> This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main