import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer, PDFDownloadLink, Text,
  Page, Document, Font} from "@react-pdf/renderer";
import HeaderPDF from "../components/resumePdf/HeaderPdf";
import SkillsPDF from "../components/resumePdf/SkillsPdf";
import EducationPDF from "../components/resumePdf/EducationPdf";
import Layout from "../components/layout";

Font.register( {
    family: 'Open Sans',
    src: `${__dirname}/fonts/fonts/Open_Sans/OpenSans-Regular.ttf`,
  });


const ResumeLink = () => (
  <div>
    <PDFDownloadLink document={<Output />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  </div>
);

function Output(){
    return(
        <Document>
        <Page size="A4">
          <HeaderPDF />
          <SkillsPDF />
          <EducationPDF />
          <Text>
            This IS the candidate you are looking for
          </Text>
        </Page>
        </Document>
    );
}

function Resume() {
  return (
    <Layout>
      <PDFViewer>
        <Output/>
      </PDFViewer>
      <ResumeLink></ResumeLink>
      </Layout>
      
  );
}

export default Resume;

//ReactDOM.render(<Resume />, document.getElementById("___gatsby"));
