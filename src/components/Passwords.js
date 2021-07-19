


import React from 'react';

class WorkoutPrograms extends React.Component{
  render() {
    if(this.props.isShown){
      return (
        <div className="workoutProgramsContainer">
          
        </div>
      );
    }else{
      return null;
    }
  }
}

export default WorkoutPrograms;
