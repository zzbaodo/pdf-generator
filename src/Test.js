import React from "react"
import {
  Form,
  Container,
  Image,

} from "react-bootstrap"

const Test = ({ customer }) => {
  return (
    <Container>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={customer?.name} readOnly />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" readOnly value={customer?.email} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" readOnly value={customer?.phone} />
        </Form.Group>
        <hr />
        <h2 style={{ textAlign: "center", padding: "10px" }}>Consent Form</h2>
        <Form.Group>
          <Form.Label>Are you 18 years old or above?</Form.Label>
          <Form.Check type="radio" label="Yes" checked={true}></Form.Check>
          <Form.Check type="radio" label="No" checked={false}></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            {" "}
            Are you under the influence of drugs or alcohol?
          </Form.Label>
          <Form.Check type="radio" label="Yes" checked={true}></Form.Check>
          <Form.Check type="radio" label="No" checked={false}></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Label>Are you currently Pregnancy or Nursing?</Form.Label>
          <Form.Check type="radio" label="Yes" checked={true}></Form.Check>
          <Form.Check type="radio" label="No" checked={false}></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Label>Are you diabetic or epileptic?</Form.Label>
          <Form.Check type="radio" label="Yes" checked={true}></Form.Check>
          <Form.Check type="radio" label="No" checked={false}></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Label>Do you have a communicable disease?</Form.Label>
          <Form.Check type="radio" label="Yes" checked={true}></Form.Check>
          <Form.Check type="radio" label="No" checked={false}></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Are you under active chemotherapy or radiotherapy treatment?
          </Form.Label>
          <Form.Check type="radio" label="Yes" checked={true}></Form.Check>
          <Form.Check type="radio" label="No" checked={false}></Form.Check>
        </Form.Group>
        <hr />
        <h2
          className="acknowledgement"
          style={{ textAlign: "center", padding: "10px" }}
        >
          Acknowledgement
        </h2>
        <Form.Group>
          <Form.Check
            type="checkbox"
            value="yes"
            label="I understand that this procedure is a permanent change to my skin
              and body"
            checked={true}
          ></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            value="yes"
            label="I allow my tattoo to be photographed and be used for DET Beauty portfolio showcased"
            checked={true}
          ></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            value="yes"
            label="I understand that after my service, there will be no refunds. No exceptions"
            checked={true}
          ></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            value="yes"
            label="I agree that the studio does not have a way of identifying if I am allergic to the elements or ingredients that will be used for my tattoo"
            checked={true}
          ></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            value="yes"
            label="I understand that I need to take care of the tattoo by following the after care instruction to prevent any signs and symptoms of infection that indicate a need to seek medical care given to me by DET Beauty"
            checked={true}
          ></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            value="yes"
            label="I understand that successful color saturation can NOT be guaranteed due to hidden scar tissue. I understand that the proposed procedure(s) involve the inherent risks of the such procedures and possible complications during and/or following the procedures such as : infection, poor color retention and hyper-pigmentation"
            checked={true}
          ></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            value="yes"
            label="I understand that variations in color and design may exist between the chosen shapes and colors selected by me and as ultimately applied to my body"
            checked={true}
          ></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            value="yes"
            label="I understand that tattoo inks, dyes, and pigments have not been approved by the federal Food and Drug Administration and that the health consequences of using these products are unknown"
            checked={true}
          ></Form.Check>
        </Form.Group>
        <Form.Group style={{ marginTop: 50 }}>
          <Form.Check
            type="checkbox"
            value="yes"
            label="I agree to follow all instructions concerning the care of my tattoo, and that any touch-ups needed because of my own negligence will be done at my own expense"
            checked={true}
          ></Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            value="yes"
            label="I confirm that the information I provided in this document is accurate and true"
            checked={true}
          ></Form.Check>
        </Form.Group>
        <h5>Please sign below</h5>
        <Image src={customer?.canvas} />
      </Form>
    </Container>
  )
}

export default Test
