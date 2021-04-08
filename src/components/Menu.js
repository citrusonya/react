import React from 'react'
import Item from '../components/Item';
import works from '../works';

const Menu = () => {

	return (
		<div className='container'>
			<div className='row'>
                { works.map((work) => (
                    <Item key={ work.name } work={ work } />
                )) }
			</div>
		</div>
	)
}
export default Menu