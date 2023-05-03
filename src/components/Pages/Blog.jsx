import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const Blog = () => {

    const downloadPDF = () => {
        const doc = new jsPDF();
    
        // Add header to the PDF document
        doc.text("Question & Answerer Part", 10, 10);
    
        // Add content to the PDF document
        const data = [
          ["Tell us the differences between uncontrolled and controlled components.", "Uncontrolled component is manages its own state internally, without relying on React to manage it. This means that the value of the input element is stored in the DOM, rather than in a React component's state Controlled component is fully controlled by React. The value of the input element is stored in the component's state, and changes to the value are handled by a React event handler."],
          ["Question 2", "Answer 2"],
          ["Question 3", "Answer 3"],
        ];
        doc.autoTable({ head: [["Question", "Answer"]], body: data });
    
        // Save and download the PDF document
        doc.save("q&a.pdf");
      };
  return (
    <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-5">
            <h3 >Question & Answerer Part  </h3>
            <div><button onClick={downloadPDF} className="btn btn-success">Download Q&A</button></div>
        </div>
      <div className="card m-3">
        <div className="card-header">
          Tell us the differences between uncontrolled and controlled
          components.
        </div>
        <div className="card-body">
          <p className="card-text">
            <b>Uncontrolled</b> component is manages its own state internally,
            without relying on React to manage it. This means that the value of
            the input element is stored in the DOM, rather than in a React
            component's state. <br />
            <b>Controlled</b> component is fully controlled by React. The value
            of the input element is stored in the component's state, and changes
            to the value are handled by a React event handler.
          </p>
        </div>
      </div>
      <div className="card m-3">
        <div className="card-header">
          How to validate React props using PropTypes
        </div>
        <div className="card-body">
          <p className="card-text">
            In React, you can use the prop-types package to validate the props
            passed to a component.
            <b>You can install and imports then use it </b> <br />
            <b>Below are the validators for the basic data types:</b>
            <ul>
              <li>PropTypes.any: The prop can be of any data type</li>
              <li>PropTypes.bool: The prop should be a Boolean</li>
              <li>PropTypes.number: The prop should be a number</li>
              <li>PropTypes.string: The prop should be a string</li>
              <li>PropTypes.func: The prop should be a function</li>
              <li>PropTypes.array: The prop should be an array</li>
              <li>PropTypes.object: The prop should be an object</li>
              <li>PropTypes.symbol: The prop should be a symbol</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="card m-3">
        <div className="card-header">
          Tell us the difference between nodejs and express js.
        </div>
        <div className="card-body">
          <p className="card-text">
         <b> Node.js</b> provides a JavaScript runtime environment for building server-side applications. It includes  set  built-in modules that allow developers to interact with the file system, perform network operations, and implement other system-level functionality.
<br />
         <b>Express.js,</b> on the other hand, is a lightweight and flexible web application framework built on top of Node.js. It provides a number of features that simplify the process of building web applications
          </p>
        </div>
      </div>
      <div className="card m-3">
        <div className="card-header">
          What is a custom hook, and why will you create a custom hook?
        </div>
        <div className="card-body">
          <p className="card-text">
            Custom Hooks is JS function that we make  use multiple place  , hooks start name or prefix <b>use</b>. <br />  it can be reused easily, which makes the code cleaner and reduces the time to write the code. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
