import React from 'react';
import BlogHero from "../Components/BlogPage/BlogHero/BlogHero";
import BlogPageHeader from "../Components/BlogPage/BlogPageHeader";
import BlogPageFooter from "../Components/BlogPage/BlogPageFooter";
import Featured from "../Components/BlogPage/Featured/Featured";
import BlogCat from "../Components/BlogPage/BlogCat/BlogCat";

const Blog = () => {
    return (
        <>
            <BlogPageHeader/>
            <BlogHero/>
            <Featured/>
            <BlogCat/>
            <BlogPageFooter/>
        </>
    );
};

export default Blog;