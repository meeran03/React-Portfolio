import React from 'react';
import fire from '../fire'

export default class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            body : ""
        }
    }
    handleChange = (e) => {
        this.setState({
            body : e.target.value
        })
        console.log(e.target.value)
    }
    handleClick = () => {
        let messageRef = fire.database().ref("title").orderByKey().limitToLast;
        fire.database().ref("title").push(this.state.body)
        let categoryRef = fire.database().ref("category").orderByKey().limitToLast;
        fire.database().ref("category").push(this.state.body)
    }
    render() {
        const message= "mailto:muhammadmeeran2003@gmail.com&subject=Customer%20Inquiry&body=" + this.state.body
        return(
            <>
                <div className="contact" style={{marginLeft: '100px',marginBottom:'20px'}}>
                    <h1 className="heading" style={{textAlign:'left'}}>Contact Me !</h1>
                    <p>Yeah, what's stopping you<br/>
                    <span style={{color:"rgb(109, 49, 221)"}}>hit the button..</span>
                    </p>
                    <br/>
                    <div>
                        <form>
                            <label for="name" value="name" >Name: </label>
                            <br/>
                            <input type="text" />
                            <br/>
                            <label for="Query" value="Query" >Query: </label>
                            <br/>
                            <textarea type="textarea" value={this.state.body} onChange={this.handleChange}/>
                            <br/>
                            <a href={message} id="frontBtn" onClick={this.handleClick}>Email Us</a>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}