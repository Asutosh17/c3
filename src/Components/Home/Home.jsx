import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const [books,setBooks]=useState([])
  // get all books when user lands on the page
  // populate them as mentioned below
  useEffect(()=>{
    getdata()
    
  },[])

  const getdata=()=>{
    axios.get("http://localhost:8080/books").then((res)=>{
      setBooks(res.data)
      
    })
  }

  const Main = styled.div`
    border:1px solid black;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    
  `;
  const handleSort=(data)=>{
    setBooks([...data])

  }
  
  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={   //propse
          handleSort
        }
        books={books}
      />
       
      <Main className="mainContainer">
      {books.map((el)=><BookCard key={el.id} id={el.id} imageUrl={el.image_url} title={el.title}  price={el.price} />)}
        {
        /* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
      </Main>
    </div>
  );
};
