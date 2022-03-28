import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const BookDetailsPage = () => {
  const {id}=useParams()
  const [book, setBook]=useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8080/books/${id}`).then((res)=>{
      setBook({...res.data})
    })
  },[])
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  
  return (
    <>
      <div className="bookContainer" style={{border:"1px solid black",textAlign: "center"}}>
        <h2 className="title">{book.title}</h2>
        <img className="image" src={book.image_url} alt="#" />
        <div className="author">{book.author}</div>
        <div className="description">{book.description}</div>
        <div className="price">{book.price}</div>
        <div className="section">{book.section}</div>
        <div className="isbnNumber">{book.isbnNumber}</div>
        <ul className="reviews">
          <li>{book.review}</li>
        </ul>
      </div>
    </>
  );
};
