import React from 'react';
import { useState } from 'react';

function ItemCount({ stock, initial, onAdd}) {

    const [count, setCount] = useState(initial);

    function incrementar(){

        setCount(count + 1)
    }

    function decrementar(){
        setCount(valAnt => valAnt > 0 ? count - 1 : count)
    }

    return (
        <div>
          
            <button onClick={decrementar}>-</button>

            <span>{count}</span>
            <button onClick={count < stock && incrementar}>+</button> 
            
             <div>
                        <button onClick={() => { onAdd(count)
                
            }}>Agregar</button>
            </div>

        </div>


    )
}

export { ItemCount };
