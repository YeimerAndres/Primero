import React from 'react'
import Posts from '../../components/Posts'

export default function Home() {
  return (
    <main>
      <section> 
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dicta ad, tempora quisquam exercitationem officiis enim unde praesentium itaque. Sit doloribus eius vel veniam eveniet laboriosam laudantium aut quia nesciunt.</p>
      </section>
      <section>
      <p>  para actualizar</p>
      <h1> Hola amiga</h1>
      <h2>
        Este es otro texto de prueba 
      </h2>
      <button onClick={()=>window.alert('Hello broki')}>Click aqui</button>
      </section>
      <Posts/>
    </main>
  )
}
