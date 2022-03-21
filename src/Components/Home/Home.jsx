import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  const [books, setBooks] = useState([])


  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  useEffect(() => {
      axios.get("http://localhost:8080/books").then((response)=>{
        setBooks([...response.data])
        
      })
  },[])
  console.log(books)
  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {books.map((e) => {
          return (
            <BookCard
            id={e.isbnNumber}
            imageUrl = {e.imageUrl}
            title = {e.title}
            price = {e.price}
            />
          )
          })}
      </Main>
    </div>
  );
};
