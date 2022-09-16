import React from 'react'
import './styles.css'
export default function Navbar() {
  const options = ["Home", "About", "Sigin", "Blog", "Careers"];
  return (
    <header className='container'>
      <nav className='custom-nav'>
      <div>
        <img src="https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Art-Cafe.jpg" alt="" />
      </div>
      <ul className='custom-ul'>
        {options.map((option, index) => (
          <li key={index}>{option}</li>)
          )
        }
      </ul>
      <button>Login</button>
      </nav>

    </header>
  )
}
