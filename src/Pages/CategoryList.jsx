import React from 'react'
import Footer from '../Components/Frontend/Footer'
import NavBar from '../Components/Frontend/NavBar'

const CategoryList = () => {
  return (
    <div>
      <NavBar />
      <div className="courseBreadcrumb ">
        <div className="container">
          <span> Home  Course  </span>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CategoryList