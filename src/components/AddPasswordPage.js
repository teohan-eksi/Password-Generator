


import React, { useEffect, useState } from 'react';
import AddPasswordPageForm from './AddPasswordPageForm.js';
import ShowPasswordInAddPassword from './ShowPasswordInAddPassword.js'

function AddPasswordPage(props){
  const [passwordValues, setPasswordValues] = useState({
    passwordTitle: "",
    passwordKey: ""
  });

  //change title and show back arrow
  useEffect(()=>{
    if(props.isShown){
      props.changeHeaderTitle("Add Password");
      props.setBackArrowShown(true);
    }
  });

  //calls another function in a child component wrapped in a conditional
  //statement. Pass the below state as two props separately into the child.
  const [addClicked, setAddClicked] = useState(false);
  function onAddClick(e) {
    e.preventDefault();
    console.log("onAddClick");

    //if password title or key is empty stop the flow.
    if(passwordValues.passwordTitle === "" ||
      passwordValues.passwordKey === ""){
        console.log("Fill out stuff");
    }else{
            
      //to call the function in ShowPasswordInAddPassword child component
      setAddClicked(true);
    }
  }

  if(props.isShown){
    return (
      <div className="addPasswordContainer">
        <AddPasswordPageForm
          passwordValues={passwordValues}
          setPasswordValues={setPasswordValues}
          onAddClick={onAddClick}
        />

        <ShowPasswordInAddPassword
          /*reflect the input form values in real time to the user*/
          passwordValues={passwordValues}
          /*to clean the input forms after adding them. */
          setPasswordValues={setPasswordValues}
          /*Probably a cheap hack to call a function in a child component
           *But it workssss.*/
          addClicked={addClicked}
          setAddClicked={setAddClicked}
        />
      </div>
    );
  }else{
    return null;
  }
}

export default AddPasswordPage;