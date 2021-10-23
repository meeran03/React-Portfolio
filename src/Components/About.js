import React from 'react';
import aboutImg from '../assets/images/meeran1.png'
import Roll from 'react-reveal'
import config from 'react-reveal/globals';

config({ ssrFadeout: true })

export default class About extends React.Component {
    render() {
        return(
            <div class="about">
                <h1 style={{fontWeight: 'bold',textAlign:"center",fontSize:"60px"}}>About.</h1>
                <div class="about-container" style={{display: "flex",flexDirection:"row"}}>
                    <div style={{width: "65%",padding: 8}}>
                        <p>Hey, I am Muhammad Meeran</p>
                        <br/>
                        <p>Hey Folks, to begin I am a son, brother, friend and a bit of
                        computer geek trying to make this world a better place to live 
                        for those around me. I do programming because I enjoy it. 
                        Currently, my core language is Python. I do full stack development
                        using <span style={{color:"green"}}>Django</span> and <span style={{color:"purple"}}>MERN</span> Stack. My goal is to ensure that my client gets the 
                        result he/she wants out of me.<br/>
                        In Addition to it, I am currently doing my Bachelors in Computer Science 
                        from <b>Fast University ,Lahore</b>
                        </p>
                    </div>
                    <Roll left duration={3000} delay={3000}>
                    <div style={{width: "35%",boxShadow:"20px 20px 20px 20px solid white"}}>
                        <img src={aboutImg} className="about-img" />
                    </div>
                    </Roll>
                </div>
            </div>
        )
    }
}