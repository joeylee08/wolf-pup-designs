import wolfpuplogo from "./assets/images/wolfpuplogo.png";

const Home = () => {

    return (
        <div className='mainPage'>
        <h4 className='nav'>HOME | SELECTED WORK | WHAT I BUILD | ABOUT | CONTACT</h4>
        <div className='hero'>
            <h1>WOLF PUP DESIGNS</h1>
            <h3>Custom made solutions for every business.</h3>
        </div>
        <div className='child1'>
            <div className='child1a'>
            <img className='logo' src={wolfpuplogo} alt='Wolf Pup Designs Logo'></img>
            </div>
            <div className='child1b'>
            <p>Wolf Pup Designs will work with you to assess your business needs and design a custom application tailored to your unique workflows.</p>
            <br/>
            <p>Schedule a free 30-minute consultation today.</p>
            <br/>
            <button type='button' className='pageBtn'>CONTACT US</button>
            </div>
        </div>
        <div className='child3'>
            <p>Wolf Pup Designs will work with you to assess your business needs and design a custom application tailored to your unique workflows.</p>
            <br/>
            <p>Schedule a free 30-minute consultation today.</p>
        </div>
        </div>
    )
}

export default Home