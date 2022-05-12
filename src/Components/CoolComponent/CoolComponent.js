import React from 'react'

const CoolComponent = props => {
	return (
        <React.Fragment>
            <h2>This is a {props.cool} and very cool component</h2>
            <h3 className='fancy-link'>(lol no its not)</h3>
        </React.Fragment>
	)
}

export default CoolComponent