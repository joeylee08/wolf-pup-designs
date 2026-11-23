import wolfpuplogo from "../assets/images/wolfpuplogo.png";

const Flyer = () => {
	return (
		<div className='mainPage flyer'>
			<h2 className='flyerLink'>wolfpupdesigns.org</h2>
			<div className='child child1'>
				<img src={wolfpuplogo} alt="WolfPupDesigns Logo" />
				<div className='flyerText'>
					<h1>Wolf Pup Designs</h1>
					<h3>Custom Web Application Pricing</h3>
				</div>
			</div>
			<div className='child child3'>
				<h2 className='sectionHeading'>Basic Website <span>$800</span></h2>
				<p>A professionally designed, mobile-friendly website for you or your business. Up to five (5) pages with navigation. Designed according to your desired aesthetic.</p>
				<br/>
				<p>Your content can include:</p>
				<p>a. Client-provided headings, paragraphs, and other written content. Posted once.</p>
				<p>b. Client-provided photos and images. Posted once.</p>
				<p>c. YouTube embed links.</p>
				<p>d. Google Map embed showing your business location.</p>
				<p>e. Email and other links.</p>
			</div>
			<div className='child child3 complete'>
				<h2 className='sectionHeading'>Complete Website Package <span>$1,800</span></h2>
				<p>01 / Basic Website <span>+ $800</span></p>
				<p>02 / Posting, Entry, Listing Management <span>+ $600</span></p>
				<p>03 / Custom Photo Management Dashboard <span>+ $400</span></p>
				<p>04 / YouTube Playlist Integration <span style={{ color: 'green', fontWeight: '450'}}>+ FREE</span></p>
			</div>
			<div className="child child4">
				<h2 className='sectionHeading'>Optional Features For Basic+</h2>
				<p>01 / Posting, Entry, Listing Management <span>+ $600</span></p>
				<p>This is a custom object that the client can create, manage, and delete from within a secure admin portal. This can be a type of listing, data entry, or any kind of historical record desired. This data can be kept for the clients use, or rendered publicly. Photos and files allowed.</p>
				<br/>
				<p>02 / Custom Photo Management Dashboard <span>+ $400</span></p>
				<p>The client will have access to a secure admin dashboard that will allow them to upload photos from their current location via mobile or desktop. All uploaded photos may have a caption and can easily be deleted from inside the admin portal. Photos by default will show up in a single gallery on the client's website.</p>
				<br/>
				<p>03 / YouTube Playlist Integration <span>+ $200</span></p>
				<p>This is not a hosted video service, but a custom wrapper for a connected YouTube playlist. Client should provide a YouTube playlist to link before final handoff.</p>
				<br/>
				<p>04 / Payment Integration <span>+ $300</span></p>
				<p>One-time secure payment processing through Stripe. Recurring subscriptions can also be set up and managed through Stripe.</p>
			</div>
		</div>
	)
}

export default Flyer