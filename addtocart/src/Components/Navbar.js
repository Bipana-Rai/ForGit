import React from 'react'

function Navbar({ cartcount,setShow }) {

    return (
        <>
            <nav className="navbar navbar-expand-lg z-1   bg-body-tertiary position-fixed  w-100 ms-auto ">
                    <div className="navbar-brand " style={{ cursor: 'pointer' }} onClick={()=>setShow(true) } >This Fashion</div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className='addcartdiv' style={{ cursor: 'pointer' }} onClick={()=>setShow(false)} >
                                <div className='count'>{cartcount}
                                </div>
                                <img  className='addcartimg' src="https://www.svgrepo.com/show/65561/add-to-cart.svg" alt="" srcset="" />
                            </div>
                        
                 
                    <form className="d-flex me-3" role="search">
                        <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-dark me-5" type="submit">Search</button>
                    </form>
                </div>
            </nav></>
    )
}

export default Navbar