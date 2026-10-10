import wolfpuplogo from "../assets/images/wolfpuplogo.png";
import { useState } from "react"

const Contact = () => {
    const [appointmentData, setAppointmentData] = useState({name: '', email: '', appointment: '', message: ''})
    const [messageData, setMessageData] = useState({name: '', email: '', message: ''})

    const handleSetAppointmentData = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const response = await fetch("http://localhost:3001/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(messageData),
            });
            if (!response.ok) {
                throw new Error("Failed to send message");
            }
            alert("Your message was sent successfully!");
        } catch(error) {
            console.error("Message submission failed:", error);
            alert("Something went wrong. Please try again.");
        }
    }
    
    return (
        <div className='mainPage contact'>
            <h2 className='sectionHeading'>Contact Us</h2>
            <div className='child child1'>
                <div className='sectionModule'>
                    <p className='moduleHeading'>01 / REQUEST A FREE CONSULTATION</p>
                    <br/>
                    <p>Schedule a free 30-minute Zoom consultation to discuss your business, your current workflow, and what a custom solution could look like.</p>
                    <br/>
                    <form onSubmit={handleRequestAppointment}>
                        <label htmlFor='appointmentName'>Name: </label>
                        <input type='text' id='appointmentName' name='name' value={appointmentData.name} onChange={handleSetAppointmentData} required></input>
                        <label htmlFor='appointmentEmail'>Email: </label>
                        <input type='email' id='appointmentEmail' name='email' value={appointmentData.email} onChange={handleSetAppointmentData} required></input>
                        <label htmlFor='appointment'>Select Appointment [Pacific Time PT]: </label>
                        <select id='appointment' name='appointment' value={appointmentData.appointment} onChange={handleSetAppointmentData} required>
                            <option value='' disabled>Select One</option>
                        </select>
                        <label htmlFor='appointmentMessage'>Notes [Optional]: </label>
                        <textarea id='appointmentMessage' name='message' rows={6} placeholder='Anything you would like me to know?' value={appointmentData.message} onChange={handleSetAppointmentData}></textarea>
                        <br/>
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
                        <label htmlFor='messageName'>Name: </label>
                        <input type='text' id='messageName' name='name' value={messageData.name} onChange={handleSetMessageData} required></input>
                        <label htmlFor='messageEmail'>Email: </label>
                        <input type='email' id='messageEmail' name='email' value={messageData.email} onChange={handleSetMessageData} required></input>
                        <label htmlFor='messageNotes'>Your Message: </label>
                        <textarea id='messageNotes' name='message' rows={6} placeholder='Tell me about your project.' value={messageData.message} onChange={handleSetMessageData} required></textarea>
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