import React from 'react'
import FinalFooter from './FinalFooter'
import "./Footer.css"
import IconFooter from './IconFooter'
import InformationFooter from './InformationFooter'
import ContactFooter from './ContactFooter'
import ScrolltoTop from './ScrollToTop'


export default function Footer() {
    return (
        <footer>
            <div className="content">
                <div className="right box">
                    <div className="middle box">
                        <img src="../img/logomytineraryv.png" className="img-footer" alt="" />
                    </div>
                    <div className="topic">SUBSCRIBE US:</div>
                    <form action="#">
                        <input type="text" placeholder="Enter email address" />
                        <input type="submit" name="" value="Send" />
                        <div className="media-icons">
                            <IconFooter img='../img/logoface.svg' />
                            <IconFooter img='../img/logoinsta.svg' />
                            <IconFooter img='../img/logotwitter.svg' />
                            <IconFooter img='../img/logoyoutube.svg' />
                        </div>
                    </form>
                </div>
                <div className="left box">
                    <div className="upper">
                        <div className="topic">ABOUTH US:</div>
                        <p>My Tinerary is an all-in-one solution for group travel organizers, suppliers and attendees.
                            <br></br>
                            The group travel app offers an easy way to plan, manage and attend group trips while enhancing group
                            experiences.</p>
                    </div>
                    <div className="lower">
                        <InformationFooter title='CONTACT US:' />
                        <ContactFooter divClass='phone' url='tel:+007 9089 6767' text='(007) 9089 6767' />
                        <ContactFooter divClass='email' url='mailto:mytinerary@gmail.com' text='mytinerary@gmail.com' />
                    </div>
                </div>
            </div>
            <FinalFooter />
            <ScrolltoTop />
        </footer>
    )
}


