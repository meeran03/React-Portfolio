import React from 'react';
import '../styles/navbar.css'


export default class Navbar extends React.Component {
    state = {
        color : ""
    }
    componentDidMount() {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "white" : "black";
      
            this.setState({ color: backgroundcolor });
          });
    }
    scroll = (ref) => {
        if (ref=="home") {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
        }
        else if (ref=="about") {
        window.scrollTo({top: 600, left: 0, behavior: 'smooth' });
        }
        else if (ref=="projects") {
        window.scrollTo({top: 1250, left: 0, behavior: 'smooth' });
        }
        else if (ref=="contact"){
        window.scrollTo({bottom: 10, left: 0, behavior: 'smooth' });
        }
    }
    render() {
        return (
            <>
                <div>
                    <nav className="navbar" style={{backgroundColor:this.state.color}}>
                        <a  onClick={() => this.scroll("home")}>Home</a>
                        <a  onClick={() => this.scroll("about")}>About</a>
                        <a  onClick={() => this.scroll("skills")}>Skills</a>
                        <a  onClick={() => this.scroll("projects")}>Projects</a>
                        <a  onClick={() => this.scroll("contact")}>Contact</a>
                    </nav>
                </div>
            </>
        )
    }
}