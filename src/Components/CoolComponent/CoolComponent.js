import React from 'react'

const CoolComponent = props => {
	return (
        <React.Fragment>
            <h2>This is a cool and very {props.cool} component</h2>
            <h3 className='fancy-link'>(lol no its not)</h3>
        </React.Fragment>
	)
}

export default CoolComponent