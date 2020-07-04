import React, { Fragment } from 'react';

const SearchBox = ({searchfield, searchChange}) => {
//	debugger;

	return (
		<div className='pa2'>
		<input
			className="pa3 br2 grow ba b--green bg-lightest-blue"
			type='search'
			placeholder='search robots'
			onChange={searchChange} />
		</div>
	);
}

export default SearchBox;