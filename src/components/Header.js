import React from 'react';

import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className='container'>
                <Link to='/'>
                    { props.brand }
                </Link>
        </header>
    );
}

export default Header;
