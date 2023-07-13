import React, { useState}  from "react";
import AddData from "./add-data"; 

function DisplayData() {

    const [list, setList] = useState([]);

    const callbackFunction = childData => {
    //  console.log('childData : ', childData);
     
      setList( [ 
            ...list,
            childData
          ]);
     // console.log('list : ', list);
    };



    const deleteData = (e, id) => {

        setList((current) =>
        current.filter((obj) => obj.id !== id)
      );

      };


return (
    <div  className="MainData">
    <AddData parentCallback={callbackFunction} />

                <div className="tableData">  
                                {list.map((res, index) => (  
                                    <div className="card" key={index}>
                                    <div className="card-data">{res.name} </div>
                                    <div className="card-data">{res.description}</div>
                                    <div className="card-data">
                                    <button type="button" onClick={event => deleteData(event, res.id)} className="">
                                        Delete
                                    </button> 
                                    </div>
                                    </div>
                                ))}
                        
                </div>
    </div>

    

);
}

  
export default DisplayData;