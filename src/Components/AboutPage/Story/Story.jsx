import React from 'react';
import storyBook from '../../../assets/images/about/story-book.svg';

function Story(props) {
    return (
        <>
            <section id="story-section">
                <div className="container pt-8">
                    <div className="content-wrap flex flex-col text-center items-center">
                        <h2 className="font-semibold">Our Story</h2>
                        <p className="mt-4">
                            Etymologically, Nosres comes from two Latin words (nos + res). Nos,<br/>
                            meaning "we"; and res, meaning "business" or "property"
                        </p>
                        <img src={storyBook} className="w-80 h-[150px]" alt="storyBook"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Story;