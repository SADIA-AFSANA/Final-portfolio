import React from 'react';

const FirstWeb = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold py-5 text-center">Resale-car</h2>

            <div className='py-10 grid grid-cols-1 lg:grid-cols-3'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="car1.png" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">

                    <figure><img src="car2.png" alt="Shoes" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">

                    <figure><img src="car3.png" alt="Shoes" /></figure>

                </div>



            </div>
            <h2 className="text-2xl font-bold py-5 text-center">Description</h2>
            <div>
                <p className='pt-5 px-5 text-lg font-semibold'><li>Live Link :: https://resale-car.web.app</li></p>

                <p className='px-5 text-lg font-semibold'><li>github-client-Site:: https://github.com/SADIA-AFSANA/My_resaleCar_Clients</li></p>
                <p className='px-5 pb-5 text-lg font-semibold'><li>github-server-Site :: https://github.com/SADIA-AFSANA/My_resaleCar_server</li></p>

            </div>

            <div>
                <p className='px-5'>
                    <li> Old cars are sold on this website.</li>
                    <li> The main functionality is there are admin, seller, and buyer routes available where the admin can make
                        the seller verified and make an admin as well, Orders are confirmed through Payment</li>
                    <li> Technology Uses : TailwindCSS, ReactJS, ExpressJS, MongoDB, JWT, Vercel, DaisyUI, Node.js</li>
                </p>
            </div>

        </div>
    );
};

export default FirstWeb;