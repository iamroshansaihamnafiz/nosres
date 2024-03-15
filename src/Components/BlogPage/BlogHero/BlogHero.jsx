import React from 'react';

const BlogHero = () => {
    return (
        <>
            <section id="blog-hero-section" className="pt-12 bg-[#F4F4F4]">
                <div className="container py-24">
                    <div className="head-wrap head-box text-center">
                        <h1 className="font-semibold text-2xl lg:text-[38px] text-[#1E354E]">
                            Official Nosres Blog
                        </h1>
                        <p className="mt-3 text-[16px]">
                            The latest news, announcements and learnings from Nosres
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogHero;