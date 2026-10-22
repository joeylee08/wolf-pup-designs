import macrothumb from "../assets/images/macrothumb.png";
import palangmtthumb from "../assets/images/palangmtthumb.png"

const SelectedWork = () => {
	return (
		<div className="mainPage selectedWork">
			<h2 className="sectionHeading">Selected Projects</h2>
			<div className="child child1">
				<div className="sectionModule">
					<p className="moduleHeading">01 / MACRO TRACKER</p>
					<br />
					<p>
						PROBLEM: The need for an editable library of
						user-generated meals as well as a method of tracking
						daily macronutrient intake.
					</p>
					<br />
					<p>
						SOLUTION: A custom application that calculates daily
						nutritional totals, lets users create and manage their
						own foods and meals, and tracks nutritional intake over
						time through dynamically generated graphs.
					</p>
					<br />
					<img
						className="projectThumb"
						src={macrothumb}
						alt="Macro Tracker Project Thumbnail"
					></img>
					<br />
					<a
						className="pageBtn"
						href="https://macrotracker.wolfpupdesigns.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Macro Tracker
					</a>
				</div>
			</div>
			<div className='child child2'>
                <div className='sectionModule'>
                    <p className='moduleHeading'>02 / PALANG MUAY THAI</p>
                    <br/>
                    <p>PROBLEM: A local martial arts and Muay Thai gym needed a professional online presence to attract prospective students, communicate its training philosophy, and streamline scheduling and administrative tasks.</p>
                    <br/>
                    <p>SOLUTION: A modern, easy-to-navigate website that clearly showcases the gym, its philosophy, and programs offered. Prospective students can contact the owner and schedule trial sessions, while current students can set up recurring tuition payments.</p>
                    <br/>
                    <img className='projectThumb' src={palangmtthumb} alt='Palang MT Project Thumbnail'></img>
                    <br/>
                    <a className='pageBtn' href="https://palangmuaythai.wolfpupdesigns.org" target="_blank" rel="noopener noreferrer">Palang Muay Thai</a>
                </div>
            </div>
			{/* <div className="child child3">
				<div className="sectionModule">
					<p className="moduleHeading">02 / ALL NATIONS MFC</p>
					<br />
					<p>
						PROBLEM: A Christian NPO needed a web application to
						establish an online presence, share their mission with
						the world, and manage one-time as well as ongoing
						donations.
					</p>
					<br />
					<p>
						SOLUTION: An online donor portal that allows All Nations
						MFC administrators to receive online donations, manage
						recurring payments, and analyze long-term donation
						trends..
					</p>
					<br />
					<img
						className="projectThumb"
						src={underconstruction}
						alt="All Nations MFC Project Thumbnail"
					></img>
					<br />
					<a
						className="pageBtn"
						href="https://wolfpupdesigns.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						All Nations MFC
					</a>
				</div>
			</div> */}
		</div>
	);
};

export default SelectedWork;
