import React from 'react';
import { Link } from 'react-router-dom';

function Item({ work }) {
    return (
        <Link to={`/${ work.name }`} className='col col-lg-2'>
            <img
                src={ work.img }
                alt={ work.title }
            />
            <p>{ work.title }</p>
        </Link>
    );
}

export default Item;