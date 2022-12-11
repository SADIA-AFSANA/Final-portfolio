import React from 'react';

const AboutMe = () => {
    return (
        <div className='mt-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='rounded-lg shadow-2xl w-1/2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zzhyevJYyVWIGKmoCU4Fn2tbuKJZgqDIGA&usqp=CAU" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">About Me!</h1>
                        <p className="py-6">Hi, I'am Sadia Afsana, 27 years old, and I’ve just graduated from Bachelor of science. Looking for my first job, I decided to go with web development. a web designer/developer focused on crafting great web experiences.  I simply enjoy working on the code, developing beautiful websites, and that’s why I apply for this job with you. To my greatest hobbies belong computer games (I limit myself to 1 hour playing a day, in order to not waste that much time playing), and cooking.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;