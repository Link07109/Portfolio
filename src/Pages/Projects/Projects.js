import React from 'react'

const Card = React.lazy(() => import('../../Components/Card/Card'))

const Projects = props => {

    return (
        <React.Fragment>
            <h2>Projects</h2>
            <h3><a href="#game-dev">Game Dev</a> | <a href="#web-dev">Web/Mobile Dev</a> | <a href="#robotics">Robotics</a></h3>

            <h3 id="game-dev">Game Dev</h3>
            <div className='card-grid'>
                <Card title="Wrath of the Moon" description="3D Action-Adventure Game made with Unity" link="https://github.com/Link07109/Wrath-of-the-Moon" />
                <Card title="Guardian of the Forest" description="2D Metroidvania Game made with GameMaker Studio" link="https://github.com/Link07109/Guardian-of-the-Forest" />
                <Card title="Mask Dash" description="2D Platformer Game made with GameMaker Studio" link="https://github.com/Link07109/Mask-Dash" />
                <Card title="Slime Slayer" description="2D Metroidvania Game made with Godot" link="https://github.com/Link07109/SlimeSlayer" />
            </div>

            <hr />

            <h3 id="web-dev">Web/Mobile Dev</h3>
            <div className='card-grid'>
                <Card title="FalconScoutPit" description="SPA written in Ionic Angular" link="https://github.com/Link07109/FalconScoutPit" />
                <Card title="FalconScouter" description="Mobile App written in React Native" link="https://github.com/Link07109/Falcon-Scouter" />
                <Card title="2018Scouting" description="Android App written in Java" link="https://github.com/FRC5190/2018Scouting" />
            </div>

            <hr />

            <h3 id="robotics">Robotics</h3>
            <div className='card-grid'>
                <Card title="MiniComp2020" description="FRC Robot Code written in Kotlin" link="https://github.com/Link07109/MiniComp2020" />
            </div>
        </React.Fragment>
    )
}

export default Projects;