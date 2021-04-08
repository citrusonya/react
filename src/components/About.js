import React from 'react';

function About(props) {
    return (
        <div className='container'>
            <h1>{ props.title }</h1>
            <div className='alert-link'>{ props.children }</div>
        </div>
    );
}

export default About;
