//import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { MobileTimeline, NewTimeline} from '../widgets/timeline';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';

export default function Home() {
    return (
        <div>
            <Grid>
                <Grid className="hero">
                    <div className="main-content">
                        <div><img className="main-img" src="https://thewolfgang.club/static/img/the-wolf-gang-nftl.png" alt="main" /></div>
                        <div className="main-text">
                            <h2>10,000 Wolves on the Ehterium Blockchain</h2>
                            <p>We don't promise you anything except a WOLFGANG</p>
                        </div>
                    </div>
                    <img className="desktop-image" src="https://thewolfgang.club/static/img/placeholder-wolf.png" alt=""/>
                </Grid>
                <Grid className="middle-sec">
                    <div className="left">
                        <div className="rdm-btn" ><button className="redeem-btn">REDEEM COMPANIONS</button></div>
                        <div className="follow">
                            <h2 className="follow-heading">Follow the WOLFGANG!</h2>
                            <div className="social-links">
                                <div className="links"><Link to="/"><Facebook fontSize="large"/></Link></div>
                                <div className="links"><Link to="/"><Twitter fontSize="large"/></Link></div>
                                <div className="links"><Link to="/"><Instagram fontSize="large"/></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <button className="buy-btn">Buy Now</button>
                        <div className="right-small-btns">
                            <button className="small-btns">10,000 <br/> WOLVES LEFT</button>
                            <button className="small-btns">0.03 ETH<br/> PRICE</button>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className="timeline-section">
                <h2>OUR ROADMAP</h2>
                <div className="timeline">
                    <NewTimeline/>
                </div>
                <div className="mobile-timeline">
                    <MobileTimeline/>
                </div>
            </div>
        </div>
    )
}
