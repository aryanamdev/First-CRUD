/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/Form";
import Userlist from "./components/Userlist";

// adding base URL

function App() {
  return (
    <>
      <div>
        <Form />
        <Userlist />
      </div>
    </>
  );
}

export default App;
