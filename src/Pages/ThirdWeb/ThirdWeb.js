import React from 'react';

const ThirdWeb = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold py-5 text-center">Programming Language</h2>

            <div className='py-10 grid grid-cols-1 lg:grid-cols-3'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="pro2.png" alt="Shoes" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">

                    <figure><img src="pro1.png" alt="Shoes" /></figure>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl">

                    <figure><img src="pro3.png" alt="Shoes" /></figure>

                </div>


            </div>
            <h2 className="text-2xl font-bold py-5 text-center">Description</h2>
            <div>
                <p className='pt-5 px-5 text-lg font-semibold'><li>Live Link :: https://programming-language-2eaea.firebaseapp.com/</li></p>

                <p className='px-5 text-lg font-semibold'><li>github-client-Site:: https://github.com/SADIA-AFSANA/Programming-Language</li></p>
                <p className='px-5 pb-5 text-lg font-semibold'><li>github-server-Site :: https://github.com/SADIA-AFSANA/-Programming-Language-server</li></p>
                <a href="https://github.com/SADIA-AFSANA/-Programming-Language-server"></a>
            </div>

            <div>
                <p className='px-5'>
                    <li> On this website people can learn different Programming Languages and Download PDF if they want.</li>
                    <li> Login, LogOut, register done by Authentication.</li>
                    <li> Technology Uses : React Bootstrap, React-router-dom, ExpressJS, Vercel, Node.js, JSON,
                        firebase,react icon, font awesome.</li>
                </p>
            </div>
        </div>
    );
};

export default ThirdWeb;