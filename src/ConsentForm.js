import React from "react"
import "./ConsentForm.css"
import logo from "./logo.png"

const ConsentForm = ({ customer }) => {
  return (
    <div className="my-container">
      <main>
        <div className="header">
          <div className="header-text">
            <h1>Consent Form</h1>
            <h5>
              Consent to Permanent Make-up application, Release and Waiver of
              ALL Claims
            </h5>
          </div>
          <div className="logo-container">
            <img src={logo} style={{ width: 100, height: 100 }} />
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
          I acknowledge by signing this release that I have been given the full
          opportunity to ask any and all questions which I might have about
          obtaining permanent make-up from <span>{""}</span>
          (hereafter called "Technician") and that all of my questoins have been
          answered to my full and total satisfaction
        </p>
        <div className="form-field-wrapper">
          <label htmlFor="procedure" style={{ whiteSpace: "nowrap" }}>
            Procedure to be performed:
          </label>
          <input type="text" id="procedure" />
        </div>

        <br />
        <p className="bold-strong">
          I specifically acknowledge that I have been advised of the matters set
          forth below and agree as follows
        </p>

        <em>Initials at each line:</em>
        <br />
        <div className="form-field-wrapper">
          <p>
            <input type="text" className="acknowledge-input" />I acknowledge
            that obtainning permanent make-up is my choice alone. The
            application of permanent make-up will result in a permanent change
            to my appearance, and that needles and inks will go into my skin. No
            representations have been made to me as to the ability to later
            restore the skin involved in permanent make-up to the original
            condition, and it is very costly to remove
          </p>
        </div>
        <div className="form-field-wrapper">
          <p>
            <input type="text" className="acknowledge-input" />I am not pregnant
            or nursing. I do not have any history of herpes infection at the
            proposed procedure site. I do not have epilepsy, diabetes, allergic
            reaction to latex or antibiotics, hermophilia, or other bleeding
            disorder. I do not have cardiac valve disease or suffer from any
            heart conditions or take medications that thins my blood
          </p>
        </div>
        <div className="form-field-wrapper">
          <p>
            <input type="text" className="acknowledge-input" />
            If i suffer from hepatitis, or other risk factors for bloodborne
            pathogen exposure, or any other communicable disease, I have
            informed the Technician of the fact and have been advised of any
            medications and procedure necessary to promote the satisfactory
            healing of my tatoo
          </p>
        </div>
        <div className="form-field-wrapper">
          <p>
            <input type="text" className="acknowledge-input" />I do not have a
            hisotry of medication use or currently using medication, including
            being prescribed antibiotics prior to dental or surgical procedures
          </p>
        </div>
        <div className="form-field-wrapper">
          <p>
            <input type="text" className="acknowledge-input" />I have advised
            the Technician of any allergies to latex gloves, soaps, or
            medications. I acknowledge it is not reasonably possible for the
            Technician to determine whether I might have allegergic reaction to
            the permanent make-up process and further acknowledge that such
            reaction is possible.
          </p>
        </div>
        <div className="form-field-wrapper">
          <p>
            <input type="text" className="acknowledge-input" />I have truthfully
            represented to the Technician that I am 18 years of age or older. I
            am not under the influence of any drugs or alcohol. To my knowledge,
            I do not have any physical, mental, or medical impairment of
            disability that might affect my well being as a direct or indirect
            result of my decision to have a tattoo at this time
          </p>
        </div>
        <div className="form-field-wrapper">
          <p>
            <input type="text" className="acknowledge-input" />I acknowledge
            infection is always possible as a result of permanent make-up
            application, and I agree to follow all suggested instructions
            concerning the care of the permanent make-up site while it is
            healing
          </p>
        </div>
        <div className="form-field-wrapper">
          <p>
            <input type="text" className="acknowledge-input" />I acknowledge and
            give consent to this permanent make-up studio to use images of my
            tattoo(s) for marketing and, or publishing purposes in various media
            such as the internet, magazine, printed and or television etc.
          </p>
        </div>
        <div className="form-field-wrapper">
          <p>
            <input type="text" className="acknowledge-input" />I understand I
            will have permanent make-up applied using appropriate instruments
            and sterilization techniques. I understand that the permanent
            make-up site usually takes 2 weeks or longer to heal. I agree to
            release and forever discharge, and hold harmless, the Technician,
            all employees, contractors, and the management of the permanent
            make-up studio from any and all claims of negligence, damages, or
            legal actions arising from or connected in any way with my tattoo,
            the procedure, and conduct used in my tattoo and assume all
            responsibility for the decisions(s) made consenting to this
            permanent procedure
          </p>
        </div>
        <div className="form-field-wrapper">
          <p>
            <input type="text" className="acknowledge-input" />I am aware that
            permanent cosmetic ink, dyes, and pigments have not been approved by
            the federal Food and Drug Administration and that the health
            consequences of using these products are unknown
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
  )
}

export default ConsentForm
