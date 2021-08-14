import React from "react"
import { render } from "react-dom"
import { Preview, print } from "react-html2pdf"
import Test from "./Test"

const App = () => (
  <div>
    <Preview id={"jsx-template"}>
      <Test />
    </Preview>
    <button onClick={() => print("a", "jsx-template")}> Print</button>
  </div>
)

export default App
