import React from 'react';

const Header = () => {
    return (
        <div className=' py-10'>
            <div className="  py-16" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPviQbCTGhgKaUNhkg_uYtTu9Qu0x6I1IS2Q&usqp=CAU")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">I'm Sadia Afsana</h1>
                        <p className="mb-5">I am insanely passionate about designing beautiful, intuitive and functional websites that live on the internet.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;