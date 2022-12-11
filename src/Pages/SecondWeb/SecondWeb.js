import React from 'react';

const SecondWeb = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold py-5 text-center">Tailor-Service</h2>

            <div className='py-10 grid grid-cols-1 lg:grid-cols-3'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="tai1.png" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">

                    <figure><img src="tai2.png" alt="Shoes" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">

                    <figure><img src="tai3.png" alt="Shoes" /></figure>

                </div>


            </div>
            <h2 className="text-2xl font-bold py-5 text-center">Description</h2>
            <div>
                <p className='pt-5 px-5 text-lg font-semibold'><li>Live Link :: https://tailor-service.web.app/services</li></p>

                <p className='px-5 text-lg font-semibold'><li>github-client-Site:: https://github.com/SADIA-AFSANA/Tailor-Service</li></p>
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