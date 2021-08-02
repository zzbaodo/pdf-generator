import React, { useState } from "react"
import firebase from "./firebase"
import { PDFViewer } from "@react-pdf/renderer"
import Template from "./Template"
import DisplayPDF from "./DisplayPDF"

const App3 = () => {
  const [input, setInput] = useState("")
  const [customer, setCustomer] = useState(null)
  const onClickHandler = async () => {
    const db = firebase.firestore()
    const customerRef = db.collection("appointment")
    const customerData = await customerRef.where("name", "==", input).get()
    customerData.forEach((doc) => {
      setCustomer(doc.data())
    })
  }

  return (
    <div className="app-container">
      <div className='input-group mb-3'>
        <input
          type="text"
          className="form-control mt-3"
          onChange={(e) => {
            setInput(e.target.value)
          }}
          placeholder="Look up customer"
        />
        <button
          className="btn btn-primary m-2"
          onClick={onClickHandler}
        >
          Search
        </button>
      </div>

      <div style={{margin : '0 auto', width: '700px'}}>
        {customer && (
          <>
            <PDFViewer width="700px" height="750px">
              <Template customer={customer} />
            </PDFViewer>
            <DisplayPDF customer={customer} />
          </>
        )}
      </div>
    </div>
  )
}

export default App3
