import React from "react"
import { Document, Page, Text } from "@react-pdf/renderer"
const MyDoc = () => {
  return (
    <Document>
      <Page>
        <Text>Hello from a pdf</Text>
      </Page>
    </Document>
  )
}

export default MyDoc
