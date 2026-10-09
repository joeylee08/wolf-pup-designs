import wolfpuplogo from "../assets/images/wolfpuplogo.png";
import { useState } from "react"

const Contact = () => {
    const [appointmentData, setAppointmentData] = useState({name: '', email: '', appointment: ''})
    const [messageData, setMessageData] = useState({name: '', email: '', message: ''})

    const handleSetAppointmentData = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target
        setAppointmentData(previous => ({
            ...previous,
            [name]: value
        }));
    }
    const handleSetMessageData = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setMessageData(previous => ({
            ...previous,
            [name]: value
        }));
    }

    const handleRequestAppointment = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }


    return (
        <div className='mainPage contact'>
            <h2 className='sectionHeading'>Contact Us</h2>
            <div className='child child1'>
                <div className='sectionModule'>
                    <p className='moduleHeading'>01 / REQUEST A FREE CONSULTATION</p>
                    <br/>
                    <p>Schedule a free 30-minute consultation to discuss your business, your current workflow, and what a custom solution could look like.</p>
                    <br/>
                    <form onSubmit={handleRequestAppointment}>
                        <label htmlFor='name'>Name: </label>
                        <input type='text' id='name' name='name' value={appointmentData.name} onChange={handleSetAppointmentData}></input>
                        <label htmlFor='email'>Email: </label>
                        <input type='email' id='email' name='email' value={appointmentData.email} onChange={handleSetAppointmentData}></input>
                        <label htmlFor='appointment'>Select Appointment [Pacific Standard Time]: </label>
                        <select id='appointment' name='appointment' required value={appointmentData.appointment} onChange={handleSetAppointmentData}>
                            <option value='' disabled>Select One</option>
                        </select>
                        <button type='submit' className='pageBtn'>SEND REQUEST</button>
                    </form>
                </div>
                <br/>
                <br/>
                <div className='sectionModule'>
                    <p className='moduleHeading'>02 / SEND A MESSAGE</p>
                    <br/>
                    <p>Prefer to start with an email? No problem. Tell me a little about your project, and we can take it from there.</p>
                    <br/>
                    <form onSubmit={handleSendMessage}>
                        <label htmlFor='name'>Name: </label>
                        <input type='text' id='name' name='name' value={messageData.name} onChange={handleSetMessageData}></input>
                        <label htmlFor='email'>Email: </label>
                        <input type='email' id='email' name='email' value={messageData.email} onChange={handleSetMessageData}></input>
                        <label htmlFor='message'>Your Message: </label>
                        <textarea id='message' name='message' rows={8} placeholder='Tell me about your project...' required value={messageData.message} onChange={handleSetMessageData}></textarea>
                        <br/>
                        <button type='submit' className='pageBtn'>SEND MESSAGE</button>
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