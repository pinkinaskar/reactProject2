import React, { useState, useRef }  from "react";



function AddData({ parentCallback }) {


    let [index, setIndex] = useState(1);  
    const [formData, setFormData] = useState({
        id: index,
        name: "",
        description: ""
      });

    const [submittedData, setSubmittedData] = useState(null);  

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const submitButton = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        parentCallback(formData);

        setIndex(index+1);
        //console.log('index-----', index);
        setFormData({
          id: (index+1),
          name: "",
          description: ""
        });

        console.log(formData);
      };


    

    return (
      <div className="AddData">

        <div className="AddDataContent">
        <p>Name</p>
        <input type="hidden" name="id" value={formData.id} /> 
        <input type="text" name="name" value={formData.name} onChange={handleChange}/> 
        </div>

        <div className="AddDataContent">
        <p>Description</p>
        <input type="text" name="description" value={formData.description} onChange={handleChange}/>  

        <button type="button" onClick={submitButton}  className="AddDataContentButton">
          Add Todo
        </button> 
        </div> 

      </div>
    );
  }
  
  export default AddData;