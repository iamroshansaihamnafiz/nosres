import React from 'react';

const BlogHero = () => {
    return (
        <>
            <section id="blog-hero-section" className="pt-12 bg-[#F4F4F4]">
                <div className="container py-24">
                    <div className="head-wrap head-box text-center">
                        <h1 className="text-2xl md:text-[38px] leading-0 md:leading-10 text-[#263F5C] font-bold md:font-medium mb-4">
                            Officia <span className="text-[#3A5F8A]">Nosres</span>
                            <span className="text-primary"> Blog</span>
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