import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export default class Footer extends React.Component {
    render() {
        return(
            <>
                <div id="footer">
                    <h2>Meeran Malik...</h2>
                    <br/>
                    <p style={{fontSize: "30px"}}>Connect with me ...</p>
                    <br/>
                    <a style={{padding: "0px 10px"}} href="https://facebook.com/muhammad.meeran.12"><FacebookIcon size={60}/></a>
                    <a style={{padding: "0px 10px"}} href="https://www.instagram.com/meeranmalik03/"><InstagramIcon size={60}/></a>
                    <a style={{padding: "0px 10px"}} href="https://twitter.com/miran_speaks"><TwitterIcon size={60}/></a>
                </div>
            </>
        )
    }
}