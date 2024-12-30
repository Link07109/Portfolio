import React, { memo } from 'react'

import oxalis_data from '../../../data/oxalis.json'
import guardian_of_the_forest_data from '../../../data/guardian_of_the_forest.json'
import slime_slayer_data from '../../../data/slime_slayer.json'
import portfolio_data from '../../../data/portfolio.json'
import falcon_scout_app_data from '../../../data/falcon_scout_app.json'
import falcon_scouter_data from '../../../data/falcon_scouter.json'

const Card = React.lazy(() => import('../../Components/Card'))

const Home = () => {
    const gamesData = [oxalis_data, guardian_of_the_forest_data, slime_slayer_data]
    const webMobileData = [portfolio_data, falcon_scout_app_data, falcon_scouter_data]

    return (
        <>
            <h1 className='fancy-big-text'>Ivan Valadez</h1>

            <hr />
            <h2 className='p-color'>Games</h2>
            <div className='project-grid'>
                {gamesData.map((data, i) => <Card data={data} key={i} />)}
            </div>

            <hr />
            <h2 className='p-color'>Web & Mobile Apps</h2>
            <div className='project-grid'>
                {webMobileData.map((data, i) => <Card data={data} key={i} />)}
            </div>
        </>
    )
}

export default memo(Home)