import React,{useState,useEffect} from 'react';

function ItemDetail(match) {
 
  const listStyle = {
    listStyle: 'none',
  }
  

  useEffect(() => {
      fetchProd();
  },[]);

   const [prods,setProd] = useState({
       item: {
           images:{}
       },

   });

   const fetchProd = async () => {
        const fetchProd = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.match.params.id}`);
        const prod = await fetchProd.json();
        setProd(prod.data);
        console.log(prod.data)
   }

  return (
    <div>
      <h1>Item Detail</h1>
       <h4>{prods.itemId} </h4>
       <h4>{prods.item.name} </h4>
       <img src={prods.item.images.icon} alt="/" />
    </div>
  );
}

export default ItemDetail;
