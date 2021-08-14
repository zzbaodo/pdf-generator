import React, { useState, useEffect } from "react"
import firebase from "./firebase"
import { PDFViewer } from "@react-pdf/renderer"
import Template from "./Template"
import DisplayPDF from "./DisplayPDF"
import Test from "./Test"
import App5 from "./App5"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import logo from "./logo.png"
import ConsentForm from "./ConsentForm"
import "./ConsentForm.css"
const App3 = () => {
  const [input, setInput] = useState("")
  const [customer, setCustomer] = useState(null)
  const [customers, setCustomers] = useState([])
  const searchByName = async () => {
    const db = firebase.firestore()
    const customerRef = db.collection("appointment")
    const customerData = await customerRef.where("name", "==", input).get()
    customerData.forEach((doc) => {
      setCustomer(doc.data())
    })
  }
  const searchByDate = async () => {
    const dateInUnix = new Date(input).getTime() / 1000
    console.log(dateInUnix)
    const db = firebase.firestore()
    const customerRef = db.collection("appointment")
    const customerData = await customerRef.where("date", "==", dateInUnix).get()
    let arrOfCustomer = []
    customerData.forEach((doc) => {
      arrOfCustomer.push(doc.data())
    })
    setCustomers(arrOfCustomer)
    console.log(customers)
  }
  const savePDF = () => {
    window.html2canvas = html2canvas
    let doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [1240, 1754],
    })
    let content = document.getElementById("content-20")
    console.log("content", content)
    console.log("document.body", document.body)
    doc.html(content, {
      callback: function (doc) {
        console.log("in callback")
        doc.save()
      },
    })
  }
  useEffect(() => {
    window.html2canvas = html2canvas
  }, [])

  return (
    <>
      <div className="app-container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control mt-3"
            onChange={(e) => {
              setInput(e.target.value)
            }}
            placeholder="Look up customer"
          />
          <button className="btn btn-primary m-2" onClick={searchByName}>
            Search
          </button>
        </div>
        {/* <ConsentForm customer={customers} /> */}
        {customer && (
          <div id="content-20">
            <div style={{width:1240, height: 1754}}>
              <main>
                <div>
                  <div className="header-text">
                    <h1>Consent Form</h1>
                    <h5>
                      Consent to Permanent Make-up application, Release and
                      Waiver of ALL Claims
                    </h5>
                  </div>
                </div>

                <hr />
                <form>
                  <div className="form-field-wrapper">
                    <label htmlFor="name"> Name:</label>
                    <input type="text" id="name" value={customer?.name} />
                  </div>

                  <div className="form-field-wrapper">
                    <label htmlFor="phone"> Phone:</label>
                    <input type="text" id="Phone" value={customer?.phone} />
                    <label htmlFor="Age"> Age:</label>
                    <input type="number" id="Age" />
                    <label htmlFor="DOB"> DOB:</label>
                    <input type="text" id="DOB" />
                  </div>
                  <div className="form-field-wrapper">
                    <label htmlFor="address"> Address:</label>
                    <input type="text" id="address" />
                  </div>
                  <div className="form-field-wrapper">
                    <label htmlFor="City"> City:</label>
                    <input type="text" id="City" />
                    <label htmlFor="State"> State:</label>
                    <input type="number" id="State" />
                    <label htmlFor="Zip"> Zip: </label>
                    <input type="text" id="Zip" />
                  </div>
                </form>
                <p>
                  I acknowledge by signing this release that I have been given
                  the full opportunity to ask any and all questions which I
                  might have about obtaining permanent make-up from{" "}
                  <span>{"Anh Huynh"}</span>
                  (hereafter called "Technician") and that all of my questoins
                  have been answered to my full and total satisfaction
                </p>
                <div className="form-field-wrapper">
                  <label htmlFor="procedure" style={{ whiteSpace: "nowrap" }}>
                    Procedure to be performed:
                  </label>
                  <input type="text" id="procedure" />
                </div>

                <br />
                <p className="bold-strong">
                  I specifically acknowledge that I have been advised of the
                  matters set forth below and agree as follows
                </p>

                <em>Initials at each line:</em>
                <br />
                <div className="form-field-wrapper">
                  <p>
                    <input type="text" className="acknowledge-input" />I
                    acknowledge that obtainning permanent make-up is my choice
                    alone. The application of permanent make-up will result in a
                    permanent change to my appearance, and that needles and inks
                    will go into my skin. No representations have been made to
                    me as to the ability to later restore the skin involved in
                    permanent make-up to the original condition, and it is very
                    costly to remove
                  </p>
                </div>
                <div className="form-field-wrapper">
                  <p>
                    <input type="text" className="acknowledge-input" />I am not
                    pregnant or nursing. I do not have any history of herpes
                    infection at the proposed procedure site. I do not have
                    epilepsy, diabetes, allergic reaction to latex or
                    antibiotics, hermophilia, or other bleeding disorder. I do
                    not have cardiac valve disease or suffer from any heart
                    conditions or take medications that thins my blood
                  </p>
                </div>
                <div className="form-field-wrapper">
                  <p>
                    <input type="text" className="acknowledge-input" />
                    If i suffer from hepatitis, or other risk factors for
                    bloodborne pathogen exposure, or any other communicable
                    disease, I have informed the Technician of the fact and have
                    been advised of any medications and procedure necessary to
                    promote the satisfactory healing of my tatoo
                  </p>
                </div>
                <div className="form-field-wrapper">
                  <p>
                    <input type="text" className="acknowledge-input" />I do not
                    have a hisotry of medication use or currently using
                    medication, including being prescribed antibiotics prior to
                    dental or surgical procedures
                  </p>
                </div>
                <div className="form-field-wrapper">
                  <p>
                    <input type="text" className="acknowledge-input" />I have
                    advised the Technician of any allergies to latex gloves,
                    soaps, or medications. I acknowledge it is not reasonably
                    possible for the Technician to determine whether I might
                    have allegergic reaction to the permanent make-up process
                    and further acknowledge that such reaction is possible.
                  </p>
                </div>
                <div className="form-field-wrapper">
                  <p>
                    <input type="text" className="acknowledge-input" />I have
                    truthfully represented to the Technician that I am 18 years
                    of age or older. I am not under the influence of any drugs
                    or alcohol. To my knowledge, I do not have any physical,
                    mental, or medical impairment of disability that might
                    affect my well being as a direct or indirect result of my
                    decision to have a tattoo at this time
                  </p>
                </div>
                <div className="form-field-wrapper">
                  <p>
                    <input type="text" className="acknowledge-input" />I
                    acknowledge infection is always possible as a result of
                    permanent make-up application, and I agree to follow all
                    suggested instructions concerning the care of the permanent
                    make-up site while it is healing
                  </p>
                </div>
                <div className="form-field-wrapper">
                  <p>
                    <input type="text" className="acknowledge-input" />I
                    acknowledge and give consent to this permanent make-up
                    studio to use images of my tattoo(s) for marketing and, or
                    publishing purposes in various media such as the internet,
                    magazine, printed and or television etc.
                  </p>
                </div>
                <div className="form-field-wrapper">
                  <p>
                    <input type="text" className="acknowledge-input" />I
                    understand I will have permanent make-up applied using
                    appropriate instruments and sterilization techniques. I
                    understand that the permanent make-up site usually takes 2
                    weeks or longer to heal. I agree to release and forever
                    discharge, and hold harmless, the Technician, all employees,
                    contractors, and the management of the permanent make-up
                    studio from any and all claims of negligence, damages, or
                    legal actions arising from or connected in any way with my
                    tattoo, the procedure, and conduct used in my tattoo and
                    assume all responsibility for the decisions(s) made
                    consenting to this permanent procedure
                  </p>
                </div>
                <div className="form-field-wrapper">
                  <p>
                    <input type="text" className="acknowledge-input" />I am
                    aware that permanent cosmetic ink, dyes, and pigments have
                    not been approved by the federal Food and Drug
                    Administration and that the health consequences of using
                    these products are unknown
                  </p>
                </div>

                <form>
                  <div className="sig-container">
                    <div className="sig-col">
                      <input type="text" id="clientSig" />
                      <label
                        htmlFor="clientSig"
                        style={{ marginLeft: 10, fontWeight: 900 }}
                      >
                        CLIENT'S SIGNATURE
                      </label>
                    </div>
                    <div className="date-col">
                      <input type="text" id="clientDate" />
                      <label
                        htmlFor="clientDate"
                        style={{ marginLeft: 12, fontWeight: 900 }}
                      >
                        DATE
                      </label>
                    </div>
                  </div>
                  <div className="sig-container">
                    <div className="sig-col">
                      <input type="text" id="techSig" />
                      <label
                        htmlFor="techSig"
                        style={{ marginLeft: 10, fontWeight: 900 }}
                      >
                        TECHNICIAN SIGNATURE
                      </label>
                    </div>
                    <div className="date-col">
                      <input type="text" id="techDate" />
                      <label
                        htmlFor="techDate"
                        style={{ marginLeft: 12, fontWeight: 900 }}
                      >
                        DATE
                      </label>
                    </div>
                  </div>
                </form>
              </main>
            </div>
          </div>
        )}

        <button className="btn btn-primary m-2" onClick={savePDF}>
          Save
        </button>
        {/* {customers &&
          customers.map((el) => (
            <div key={el.name}>
              <h2>{el.name}</h2>
            </div>
          ))}
        {customer && (
          <div id="content-22">
            <Test customer={customer} />
          </div>
        )} */}

        {/* <div style={{ margin: "0 auto", width: "700px" }}>
          {customer && (
            <>
              <PDFViewer width="700px" height="750px">
                <Template customer={customer} />
              </PDFViewer>
              <DisplayPDF customer={customer} />
            </>
          )}
        </div> */}
      </div>
    </>
  )
}

export default App3
