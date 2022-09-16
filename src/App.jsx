import React from "react";
//import Tasklist from './Tasklist'
import Taskform from "./Taskform";
import { Greeting, UserCard } from "./components/Greeting";
import Product from "./components/Product";
import { Button } from "./components/Botton";
import { Taskcard } from "./components/Task";
import {Posts} from './components/Posts'
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <Navbar></Navbar>
      <Posts/>
      <p>  para actualizar</p>
      <h1> Hola amiga</h1>
      <h2>
        Este es otro texto de prueba 
      </h2>
      <button onClick={()=>window.alert('Hello broki')}>Click aqui</button>
    </>
  );
}

export default App;

/* 
      <Taskcard ready={true}/>

      <Button text="Click aqui" />
      <Button text="go" />
      <Button text="" name="Joe"/>

      {/* <UserCard
        name=" Ryan ray"
        amount={3000}
        married={true}
        points={[100, 25.5, 36]}
        address={{ street: "123 pirmavera", city: "popayan" }}
      />

      <UserCard
        name="Yeimer"
        amount={10000}
        married={false}
        points={[500, 100]}
        address={{}}
      /> */
