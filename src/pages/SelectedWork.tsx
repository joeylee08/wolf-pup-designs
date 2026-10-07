import macrothumb from "../assets/images/macrothumb.png";

const SelectedWork = () => {

    return (
        <div className='mainPage selectedWork'>
            <h2 className='sectionHeading'>Selected Work</h2>
            <div className='child child1'>
                <div className='sectionModule'>
                    <p className='moduleHeading'>01 / MACRO TRACKER</p>
                    <br/>
                    <p>PROBLEM: The need for an editable library of user-generated meals as well as a method of tracking daily macronutrient intake.</p>
                    <br/>
                    <p>SOLUTION: A custom application that calculates daily nutritional totals, lets users create and manage their own foods and meals, and tracks nutritional intake over time through dynamically generated graphs.</p>
                    <br/>
                    <img className='projectThumb' src={macrothumb} alt='Macro Tracker Project Thumbnail'></img>
                    <br/>
                    <a className='pageBtn' href="https://macrotracker.wolfpupdesigns.org" target="_blank" rel="noopener noreferrer">View Macro Tracker</a>
                </div>
            </div>
            <div className='child child2'>
                <div className='sectionModule'>
                    <p className='moduleHeading'>02 / SEED OF AWAKENING MARTIAL ARTS</p>
                    <br/>
                    <p>PROBLEM: The need for an editable library of user-generated meals as well as a method of tracking daily macronutrient intake.</p>
                    <br/>
                    <p>SOLUTION: An intuitive application that dynamically calculates macronutrient totals from user-submitted meals and saves longitudinal, graphical data on the user's macro intake.</p>
                    <br/>
                    <img className='projectThumb' src={macrothumb} alt='Macro Tracker Project Thumbnail'></img>
                    <br/>
                    <a className='pageBtn' href="https://macrotracker.wolfpupdesigns.org" target="_blank" rel="noopener noreferrer">View Macro Tracker</a>
                </div>
            </div>
            <div className='child child3'>
                <div className='sectionModule'>
                    <p className='moduleHeading'>03 / ALL NATIONS MISSION FOR CHRIST</p>
                    <br/>
                    <p>PROBLEM: The need for an editable library of user-generated meals as well as a method of tracking daily macronutrient intake.</p>
                    <br/>
                    <p>SOLUTION: An intuitive application that dynamically calculates macronutrient totals from user-submitted meals and saves longitudinal, graphical data on the user's macro intake.</p>
                    <br/>
                    <img className='projectThumb' src={macrothumb} alt='Macro Tracker Project Thumbnail'></img>
                    <br/>
                    <a className='pageBtn' href="https://macrotracker.wolfpupdesigns.org" target="_blank" rel="noopener noreferrer">View Macro Tracker</a>
                </div>
            </div>
        </div>
    )
}

export default SelectedWork