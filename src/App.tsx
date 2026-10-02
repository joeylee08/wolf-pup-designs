import './App.css'

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
          <p>Wolf Pup Designs will work with you to assess your business needs and custom design a modern and intuitive application tailored to your unique workflows.</p>
          <br/>
          <p>Schedule a free 30-minute consultation today.</p>
        </div>
        <div className='gutter'></div>
        <div className='child1b'>
          <p>01 / SELECTED WORK</p>
          <p>MACRO TRACKER</p>
          <br/>
          <p>PROBLEM: Needed a way to track individual meals and calories, and to blah blah blah blah blah.</p>
          <p>SOLUTION: Made a macro-tracking app that allows users to create custom meals based on their personal ingredient libraries..</p>
        </div>
      </div>  
    </div>
  )
}

export default App
