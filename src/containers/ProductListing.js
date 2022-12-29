import React,{useState,useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import {fetchProducts} from '../redux/actions/productActions'

const ProductListing = () => {
    const products = useSelector((state)=>state)
    const dispatch =useDispatch()


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    

    console.log("products :- ",products)
  return (
    <div className="ui grid container">
      <ProductComponent/>
    </div>
  );
};

export default ProductListing;
