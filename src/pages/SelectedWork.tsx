import macrothumb from "./assets/images/macrothumb.png";

const SelectedWork = () => {

    return (
        <>
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
        </>
    )
}

export default SelectedWork