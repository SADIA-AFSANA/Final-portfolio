import React from 'react';

const SecondWeb = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold py-5 text-center">Tailor-Service</h2>

            <div className='py-10 grid grid-cols-1 lg:grid-cols-3'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="file:///C:/projects/final-portfolio/resale-car.web.app_(iPhone%20XR).png.crdownload" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Resale-car</h2>
                    </div>
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgE-UJ7ddf2NYP6gd16FtQ8ZN0na1a2hImsA&usqp=CAU" alt="Shoes" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Resale-car</h2>
                    </div>
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgE-UJ7ddf2NYP6gd16FtQ8ZN0na1a2hImsA&usqp=CAU" alt="Shoes" /></figure>

                </div>


            </div>
            <h2 className="text-2xl font-bold py-5 text-center">Description</h2>
            <div>
                <p className='pt-5 px-5 text-lg font-semibold'><li>Live Link :: https://tailor-service.web.app/services</li></p>

                <p className='px-5 text-lg font-semibold'><li>github-client-Site::https://github.com/SADIA-AFSANA/Tailor-Service</li></p>
                <p className='px-5 pb-5 text-lg font-semibold'><li>github-server-Site :: https://github.com/SADIA-AFSANA/Tailor-Service-server</li></p>

            </div>

            <div>
                <p className='px-5'>
                    <li> This website provides reviews for Tailors work.</li>
                    <li> If anyOne logged in then he can review and delete their reviews.</li>
                    <li> Technology Uses : TailwindCSS, ReactJS, ExpressJS, MongoDB, JWT, Vercel, DaisyUI, Node.js</li>
                </p>
            </div>
        </div>
    );
};

export default SecondWeb;