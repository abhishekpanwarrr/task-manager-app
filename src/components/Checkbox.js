import React from 'react';
// import Firebase from '../firebase';
import {getFirestore, updateDoc,doc} from 'firebase/firestore'

export const Checkbox = ({ id, taskDesc }) => {
    
  const archiveTask = async() => {
    const db = getFirestore()
    const docRef = doc(db,'tasks',id)
    updateDoc(docRef,{
        archived:true
    })

  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
      onKeyDown={(e) => {
        if (e.key === 'Enter') archiveTask();
      }}
      aria-label={`Mark ${taskDesc} as done?`}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox"></span>
    </div>
  );
}