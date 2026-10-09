import wolfpuplogo from "../assets/images/wolfpuplogo.png";
import { useState } from "react"

const Contact = () => {
    const [consultData, setConsultData] = useState({})
    const [messageData, setMessageData] = useState({})



    return (
        <div className='mainPage contact'>
            <h2 className='sectionHeading'>Contact Us</h2>
            <div className='child child1'>
                <div className='sectionModule'>
                    <p className='moduleHeading'>01 / REQUEST A FREE CONSULTATION</p>
                    <br/>
                    <p>Schedule a free 30-minute consultation to discuss your business, your current workflow, and what a custom solution could look like.</p>
                    <br/>
                    <form>
                        <label htmlFor='name'>Name: </label>
                        <input type='text' id='name' name='name'></input>
                        <label htmlFor='email'>Email: </label>
                        <input type='text' id='email' name='email'></input>
                        <label htmlFor='appointment'>Select Appointment Time: </label>
                        <select id='appointment' name='appointment' defaultValue='' required>
                            <option value='' disabled>Select One</option>
                        </select>
                        <button type='button' className='pageBtn'>SEND REQUEST</button>
                    </form>
                </div>
                <br/>
                <br/>
                <div className='sectionModule'>
                    <p className='moduleHeading'>02 / SEND A MESSAGE</p>
                    <br/>
                    <p>Prefer to start with an email? No problem. Tell me a little about your project, and we can take it from there.</p>
                    <br/>
                    <form>
                        <label htmlFor='name'>Name: </label>
                        <input type='text' id='name' name='name'></input>
                        <label htmlFor='email'>Email: </label>
                        <input type='text' id='email' name='email'></input>
                        <label htmlFor='message'>Your Message: </label>
                        <textarea id='message' name='message' rows={8} placeholder='Tell me about your project...' required></textarea>
                        <br/>
                        <button type='button' className='pageBtn'>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
            <div className='child child2'>
                <img className='logoSmall' src={wolfpuplogo} alt='Wolf Pup Designs Logo'></img>
            </div>
        </div>
    )
}

export default Contact