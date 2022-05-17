import React from 'react'

const Card = React.lazy(() => import('../../Components/Card/Card'))

const Projects = () => {

    return (
        <>
            <h2>Projects</h2>
            <h3><a className='fancy-link' href='#game-dev'>Game Dev</a> | <a className='fancy-link' href='#web-dev'>Web/Mobile Dev</a> | <a className='fancy-link' href='#robotics'>Robotics</a></h3>

            <h3 className='p-color' id='game-dev'>Game Dev</h3>
            <div className='project-grid'>
                <Card title='Wrath of the Moon' description='3D Action-Adventure made with Unity' link='https://github.com/Link07109/Wrath-of-the-Moon' />
                <Card title='Guardian of the Forest' description='2D Metroidvania made with GameMaker Studio' link='https://github.com/Link07109/Guardian-of-the-Forest' />
                <Card title='Mask Dash' description='2D Platformer made with GameMaker Studio' link='https://github.com/Link07109/Mask-Dash' />
                <Card title='Slime Slayer' description='[PRIVATE] 2D Metroidvania made with Godot' link='https://github.com/Link07109/SlimeSlayer' />
            </div>

            <br />

            <h3 className='p-color' id='web-dev'>Web/Mobile Dev</h3>
            <div className='project-grid'>
                <Card title='FalconScoutPit' description='SPA written in Ionic Angular' link='https://github.com/Link07109/FalconScoutPit' />
                <Card title='FalconScoutApp' description='[PRIVATE] Mobile App written in React Native' link='https://github.com/FRC5190/FalconScoutApp' />
                <Card title='FalconScouter' description='Mobile App written in Ionic Angular' link='https://github.com/Link07109/FalconScoutApp' />
                <Card title='2018Scouting' description='Android App written in Java' link='https://github.com/FRC5190/2018Scouting' />
            </div>

            <br />

            <h3 className='p-color' id='robotics'>Robotics</h3>
            <div className='project-grid'>
                <Card title='MiniComp2020' description='FRC Robot Code written in Kotlin' link='https://github.com/Link07109/MiniComp2020' />
            </div>
        </>
    )
}

export default Projects;