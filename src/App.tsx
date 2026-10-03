import './App.css'
import macrothumb from "./assets/images/macrothumb.png";
import wolfpuplogo from "./assets/images/wolfpuplogo.png"

function App() {

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
      <div className='child2'>
        <p>01 / SELECTED WORK</p>
        <p className='projectName'>MACRO TRACKER</p>
        <br/>
        <p>PROBLEM: The need for an editable library of user-generated meals as well as a method of tracking daily macronutrient intake.</p>
        <br/>
        <p>SOLUTION: An intuitive application that dynamically calculates macronutrient totals from user-submitted meals and saves longitudinal, graphical data on the user's eating habits.</p>
        <br/>
        <button type='button' className='pageBtn'>DETAILED CASE STUDY</button>
      </div>
      <img className='imageThumb' src={macrothumb} alt='macro1'></img>
      <br/>
      <div className='child3'>
        <p>Wolf Pup Designs will work with you to assess your business needs and design a custom application tailored to your unique workflows.</p>
        <br/>
        <p>Schedule a free 30-minute consultation today.</p>
      </div>
    </div>
  )
}

export default App
