import hobbyicons from "../assets/images/hobbyicons.png";

const About = () => {
	return (
		<div className="mainPage aboutMe">
			<h2 className="sectionHeading">About Me</h2>
			<div className="child child1">
				<div className="aboutThumb">01 / WHO I AM</div>
				<br />
				<div className="aboutText">
					<p>
						My name is Joseph. I am an independent web developer and
						the founder of Wolf Pup Designs.
					</p>
					<br />
					<p>
						I specialize in building custom web applications for
						organizations whose needs aren't adequately served by
						off-the-shelf software.
					</p>
					<br />
					<p>
						I enjoy the entire development process, from
						understanding a problem and designing a solution, to
						writing the code, troubleshooting unexpected issues, and
						seeing the finished application come to life.
					</p>
					<br />
				</div>
				<div className="aboutThumb">02 / MY BACKGROUND</div>
				<br />
				<div className="aboutText">
					<p>
						My introduction to software development began with a
						coding bootcamp, where I learned the foundations of
						modern web development.
					</p>
					<br />
					<p>
						Since then, I've continued developing my skills through
						independent study and hands-on projects.
					</p>
					<br />
					<p>
						My experience building full-stack applications has
						taught me how to approach unfamiliar problems, research
						solutions, debug complex issues, and take responsibility
						for the software I create.
					</p>
					<br />
				</div>
				<div className="aboutThumb">03 / OUTSIDE THE EDITOR</div>
				<img
					className="hobbyIcons"
					src={hobbyicons}
					alt="Icons of My Hobbies"
				></img>
				<div className="aboutThumb">04 / BEHIND THE WOLF</div>
				<br />
				<div className="aboutText">
					<p>
						The little wolf pup image is based on a small, homemade
						tattoo given to me by a close friend during a season of
						life filled with uncertainty, self-doubt, and loss.
					</p>
					<br />
					<p>
						I found myself on the other side of experiences that had
						made me unrecognizable to myself.
					</p>
					<br />
					<p>
						I eventually came to realize that parts of myself I
						thought I'd lost were still there.
					</p>
					<br />
					<p>
						To me, the little wolf pup represents our capacity to
						remain playful, curious, and creative, and to keep
						moving forward, even when Life gives us every reason to
						give up.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
