import React, { useEffect, useState } from 'react'
import clothesitem from '../data';
import Navbar from './Navbar';
import Cartproduct from './Cartproduct';
import Addproduct from './Addproduct';
function Addtocart() {
  const [show, setShow] = useState(true);
  const [cartcount, setCartcount] = useState(0);
  const [hasSetvalue, sethasSetvalue] = useState(Array(9).fill(false));
  const [isvisible, setIsvisible] = useState(Array(9).fill(true))
 
 
  const localstorageitem=()=>{
    var getloacalstorage = localStorage.getItem('cart')
    if(!getloacalstorage){
      return [];
    }
else{
 return(JSON.parse(getloacalstorage))
}
  }
  
 
  const [cart, setCart] = useState(localstorageitem())
  const handleaddtocart = (i) => {
    const item=clothesitem[i]
    const isitemincart=cart.some(cartitem=>cartitem.id===item.id)
    if (!hasSetvalue[i]&& !isitemincart) {
      setCart([...cart,clothesitem[i]]);
      setCartcount(prev => prev + 1)
      setIsvisible((prev) => {
        const newIsvisible = [...prev]
        newIsvisible[i] = true;
        return newIsvisible;
      })
    }
    sethasSetvalue(prev => {
      const newstatus = [...prev];
      newstatus[i] = true;
      return newstatus;
    }) 
  }
 
  const removeitem = (i) => {
    const item = clothesitem[i];
    if(hasSetvalue[i]){
      setCartcount((prev)=>prev-1)
      sethasSetvalue(prev => {
        const newstatus = [...prev];
        newstatus[i] = false;
        return newstatus;
      })
      setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item.id));
    }
    setIsvisible((prev) => {
      const newIsvisible = [...prev]
      newIsvisible[i] = false;
      return newIsvisible;
    })
    localStorage.removeItem('cart')
    setCartcount(cart.length)
  }
 
  useEffect(()=>{
    setCartcount(cart.length)
    if(cart.length>0){
      localStorage.setItem('cart',JSON.stringify(cart));
    }
  
},[cart])
 
  
  return (
    <>
      <Navbar cartcount={cartcount} setShow={setShow} />
      {show ? (
        <Cartproduct
          clothesitem={clothesitem}
          handleaddtocart={handleaddtocart}
          hasSetvalue={hasSetvalue}
        />
      ) : (
        <Addproduct
         cart={cart}
          setCart={setCart}
         removeitem={removeitem}
         isvisible={isvisible}
       
          />
      )}

    </>
  )
}

export default Addtocart
