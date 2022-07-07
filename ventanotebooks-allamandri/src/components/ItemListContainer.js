import React from 'react'

const ItemListContainer = ({ greeting }) => {
  return (
    <div> ItemCount stock={5} initial ={1} onAdd={(n) => alert(`${n} `)}
    </div>
    
    
  )
  
}

export default ItemListContainer;
