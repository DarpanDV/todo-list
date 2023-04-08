import React from 'react'
const bx1={
    img:"https://png.pngtree.com/png-vector/20190930/ourmid/pngtree-to-do-list-icon-cartoon-style-png-image_1768114.jpg",
    width:"140px",
    height:"150px"
}
const bx2={
    img:"https://ps.w.org/responsive-accordion-and-collapse/assets/screenshot-1.png?rev=1336966",
    width:"140px",
    height:"150px"
}
const First = () => {
    return (
        <div className='First-page' style={{backgroundColor:"black",height:"100%"}}>
           <img src={bx1.img} alt='Error' height={bx1.height} width={bx1.width}></img>
           <img src={bx2.img} alt='Error' height={bx2.height} width={bx2.width}></img>
        </div>
    )
}

export default First
