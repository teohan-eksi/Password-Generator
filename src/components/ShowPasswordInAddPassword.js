


import React, {useState, useEffect} from 'react';

export default function ShowWorkoutInAddWorkout(props) {
  const [cleanInputForms, setCleanInputForms] = useState(false);

  useEffect(()=>{
    //this function is called from the parent.
    if(props.addClicked){
      console.log("addClicked in Child");
      //update the password so far, and show it to the user.

      //clean the current inputs.
      //this clears the showing area below
      /*props.setPasswordValues({
        passwordTitle: "",
        passwordKey: ""
      });*/

      //this clears the input forms.
      //setCleanInputForms(true);

      props.setAddClicked(false);
    }
  });

  useEffect(()=>{
    if(cleanInputForms){
      document.getElementById("addPasswordTitle").value = "";
      document.getElementById("addPasswordKey").value = "";
      setCleanInputForms(false);
    }
  });

  return(
    <div>
      <p className="addPasswordTitle">
        {props.passwordValues.passwordTitle}
      </p>

      <p className="ShowPassword">
        {props.userGeneratedPassword}
      </p>
    </div>
  );
}
