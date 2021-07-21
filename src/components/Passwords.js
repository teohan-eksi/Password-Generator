


import React from 'react';

class WorkoutPrograms extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      showTitleAndPsw: [""]
    };

    this.functionName = this.functionName.bind(this);
  }

  functionName() {
    this.setState({
      showTitleAndPsw: this.state.showTitleAndPsw.push(this.props.passwordTitle)
      }
    );
  }

  render() {
    if(this.props.isShown){
      return (
        <div className="passwordsContainer">
          <p>Save your password somewhere safe.
          They will be gone after the app is closed.</p>
          <p className="addPasswordTitle">{this.props.passwordTitle}</p>
          <p>{this.props.psw}</p>
        </div>
      );
    }else{
      return null;
    }
  }
}

export default WorkoutPrograms;
