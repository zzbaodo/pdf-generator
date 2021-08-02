import React, { useState, useEffect } from "react"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  pdf,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer"
import moment from "moment"
import firebase from "./firebase"
import { storage } from "./firebase"
import axios from "axios"
const DisplayPDF = ({ customer }) => {
  const [respond, setRespond] = useState(null)
  const newDate = moment.unix(customer.date)
  const properDate = newDate._d
  const displayDate = properDate.toString().substring(0, 16)
  const services = {
    OPB: "Ombree Powder Brows",
    BLL: "Baby Lip Blush",
    DLR: "Dark Lip Revitalization",
    RLB: "Restorative Lip Blush",
    LLE: "Lash Line Enhancement",
    CL: "Classic Liner",
    SL: "Smokey Liner",
  }
  const styles = StyleSheet.create({
    page: { backgroundColor: "white", flexDirection: "column" },
    header: {
      color: "black",
      textAlign: "center",
      marginTop: "10px",
      fontSize: "12",
    },
    yesOrNo: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "5px",
    },
    acknowledgement: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "5px",
    },
    leftCol: {
      fontSize: "13.5",
      padding: "3px",
      width: "500",
      marginLeft: "20px",
      marginBottom: "5px",
    },
    rightCol: {
      marginRight: "20px",
      backgroundColor: "lightblue",
      padding: "3px",
      fontSize: "15",
      height: "25px",
    },
  })
  const Template = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text
            style={{ textAlign: "center", marginTop: "10px", fontSize: "25" }}
          >
            Appointment Confirmation Letter
          </Text>
        </View>
        <View style={styles.header}>
          <View>
            <Text>Name: {customer.name}</Text>
          </View>
          <View>
            <Text>Email: {customer.email}</Text>
          </View>
          <View>
            <Text>
              Phone: {customer.phone.substring(2, customer.phone.length)}
            </Text>
          </View>
          <View>
            <Text>Service: {services[customer.service]}</Text>
          </View>
          <View>
            <Text>
              Appointment Time: {displayDate}, at {customer.time}
            </Text>
          </View>
          <View>
            <Text>Location: 1609 Maroon Dr</Text>
          </View>
        </View>
        <View>
          <Text
            style={{ textAlign: "center", marginTop: "10px", fontSize: "25" }}
          >
            Consent Form
          </Text>
        </View>
        <View style={styles.yesOrNo}>
          <View style={{ marginLeft: "20px", fontSize: "13.5" }}>
            <Text>Are you 18 years old or above?</Text>
          </View>
          <View style={styles.rightCol}>
            <Text>Yes</Text>
          </View>
        </View>
        <View style={styles.yesOrNo}>
          <View style={{ marginLeft: "20px", fontSize: "13.5" }}>
            <Text>Are you under the influence of drugs or alcohol?</Text>
          </View>
          <View style={styles.rightCol}>
            <Text>No</Text>
          </View>
        </View>
        <View style={styles.yesOrNo}>
          <View style={{ marginLeft: "20px", fontSize: "13.5" }}>
            <Text>Are you currently Pregnant or Nursing?</Text>
          </View>
          <View style={styles.rightCol}>
            <Text>No</Text>
          </View>
        </View>
        <View style={styles.yesOrNo}>
          <View style={{ marginLeft: "20px", fontSize: "13.5" }}>
            <Text>Are you diabetic or epileptic?</Text>
          </View>
          <View style={styles.rightCol}>
            <Text>No</Text>
          </View>
        </View>
        <View style={styles.yesOrNo}>
          <View style={{ marginLeft: "20px", fontSize: "13.5" }}>
            <Text>Do you have a communicable disease?</Text>
          </View>
          <View style={styles.rightCol}>
            <Text>No</Text>
          </View>
        </View>
        <View style={styles.yesOrNo}>
          <View style={{ marginLeft: "20px", fontSize: "13.5" }}>
            <Text>
              Are you under active chemotherapy or radiotherapy treatment?
            </Text>
          </View>
          <View style={styles.rightCol}>
            <Text>No</Text>
          </View>
        </View>
        <View>
          <Text
            style={{ textAlign: "center", marginTop: "10px", fontSize: "25" }}
          >
            Acknowledgement
          </Text>
        </View>
        <View style={styles.acknowledgement}>
          <View style={styles.leftCol}>
            <Text>
              I understand that this procedure is a permanent change to my skin
              and body.
            </Text>
          </View>
          <View style={styles.rightCol}>
            <Text>Yes</Text>
          </View>
        </View>
        <View style={styles.acknowledgement}>
          <View style={styles.leftCol}>
            <Text>
              I allow my tattoo to be photographed and be used for DET Beauty
              portfolio showcased.
            </Text>
          </View>
          <View style={styles.rightCol}>
            <Text>Yes</Text>
          </View>
        </View>
        <View style={styles.acknowledgement}>
          <View style={styles.leftCol}>
            <Text>
              I understand that after my service, there will be no refunds. No
              exceptions.
            </Text>
          </View>
          <View style={styles.rightCol}>
            <Text>Yes</Text>
          </View>
        </View>
        <View style={styles.acknowledgement}>
          <View style={styles.leftCol}>
            <Text>
              I agree that the studio does not have a way of identifying if I am
              allergic to the elements or ingredients that will be used for my
              tattoo.
            </Text>
          </View>
          <View style={styles.rightCol}>
            <Text>Yes</Text>
          </View>
        </View>
        <View style={styles.acknowledgement}>
          <View style={styles.leftCol}>
            <Text>
              I understand that I need to take care of the tattoo by following
              the after care instruction to prevent any signs and symptoms of
              infection that indicate a need to seek medical care given to me by
              DET Beauty.
            </Text>
          </View>
          <View style={styles.rightCol}>
            <Text>Yes</Text>
          </View>
        </View>
        <View style={styles.acknowledgement}>
          <View style={styles.leftCol}>
            <Text>
              I understand that I might get an infection if I don't follow the
              instructions given to me in regards of taking good care of my
              tattoo.
            </Text>
          </View>
          <View style={styles.rightCol}>
            <Text>Yes</Text>
          </View>
        </View>
        <View style={styles.acknowledgement}>
          <View style={styles.leftCol}>
            <Text>
              I understand that successful color saturation can NOT be
              guaranteed due to hidden scar tissue. I understand that the
              proposed procedure(s) involve the inherent risks of the such
              procedures and possible complications during and/or following the
              procedures such as : infection, poor color retention and
              hyper-pigmentation.
            </Text>
          </View>
          <View style={styles.rightCol}>
            <Text>Yes</Text>
          </View>
        </View>
        <View style={styles.acknowledgement}>
          <View style={styles.leftCol}>
            <Text>
              I understand that variations in color and design may exist between
              the chosen shapes and colors selected by me and as ultimately
              applied to my body.
            </Text>
          </View>
          <View style={styles.rightCol}>
            <Text>Yes</Text>
          </View>
        </View>
        <View style={styles.acknowledgement}>
          <View style={styles.leftCol}>
            <Text>
              I understand that tattoo inks, dyes, and pigments have not been
              approved by the federal Food and Drug Administration and that the
              health consequences of using these products are unknown.
            </Text>
          </View>
          <View style={styles.rightCol}>
            <Text>Yes</Text>
          </View>
        </View>
        <View wrap={false} style={styles.acknowledgement}>
          <View style={styles.leftCol}>
            <Text>
              I agree to follow all instructions concerning the care of my
              tattoo, and that any touch-ups needed because of my own negligence
              will be done at my own expense.
            </Text>
          </View>
          <View style={styles.rightCol}>
            <Text>Yes</Text>
          </View>
        </View>
        <View style={styles.acknowledgement}>
          <View style={styles.leftCol}>
            <Text>
              I confirm that the information I provided in this document is
              accurate and true.
            </Text>
          </View>
          <View style={styles.rightCol}>
            <Text>Yes</Text>
          </View>
        </View>

        <View>
          <Text style={{ marginTop: "15px", marginLeft: "20px" }}>
            Client's Signature,
          </Text>
          <Image
            style={{ width: "100px", margin: "20px" }}
            src={customer.canvas}
          ></Image>
        </View>
        <View>
          <Text style={{ marginTop: "15px", marginLeft: "20px" }}>
            Date Signed,
          </Text>
          <Text
            style={{ marginTop: "15px", marginLeft: "20px", fontSize: "15" }}
          >
            {customer.dateSign}
          </Text>
        </View>
      </Page>
    </Document>
  )
  const onClickHandler = async () => {
    const blob = await pdf(Template).toBlob()
    const uploadTask = storage.ref(`pdfs/${customer.name}`).put(blob)
    uploadTask.on(
      "state_change",
      (snapShot) => {},
      (err) => {
        console.log(err)
      },
      () => {
        storage
          .ref("pdfs")
          .child(customer.name)
          .getDownloadURL()
          .then((url) => {
            const data = {
              link: url,
              email: customer.email,
            }
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
            }
            try {
              axios.post("/sendmail", data, config).then((res) => {
                
                if (res.data.mes === "success") {
                  setRespond("success")
                } else {
                  setRespond("fail")
                }
              })
            } catch (error) {
              console.error(error)
            }
            const db = firebase.firestore()
            db.collection("appointment")
              .doc(`${customer.email}_${customer.phone}`)
              .set(
                {
                  consentFormLink: url,
                },
                { merge: true }
              )
          })
          .catch((e) => console.log(e))
      }
    )
  }
  //Set time out on the response
  // useEffect(() => {
  //   if (respond) {
  //     setTimeout(setRespond(null), 5000)
  //   }
  // }, [respond])
  return (
    <>
      {respond ? (
        respond === "success" ? (
          <div className="alert alert-success">
            Email has been successfully sent!
          </div>
        ) : (
          <div className="alert alert-danger">Fail</div>
        )
      ) : null}
      <button className="btn btn-primary d-block my-3" onClick={onClickHandler}>
        Click to send email
      </button>
    </>
  )
}

export default DisplayPDF
