import React from 'react';

function ItemView({ workView }) {
    return (
        <div className='col-sm'>
            <p>{ workView.description }</p>
        </div>
    );
}

export default ItemView;