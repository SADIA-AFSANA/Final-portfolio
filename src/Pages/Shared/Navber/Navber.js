import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-slate-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><a href='#contact-me'>Contact me</a></li>
                            <li><Link to='/about'>About Me</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">My-PORTFOLIO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/home'>Home</Link></li>
                        <li><a href='#contact-me'>Contact me</a></li>
                        <li><Link to='/about'>About Me</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <p className=''>
                        <a href="https://drive.google.com/file/d/1Zk2XO3VgtjCrFJqWhiNITLgG2AyPgURr/view?usp=share_link" target="blank" download="">
                            <button className="btn h-14 bg-gradient-to-r from-violet-400 to-fuchsia-500 ">Download resume</button>
                        </a>
                    </p>
                </div>


            </div>

        </div>
    );
};

export default Navber;