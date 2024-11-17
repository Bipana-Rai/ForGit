import React, { useEffect, useState } from 'react'

function Addproduct({ cart,removeitem,isvisible}) {
  const [pprice, setPprice] = useState(Array(cart.length).fill(0));
  const [input, setInput] = useState(Array(cart.length).fill(1));

  const handleonchangeinput = (i, value) => {
    const fprice = value * cart[i].price
    setPprice((prev) => {
      const newprice = [...prev]
      newprice[i] = parseFloat(fprice)
      return newprice
    });
  
    setInput((prev) => {
      const newInput = [...prev];
      newInput[i] = value;
      return newInput;
    });
   
  }
  const grandtotal = () => {
    return pprice.reduce((acc, curr,i) => isvisible[i] ?acc + curr:acc, 0)
  }
  useEffect(() => {
    cart.map((_, index) => {
      handleonchangeinput(index,'1');
     });
      grandtotal()
   }, [cart])

 
  
 
  return (
    <>

      <div className='containerforaddproduct'>
            <div className="allproductcart">
          {
            cart.map((e, i) => (
                isvisible[i] && (
              <div className='cartdetail'>
                <div className='optional'>
                  <div className='productimage'>
                    <img className="cimg" src={e.src} alt="" />
                  </div>
                  <p className='ms-5'>{e.name}</p>
                </div>

                <div className='proprice'>
                  <span>{`Rs.${e.price}`}</span>
                  <input type="number"
                    value={input[i]}
                    onChange={(event) => handleonchangeinput(i, event.target.value)}
                    style={{ height: "40px", width: "120px", marginLeft: "20px" }} id="points" name="points" min="1" step="1" />
                </div>
                <div className='prototal'>
                  <span>{pprice[i]}</span>
                  <div className='remove'>
                    <button className='btn btn-danger ms-5' onClick={() => removeitem(i)} >X</button>
                  </div>

                </div>
              </div>

            ))
         ) }
        </div>
        <div className='totalamt'>
          <p style={{ marginLeft: "200px" }}>Total</p>
          <p style={{ color: "yellow", marginLeft: "550px" }}>{grandtotal()}</p>
        </div>
      </div>




    </>
  )
}

export default Addproduct