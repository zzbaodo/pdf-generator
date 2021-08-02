import React, { useState } from "react"
import "./App.css"
import {
  PDFViewer,
  PDFDownloadLink,
  pdf,
  Document,
  Page,
  View,
  Text,
} from "@react-pdf/renderer"
import { storage } from "./firebase"
function App() {
  const [file, setFile] = useState(null)
  const testTemp = (
    <Document>
      <Page size="A4">
        <View>
          <Text
            style={{ textAlign: "center", marginTop: "10px", fontSize: "25" }}
          >
            Appointment Confirmation Letter
          </Text>
        </View>
      </Page>
    </Document>
  )

  const onClickHandler = async () => {
    const random = Math.random()
    const blob = await pdf(testTemp).toBlob()
    const uploadTask = storage.ref(`pdfs/${random}`).put(blob)
    uploadTask.on(
      "state_change",
      (snapShot) => {},
      (err) => {
        console.log(err)
      }
      // () => {
      //   storage
      //     .ref("pdfs")
      //     .child(random)
      //     .getDownloadURL()
      //     .then((url) => {
      //       console.log(url)
      //     })
      // }
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0])
            }}
          />
          <button onClick={onClickHandler}>Submit</button>
        </div>
      </header>
    </div>
  )
}

export default App
