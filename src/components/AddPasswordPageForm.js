


import React from 'react';

export default function AddPasswordPageForm(props){
  return (
    <form className="addPasswordForm">
      <label className="addPasswordTitle" htmlFor="PasswordTitle">
      Password Title
      </label>
      <input
        type="text"
        className="addPasswordInput"
        id="addPasswordTitle"
        onChange={(e)=>{
          //change state as input forms are filled.
          props.setPasswordValues({
            passwordTitle: e.target.value,
            passwordKey: props.passwordValues.passwordKey
          });
        }}
      ></input>

      <label className="addPasswordKey" htmlFor="PasswordKey">
      Enter a keyword or a phrase
      </label>
      <input
        type="text"
        className="addPasswordInput"
        id="addPasswordKey"
        onChange={(e)=>{
          //change state as input forms are filled.
          props.setPasswordValues({
            passwordTitle: props.passwordValues.passwordTitle,
            passwordKey: e.target.value
          });
        }}
      ></input>

      <input
        type="submit"
        className="addPasswordSubmit"
        value="Add"
        onClick={(e)=>{props.onAddClick(e);}}
      ></input>
    </form>
  );
}
