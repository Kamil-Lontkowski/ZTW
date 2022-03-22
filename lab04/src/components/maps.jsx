import React from "react";

export default function Maps(){

    return (
        <div className='bg-white border rounded-5 p-3'>
            <section className="embed-responsive embed-responsive-16by9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.0384773011033!2d17.060316515879595!3d51.10775024766561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe82a7836289b%3A0xb8f93f04c5c8d70f!2sPolitechnika%20Wroc%C5%82awska!5e0!3m2!1spl!2spl!4v1647963134172!5m2!1spl!2spl" className="embed-responsive-item" allowFullScreen="" loading="lazy"></iframe>
            </section>
        </div>
    )
}