import React from 'react';
import {skills} from './Constants'



export default class Skills extends React.Component {
    render() {
        const handleClick = (skill,level,color,index,description) => {
            document.getElementById("skill").innerText = skill.toUpperCase()
            document.getElementById("skillbar").innerText = level
            document.getElementById("skillbar").style.backgroundColor = color
            document.getElementById("skillbar").style.width = level + "%"
            document.getElementById("skill-nav").querySelectorAll("a")[index].style.color = color
            document.getElementById("skill-description").innerText = description

            
        }
        return(
            <>
                <div>
                    <h2 className="heading">My Skills</h2>
                    <div id="skill-container">
                        <div id="skill-nav">
                            {skills.map((item,index) => {
                                return (
                                    <a onClick={() => handleClick(item.name,item.level,item.color,index,item.description)}>{item.name}</a>
                                )
                            })}
                        </div>
                        <div style={{width:"65%"}}>
                            <h1 id="skill">PYTHON</h1>
                            <div id="skillbar"></div>
                            <h4>Description :</h4>
                            <p id="skill-description"></p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}