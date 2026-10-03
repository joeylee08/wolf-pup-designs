import wolfpuplogo from "../assets/images/wolfpuplogo.png";

const Home = () => {

    return (
        <div className='mainPage home'>
            <div className='hero'>
                <h1>WOLF PUP DESIGNS</h1>
                <h3>Custom made solutions for every business.</h3>
            </div>
            <div className='child child1'>
                <img className='logo' src={wolfpuplogo} alt='Wolf Pup Designs Logo'></img>
            </div>
            <h2 className='sectionHeading'>The Wolf Pup Process</h2>
            <div className='child child2'>
                <div className='sectionModule'>
                    <p className='moduleHeading'>01 / UNDERSTAND</p>
                    <br/>
                    <p>We start with your business, not the tech. I work directly with you to understand your workflows, requirements, and logistical bottlenecks.</p>
                    <br/>
                    <p>What do I need to build in order to help your specific business become more productive?</p>
                </div>
                <div className='sectionModule'>
                    <p className='moduleHeading'>02 / DESIGN</p>
                </div>
                <div className='sectionModule'>
                    <p className='moduleHeading'>03 / BUILD</p>
                </div>
                <div className='sectionModule'>
                    <p className='moduleHeading'>04 / REFINE</p>
                </div>
            </div>
            <div className='child child3'>
                <h2 className='subHeading'>Have a project in mind?</h2>
                <br/>
                <p>Schedule a free 30-minute consultation to discuss your business, your current workflow, and what a custom solution could look like.</p>
                <br/>
                <button type='button' className='pageBtn'>CONTACT US</button>
            </div>
        </div>
    )
}

export default Home