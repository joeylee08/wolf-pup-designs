import madetolast from "../assets/images/madetolast.png";

const WhatIBuild = () => {

    return (
        <div className='mainPage whatIBuild'>
            <h2 className='sectionHeading'>What I Build</h2>
            <div className='child child1'>
                <p>Your business shouldn't have to reshape its workflow around generic software.</p>
                <br/>
                <p>I build web applications around the way your business actually operates—from secure customer and employee portals to inventory systems, scheduling tools, payment workflows, reporting dashboards, and other purpose-built applications.</p>
            </div>
            <div className='child child2'>
                <div className='sectionModule'>
                    <p className='moduleHeading'>01 / CLIENT PORTALS</p>
                    <br/>
                    <p>A secure application where customers can create accounts, access user information, submit requests, make payments, manage appointments, and communicate with your business.</p>
                </div>
                <div className='sectionModule'>
                    <p className='moduleHeading'>02 / EMPLOYEE SCHEDULING</p>
                    <br/>
                    <p>Managers create schedules based on staffing requirements and employee availability, while employees securely access their schedules, update availability and request shift changes.</p>
                </div>
                <div className='sectionModule'>
                    <p className='moduleHeading'>03 / MULTI-LOCATION INVENTORY</p>
                    <br/>
                    <p>A centralized inventory system connecting multiple stores or facilities. Staff can update quantities, receive low-stock alerts, and view inventory across the organization.</p>
                </div>
                <div className='sectionModule'>
                    <p className='moduleHeading'>04 / DONATION TRACKING</p>
                    <br/>
                    <p>A system for organizations to accept and track donations, maintain donor records, monitor fundraising goals, and give authorized staff access to financial metrics.</p>
                </div>
            </div>
            <h2 className='sectionHeading'>Technologies and Capabilities</h2>
            <div className='child child3'>
                <div className='techThumb'>
                    <p>React</p>
                </div>
                <div className='techThumb'>
                    <p>TypeScript</p>
                </div>
                <div className='techThumb'>
                    <p>Node.js</p>
                </div>
                <div className='techThumb'>
                    <p>PostgreSQL</p>
                </div>
            </div>
            <hr className='dividerLine'></hr>
            <div className='child child4'>
                <div className='techThumb'>
                    <p>Authentication</p>
                </div>
                <div className='techThumb'>
                    <p>Authorization</p>
                </div>
                <div className='techThumb'>
                    <p>Payments</p>
                </div>
                <div className='techThumb'>
                    <p>Database Design</p>
                </div>
                <div className='techThumb'>
                    <p>REST APIs</p>
                </div>
                <div className='techThumb'>
                    <p>Integrations</p>
                </div>
                <div className='techThumb'>
                    <p>Role-Based Access</p>
                </div>
                <div className='techThumb'>
                    <p>Security</p>
                </div>
                <div className='techThumb'>
                    <p>Deployment</p>
                </div>
                <div className='techThumb'>
                    <p>Mobile Friendly</p>
                </div>
                <div className='techThumb'>
                    <p>Invasive Testing</p>
                </div>
            </div>
            <h2 className='sectionHeading'>Built to Last</h2>
            <div className='child child5'>
                <div className='child5a'>
                    <p>A working application is only the beginning.</p>
                    <br/>
                    <p> I build with maintainability in mind, using clear structure and predictable patterns so the software can be understood, debugged, and extended as your needs change.</p>
                    <br/>
                    <p>I will always remain accountable for the code I write, and available for future maintenance, troubleshooting, and development.</p>
                    <br/>
                    <p className='moduleHeading'>01 / CLEAR STRUCTURE</p>
                    <p className='moduleHeading'>02 / MAINTAINABILITY</p>
                    <p className='moduleHeading'>03 / SECURITY</p>
                    <p className='moduleHeading'>04 / EXTENSIBILITY</p>
                </div>
                <div className='child5b'>
                    <img className='vsCodeImg' src={madetolast} alt='VS Code Screenshot'></img>
                </div>
                
            </div>
        </div>
    )
}

export default WhatIBuild