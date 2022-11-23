import React from 'react'


// function LanguageChange() {
//   function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
//   return (
//     <div className="dropdown">
//       <button onClick={myFunction} class="dropbtn">Dropdown</button>
//       <div id="myDropdown" className="dropdown-content">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#contact">Contact</a>
//       </div>
//     </div>
//   )
// }

function Navbar() {
  return (
    <div className='navbar-container'>
      <nav>
        <ul>
          <button><li>Home</li></button>
        </ul>
        <input type="text" placeholder='Search IMDb...' />
        <button type="submit">SEARCH</button>
      </nav>
    </div>
  )
}

function HeroContainer() {
  return (
    <div className='hero-container'></div>
  )
}

function Main() {
  return (
    <div className='main-container'>
      <h3>This is the main section</h3>
    </div>
  )
}

function Footer() {
  return (
    <div className='footer-container'>
      <footer>This is the footer</footer>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <HeroContainer />
      <Main />
      <Footer />
    </>
  )
}
