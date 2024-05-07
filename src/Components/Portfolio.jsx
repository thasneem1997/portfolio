import React from 'react'

function Portfolio() {
  return (
    <div className="blog">

    <div className="blog-heading" style={{margin:'0 auto',textAlign:'center'}}>
       <br/> <h6>latest projects</h6>
        <h1 style={{fontSize:'35px'}}>Portfolio</h1>
    </div>
    <div className="blog-grid">
        <div className="blog-item">
            <div className="blog-img">
                <img src="images/blog1.jpg"/>

            </div>
            <div className="blog-content">
                {/* <h1>Latest full course</h1> */}
                {/* <div className="date">
                    <p>12 march 2023</p>
                    <p>by admin</p>
                </div> */}
            </div>
        </div>
        <div className="blog-item">
            <div className="blog-img">
                <img src="images/blog2.jpg"/>

            </div>
            <div className="blog-content">
                {/* <h1>Latest full course</h1> */}
                {/* <div className="date">
                    <p>12 march 2023</p>
                    <p>by admin</p>
                </div> */}
            </div>
        </div>
        <div className="blog-item">
            <div className="blog-img">
                <img src="images/blog3.jpg"/>
            </div>
            <div className="blog-content">
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
