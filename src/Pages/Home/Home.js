import React, { memo } from 'react'

const Card = React.lazy(() => import('../../Components/Card'))

const Home = () => {

    return (
        <>
            <h1 className='fancy-big-text'>Ivan Valadez</h1>
            <h2>Game, Web, Mobile, and Robotics Developer</h2>

            {/* <h3><a className='fancy-link' href='#game-dev'>Game Dev</a> | <a className='fancy-link' href='#web-dev'>Web/Mobile Dev</a> | <a className='fancy-link' href='#robotics'>Robotics</a></h3> */}

            <h3 className='p-color' id='game-dev'>Game Dev</h3>
            <div className='project-grid'>
                <Card title='Oxalis' year="2023" description='2D Action-Adventure made with Godot' link='https://github.com/Link07109/Oxalis' image='https://media.discordapp.net/attachments/831304128033587270/1128069399899799592/Screenshot_2023-07-06_172724.png?width=805&height=671' />
                <Card title='Dragons Den' year="2022" description='2D Platformer made with GameMaker' link='https://github.com/Link07109/Oxalis' image='https://cdn.discordapp.com/attachments/831304128033587270/1129176253765800026/Screenshot_2023-07-13_182252.png' />
                <Card title='Guardian of the Forest' year="2021" description='2D Metroidvania made with GameMaker' link='https://github.com/Link07109/Guardian-of-the-Forest' image='https://cdn.discordapp.com/attachments/831304128033587270/1135318769711980564/image.png' gif='https://cdn.discordapp.com/attachments/831304128033587270/1135327811389882440/Untitled_video_-_Made_with_Clipchamp.gif' />
                <Card title='Mask Dash' year="2021" description='2D Platformer made with GameMaker' link='https://github.com/Link07109/Mask-Dash' />
                <Card priv='true' title='Slime Slayer' year="2019" description='2D Platformer made with Godot' link='https://github.com/Link07109/SlimeSlayer' />
            </div>

            <hr />

            <h3 className='p-color' id='web-dev'>Web/Mobile Dev</h3>
            <div className='project-grid'>
                <Card title='Portfolio' year="2022-2023" description='Portfolio website made using React' link='https://github.com/Link07109/Portfolio' />
                <Card title='Falcon Scout Pit' year="2020" description='SPA made using Ionic Angular' link='https://github.com/Link07109/FalconScoutPit' />
                <Card priv='true' title='Falcon Scout App' year="2020" description='Mobile App made using React Native' link='https://github.com/FRC5190/FalconScoutApp' />
                <Card title='Falcon Scouter' year="2019" description='Mobile App made using Ionic Angular' link='https://github.com/Link07109/Falcon-Scouter' />
                <Card priv='true' title='2018 Scouting' year="2018" description='Android App written in Java' link='https://github.com/FRC5190/2018Scouting' />
            </div>

            <hr />

            <h3 className='p-color' id='robotics'>Robotics</h3>
            <div className='project-grid'>
                <Card title='Mini Comp 2020' year="2020" description='FRC Robot Code written in Kotlin' link='https://github.com/Link07109/MiniComp2020' />
                <Card priv='true' title='2017 Vision' year="2017" description='FRC Robot Code written in Java' />
            </div>
        </>
    )
}

export default memo(Home)