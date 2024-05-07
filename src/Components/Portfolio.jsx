import React from 'react'

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio"> 

    <div className="portfolio-heading" style={{margin:'0 auto',textAlign:'center'}}>
       <br/> <h6>latest projects</h6>
        <h1 style={{fontSize:'35px'}}>Portfolio</h1>
    </div>
    <div className="portfolio-grid">
        <div className="portfolio-item">
            <div className="portfolio-img">
                <img src="images/portfolio1.jpg"/>

            </div>
            <div className="portfolio-content">
                {/* <h1>Latest full course</h1> */}
                {/* <div className="date">
                    <p>12 march 2023</p>
                    <p>by admin</p>
                </div> */}
            </div>
        </div>
        <div className="portfolio-item">
            <div className="portfolio-img">
                <img src="images/portfolio2.jpg"/>

            </div>
            <div className="portfolio-content">
                {/* <h1>Latest full course</h1> */}
                {/* <div className="date">
                    <p>12 march 2023</p>
                    <p>by admin</p>
                </div> */}
            </div>
        </div>
        <div className="portfolio-item">
            <div className="portfolio-img">
                <img src="images/portfolio3.jpg"/>
            </div>
            <div className="portfolio-content">
                {/* <h1>Latest full course</h1> */}
                {/* <div className="date">
                    <p>12 march 2023</p>
                    <p>by admin</p>
                </div> */}
            </div>
        </div>

    </div>

    </div>

   
      
  
  )
}

export default Portfolio
