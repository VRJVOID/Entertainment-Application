 import React from 'react'
 import { useState } from 'react'
 import './Home.css'
 function HomePage() {
   const [search, setSearch] = useState("");
   console.log(search);
   
   const changeHandler = (e) => {
    setSearch(e.target.value);  
  };

  const searchHandler = (e) => {
    e.preventDefault();     
    console.log('Search term:', search);
  };
   return (
     <div className='search-container'>
       <input onChange={changeHandler}  className='search-input' type="text" placeholder='Search...'/>
       <button onClick={searchHandler} className='button'>Search</button>
     </div>
   )
 }

export default HomePage
// import React from 'react'
// import { useState } from 'react'
// import './Home.css'

// function HomePage() {
//   const [search, setSearch] = useState("");
//   console.log(search);

//   const changeHandler = ()  => (e) =>{
//     e.preventDefault();
//     setSearch(e.target.value);  
//   };

//   const searchHandler = () => {
    
//   }
//   return (
//     <div className='search-container'>
//       <input onChange={changeHandler}  className='search-input' type="text" placeholder='Search...'/>
//       <button onClick={searchHandler} className='button'>Search</button>
//     </div>
//   )
// }

// export default HomePage

// import React, { useState } from 'react';

// const SearchComponent = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Pass the search term to the parent component for handling search
//     onSearch(searchTerm);
//   };

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter search term"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchComponent;
