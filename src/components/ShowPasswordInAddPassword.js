


import React, {useState, useEffect} from 'react';

export default function ShowWorkoutInAddWorkout(props) {
  const [isShown, setIsShown] = useState(false);
  const [cleanInputForms, setCleanInputForms] = useState(false);
  const [showPassword, setShowPassword] = useState(null);

  useEffect(()=>{
    //this function is called from the parent.
    if(props.addClicked){
      setIsShown(true);
      setShowPassword(props.userGeneratedPassword);

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

  function onSaveClick(e) {
    e.preventDefault();
    console.log("save click");

    props.changeShownState({
      passwordTitle: props.passwordValues.passwordTitle,
      psw: props.userGeneratedPassword
    });

    //clean the current input fields.
    //this clears the showing area below
    props.setPasswordValues({
      passwordTitle: "",
      passwordKey: ""
    });

    //this clears the input forms.
    setCleanInputForms(true);

    setShowPassword(null);

    setIsShown(false);

    props.onSaveClick();
  }

  if(isShown){
    return(
      <div className="showPasswordContainer">
        <p className="addPasswordTitle">
          {props.passwordValues.passwordTitle}
        </p>

        <p className="ShowPassword">
          {showPassword}
        </p>

        <button id="savePassword"
          onClick={(e)=>{
            onSaveClick(e);
          }}
        >Save</button>
      </div>
    );
  }else{
    return null;
  }
}
