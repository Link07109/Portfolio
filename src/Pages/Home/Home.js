import React, { memo } from 'react'

import oxalis_data from '../../../data/oxalis.json'
import guardian_of_the_forest_data from '../../../data/guardian_of_the_forest.json'
import slime_slayer_data from '../../../data/slime_slayer.json'
import portfolio_data from '../../../data/portfolio.json'
import falcon_scout_app_data from '../../../data/falcon_scout_app.json'
import falcon_scouter_data from '../../../data/falcon_scouter.json'

const Card = React.lazy(() => import('../../Components/Card'))

const Home = () => {

    return (
        <>
            <h1 className='fancy-big-text'>Ivan Valadez</h1>
            {/* <h2>Software Developer</h2> */}

            <hr />
            <h3 className='p-color'>Games</h3>
            <div className='project-grid'>
                <Card data={oxalis_data} />
                <Card data={guardian_of_the_forest_data} />
                <Card priv='true' data={slime_slayer_data} />
            </div>

            <hr />
            <h3 className='p-color'>Web & Mobile Apps</h3>
            <div className='project-grid'>
                <Card data={portfolio_data} />
                <Card priv='true' data={falcon_scout_app_data} />
                <Card data={falcon_scouter_data} />
            </div>
        </>
    )
}

export default memo(Home)