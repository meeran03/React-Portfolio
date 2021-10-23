import React from 'react';
import Navbar from './Navbar'
import '../styles/main.css'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Roll from 'react-reveal'
import Footer from './Footer'
import config from 'react-reveal/globals';
import Constants from './Constants'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Skills from './Skills'

config({ ssrFadeout: true })

export default class Main extends React.Component {
    state = {
        isLoading : true
    }
    componentDidMount() {
        this.setState({
            isLoading : false
        })
    }
    render() {
        if (!this.state.isLoading) {
        return(
            <div className="container">
                <Navbar/>
                <div style={{display:"flex",flexDirection: "row"}}>
                    <div style={{width:"70%"}}>
                        <h1 id="frontText">Hey, 👋 I am your developer <br/>
                        from <span style={{color:"orange"}}>Lahore</span> <br/>
                        Glad You found me !</h1>
                        <Roll right>
                        <div id='backText'>
                        <h1>{Constants.name.toUpperCase()}</h1>
                        </div>
                        </Roll>
                    </div>
                    <div style={{width:"30%",marginTop: "10%",display:"flex",flexDirection:'row',alignItems:"center",justifyContent:"space-evenly"}}>
                        <h1>C<br/>O<br/>N<br/>N<br/>E<br/>C<br/> T <br/></h1>
                        <div style={{display:'flex',flexDirection:"column"}}>
                            <a style={{padding: "1  0px 10px",fontSize:"30px"}} href="https://facebook.com/muhammad.meeran.12"><FacebookIcon size={60}/></a>
                            <a style={{padding: "1  0px 10px",fontSize:"30px"}} href="https://www.instagram.com/meeranmalik03/"><InstagramIcon size={60}/></a>
                            <a style={{padding: "1  0px 10px",fontSize:"30px"}} href="https://twitter.com/miran_speaks"><TwitterIcon size={60}/></a>
                        </div>
                    </div>
                </div>
                
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        )
        }
        else {
            return (
                <>
                    <h1>I am still Loading</h1>
                </>
            )   
        }
    }
}