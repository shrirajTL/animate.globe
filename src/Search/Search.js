import React, {useState} from 'react';
import "./Search.css"

const Searchbar = () => {

   const [open, setOpen] = useState(false);

     function handleCLick() {
         setOpen(!open)
     }

    return (
        <>
    <div style={{display: 'flex', backgroundColor: 'black', justifyContent: 'center'}}>      
    <select onClick={handleCLick} class="dropdown" id="alphalist">   
     <option value="a">Farm Plots</option>   
     <option value="b">Commercial</option>
     <option value="c">Residential</option>
   </select> <br/> <br/>
    <input type="search" placeholder='Search Properties' />
    </div>
        </>
    );
}

export default Searchbar;
