import React from 'react';

const Contact = () => {
    return (
        <div className='bg-blue-200 pt-4 my-5'>
            <div id='contact-me'>
                <h2 className='text-2xl font-bold text-center'>Contact me</h2>
                <div className='mt-10 grid justify-center items-center '>
                    <form action="https://formsubmit.co/25f3fcd3468f1d729b6d10b9d14c53ab " method="POST" className='py-10'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full  " required /> <br />

                        <input type="email" placeholder="your email" className="input input-bordered w-full  my-10" required /> <br />

                        <textarea className="textarea textarea-bordered w-full" placeholder="massage"></textarea> <br />
                        <button className='btn btn-primary ml-10' type='submit'>submit</button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;