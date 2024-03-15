import React from 'react';
import BlogPageHeader from "../Components/BlogPage/BlogPageHeader";
import BlogPageFooter from "../Components/BlogPage/BlogPageFooter";
import BlogDetails from "../Components/BlogDetails/BlogDetails";

const BlogDetail = () => {
    return (
        <>
            <BlogPageHeader/>
            <BlogDetails/>
            <BlogPageFooter/>
        </>
    );
};

export default BlogDetail;