import './App.css'
import macro1 from "./assets/images/macro1.png";
import macro2 from "./assets/images/macro2.png";
import macro3 from "./assets/images/macro3.png";
import macro4 from "./assets/images/macro4.png";

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
          <p>Wolf Pup Designs will work with you to assess your business needs and design a custom application tailored to your unique workflows.</p>
          <br/>
          <p>Schedule a free 30-minute consultation today.</p>
        </div>
        <div className='gutter'></div>
        <div className='child1b'>
          <p>01 / SELECTED WORK</p>
          <p>MACRO TRACKER</p>
          <br/>
          <p>PROBLEM: The need for an editable library of user-generated meals as well as a method of tracking daily macronutrient intake.</p>
          <br/>
          <p>SOLUTION: An intuitive application that dynamically calculates macronutrient totals from user-submitted meals and saves longitudinal, graphical data on the user's eating habits.</p>
          <br/>
          <button type='button' className='toCaseStudy'>DETAILED CASE STUDY</button>
        </div>
      </div>  
    </div>
  )
}

export default App
