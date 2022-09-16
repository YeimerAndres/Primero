import React from "react";
//import Tasklist from './Tasklist'
import Taskform from "./Taskform";
import { Greeting, UserCard } from "./components/Greeting";
import Product from "./components/Product";
import { Button } from "./components/Botton";
import { Taskcard } from "./components/Task";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Navbar></Navbar>
      
      <Home></Home>
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
