import React, { memo } from 'react'

import tower_of_ascension_data from '../../../data/tower_of_ascension.json'
import oxalis_data from '../../../data/oxalis.json'
import guardian_of_the_forest_data from '../../../data/guardian_of_the_forest.json'
import slime_slayer_data from '../../../data/slime_slayer.json'
import portfolio_data from '../../../data/portfolio.json'
import falcon_scout_app_data from '../../../data/falcon_scout_app.json'
import falcon_scouter_data from '../../../data/falcon_scouter.json'

const Card = React.lazy(() => import('../../Components/Card'))

const Home = () => {
    const gamesData = [tower_of_ascension_data, oxalis_data, guardian_of_the_forest_data, slime_slayer_data]
    const webMobileData = [portfolio_data, falcon_scout_app_data, falcon_scouter_data]

    return (
        <>
            <br/>
            <h3>Hi! I make games, web applications, and robotics code!</h3>
            <h3>You can see my showcased projects below!</h3>

            <br/>
            <h2 className='p-color'>Games</h2>
            <p>You can play all of these on my <a href="https://rir1nku.itch.io/">itch.io</a> page!</p>
            <div className='project-grid'>
                {gamesData.map((data, i) => <Card data={data} key={i} />)}
            </div>

            <br/>
            <h2 className='p-color'>Web & Mobile Apps</h2>
            <div className='project-grid'>
                {webMobileData.map((data, i) => <Card data={data} key={i} />)}
            </div>
        </>
    )
}

export default memo(Home)
