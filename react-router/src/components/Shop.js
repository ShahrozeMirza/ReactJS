import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

function Shop() {
 
  const listStyle = {
    listStyle: 'none',
  }
  
  useEffect(() => {
      fetchItems();
  },[]);

  const [allItems,setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');

    const items = await data.json();
    setItems(items.data);
    console.log(allItems);
    
  }

  return (
    <div>
      <h1>Shop Page</h1>
      {
        allItems.map(item => 
        (
          <li style={listStyle} key={item.itemId}>
            <h3>
              <Link to={`/shop/${item.itemId}`}>
                  {item.item.name}
              </Link>
            </h3>
          </li>
          
          ))}
    </div>
  );
}

export default Shop;
