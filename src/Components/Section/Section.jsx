import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  const [secbook,setSecook]=useState([])
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page
  const {sec}=useParams();
  console.log(sec)
  useEffect(()=>{
    axios.get(`http://localhost:8080/books`).then((res)=>{
      const data=res.data.filter((el)=>{
        return el.section==sec
      })
      console.log(data)
      setSecook([...data])
    })
  },[sec])
  const handleSort=(data)=>{
    setSecook([...data])
  }


  const Main = styled.div`
    border:1px solid black;
    display: grid;
    grid-template-columns: repeat(4,1fr);
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          sec
        }
      </h2>
      <SortAndFilterButtons handleSort={handleSort} books={secbook} />

      <Main className="sectionContainer">
       {secbook.map((el)=><BookCard key={el.id} id={el.id} imageUrl={el.image_url} title={el.title}  price={el.price} />)}
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
      </Main>
    </>
  );
};
