import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCard = ({id,imageUrl,price,title}) => {
  // Bookcard is a card looking component, that is also a 'Link' for react-router
  //  it's basically shows one books information.
  // You can style custom tags with styled components in following way:
  // styled(Link)`
  //   color: xyz;
  // `
  //  now this container is a link that is also a card.
  //  card will have following 'children':
  //  div with className 'bookCard'
  //  Image of the book
  //  title of the book. h2 with classname 'title'
  //  price of book with class 'price'
  const Main = styled.div`
    border:1px solid black;
    width:200px;
    height:200px;
    text-align: center;
    
  `;

  return (
    <Link className="bookCard" to={`/books/${id}`}>
    <Main>
      <h2 classname="title">{title}</h2>
      <div classname="price">{price}</div>
      <img classname="image" src={imageUrl} alt="img" style={{width:"200px",height:"100px"}} />
      <div classname="id">{id}</div>
    </Main>
    </Link>
  )
  
};
