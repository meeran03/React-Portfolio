import React from 'react';
import Slide from 'react-reveal'
import config from 'react-reveal/globals';
import axios from 'axios'
import {projects} from './Constants'

config({ ssrFadeout: true })


export default class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            projects: [{}]
        }
    }
    render() {
        return(
            <>
                <div>
                    <div>
                        <h1 className="heading" >Projects.</h1>
                    </div>
                    <div className="projects-container">
                    {projects.map((item,index) => {
                        return(
                            <Slide bottom left>
                            <div className="project-item">
                                 <h3>{item.title}</h3>
                                 <img src={item.image} height="350px" width="100%" />
                                 <h4>{item.category}</h4>
                                 <button className="btn" >Visit</button>
                            </div>
                            </Slide>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}