import {useEffect} from 'react';

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `Nosres - ${title}`;
    }, [title]);
};

export default UseTitle;