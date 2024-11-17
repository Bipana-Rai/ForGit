import React from 'react'

function Cartproduct({ handleaddtocart, hasSetvalue, clothesitem }) {

    return (

        <>
            <div className="addcontainer">
                {
                    clothesitem.map((e, i) => (

                        <div className='main-add'>
                            <div className='picture'>
                                <img className='clothimage' src={e.src} alt="" />
                            </div>
                            <div className="detailcart">
                                <h5>{e.name}</h5>
                                <h6>{`Rs${e.price}`}</h6>
                                <p>{e.section}</p>
                                <button className="addtocartbtn" value={hasSetvalue} onClick={() => handleaddtocart(i)}>Add to cart</button>

                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cartproduct