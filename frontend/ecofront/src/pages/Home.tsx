
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from '../redux/actions/products';

const Home = () => {

  const dispatch = useDispatch();
  const Products = useSelector(state => (state:any) => state.products);

 
  useEffect(()=>{
    dispatch(productAction())
  },[dispatch]);

  return (
    <div>Home</div>
  )
}

export default Home