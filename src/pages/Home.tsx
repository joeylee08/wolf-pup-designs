import wolfpuplogo from "../assets/images/wolfpuplogo.png";

const Home = () => {

    return (
        <div className='mainPage home'>
            <div className='hero'>
                <h1>WOLF PUP DESIGNS</h1>
                <h3>Custom software built around your business.</h3>
            </div>
            <div className='child child1'>
                <img className='logo' src={wolfpuplogo} alt='Wolf Pup Designs Logo'></img>
            </div>
            <h2 className='sectionHeading'>The Wolf Pup Process</h2>
            <div className='child child2'>
                <div className='sectionModule'>
                    <p className='moduleHeading'>01 / UNDERSTAND</p>
                    <br/>
                    <p>We start with your business, not the tech. I work directly with you to understand your workflows, requirements, and bottlenecks.</p>
                    <br/>
                    <p>What do I need to build in order to help your specific business become more productive?</p>
                </div>
                <div className='sectionModule'>
                    <p className='moduleHeading'>02 / DESIGN</p>
                    <br/>
                    <p>I translate those needs into a clear technical solution designed specifically around how your business operates.</p>
                    <br/>
                    <p>How will I structure this application to effectively address the unique challenges presented by your current infrastructure?</p>
                </div>
                <div className='sectionModule'>
                    <p className='moduleHeading'>03 / BUILD</p>
                    <br/>
                    <p>I personally develop your application from the ground up, placing an emphasis on clear and organized code, multi-layer security, user-friendliness, and long-term maintainability.</p>
                    <br/>
                    <p>I understand and remain accountable for every line of code I write, allowing me to confidently maintain, troubleshoot, and modify your application as the need arises.</p>
                </div>
                <div className='sectionModule'>
                    <p className='moduleHeading'>04 / REFINE</p>
                    <br/>
                    <p>Real software evolves. We test the application against real-world users, refine what isn't working, and leave room for the system to grow as your needs change.</p>
                    <br/>
                    <p>Our relationship doesn't end once the product ships. I remain reachable for ongoing support, maintenance, and future development as your business expands and evolves.</p>
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