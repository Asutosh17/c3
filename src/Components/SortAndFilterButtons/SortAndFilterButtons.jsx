import { useState,useEffect } from "react";


export const SortAndFilterButtons = ({ handleSort,books }) => {
   const [sort,setSort]=useState()
   useEffect(()=>{
     setSort([...books])
   })
  
   const sortByTitleAsc=()=>{
    let arr = [...sort];
    arr = arr.sort((a,b)=>{
      if(a.title>b.title) return 1
      if(a.title<b.title) return -1
      return 0

    });
    handleSort([...arr]);
    
  }

  const sortByTitleDesc=()=>{
    let arr = [...sort];
    arr = arr.sort((a,b)=>{
      if(a.title>b.title) return -1
      if(a.title<b.title) return 1
      return 0

    });
    handleSort([...arr]);
    
  }

  const sortByPriceAsc=()=>{
    let arr = [...sort];
    arr = arr.sort((a,b)=>{
      if(a.price>b.price) return 1
      if(a.price<b.price) return -1
      return 0

    });
    handleSort([...arr]);
    
  }
  const sortByPriceDesc=()=>{
    let arr = [...sort];
    arr = arr.sort((a,b)=>{
      if(a.price>b.price) return -1
      if(a.price<b.price) return 1
      return 0

    });
    handleSort([...arr]);
    
  }



  return (
    <div className="sortButtons" style={{display:"flex", justifyContent: "space-evenly"}}>
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}
      <button className="sortByTitleAsc" onClick={sortByTitleAsc}>sortByTitleAsc</button>
      <button className="sortByTitleDesc" onClick={sortByTitleDesc}>sortByTitleDesc</button>
      <button className="sortByPriceAsc" onClick={sortByPriceAsc}>sortByPriceAsc</button>
      <button className="sortByPriceDesc"  onClick={sortByPriceDesc}>sortByPriceDesc</button>
    </div>
  );
};
