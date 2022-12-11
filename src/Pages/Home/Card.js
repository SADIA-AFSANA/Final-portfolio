import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div>
            <div className='py-10 grid grid-cols-1 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgE-UJ7ddf2NYP6gd16FtQ8ZN0na1a2hImsA&usqp=CAU" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Resale-car</h2>
                        <p>Old cars are sold on this website.
                            The main functionality is there are admin, seller, and buyer routes available where the admin can make
                            the seller verified and make an admin as well, Orders are confirmed through Payment</p>
                        <p><button className='btn h-14 bg-gradient-to-r from-indigo-500 to-sky-500'><Link to='/first'>More Details</Link></button></p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0PGezHg4YAnJyZTEuYkK7Rty7zrRYRuZRg&usqp=CAU" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Tailor-service</h2>
                        <p>Tailored fit is a sleek and timeless style of suit. It is not as roomy as a Regular Fit suit and less fitted than a Slim or Skinny Fit suit. This fit features a shaped waist and clean lines which allow for a stylish and dapper silhouette.
                        </p>
                        <p><button className='btn h-14 bg-gradient-to-r from-indigo-500 to-sky-500'><Link to='/second'>More Details</Link></button></p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gY085rZmAZJem5u0NGVhLQd_msscC85Hig&usqp=CAU" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Programming-Language</h2>
                        <p>Common styles are imperative, functional, logical, and object-oriented languages. Programmers can choose from these coding language paradigms to best-serve their needs for a specific project.</p>
                        <p><button className='btn h-14 bg-gradient-to-r from-indigo-500 to-sky-500'><Link to='/third'>More Details</Link></button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;