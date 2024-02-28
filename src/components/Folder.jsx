/* eslint-disable react/prop-types */

import { useState } from "react"

function Folder({ explorer }) {

  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });   

  const createFile = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder
    });
  };

  const addFile = (e) => {
    if (e.keyCode === 13 && e.target.value) {  
        setShowInput({ ...showInput, visible: false });
      }
  }

  if(explorer.isFolder) {
    return (
        <>
        <div onClick={() => setExpand(!expand)} className="folder">
            📁 {explorer.name}
            <div>

            <button onClick={(e) => createFile(e, true)}>Add 📁</button>
            <button onClick={(e) => createFile(e, false)}>Add 📃</button>
            </div>
        </div>
        <div style={{display: expand ? "block" : "none", paddingLeft:25}}>
            {
                showInput.visible && (
                    <div className="inputContainer">
                        <span>{showInput.isFolder ? "📁" : "📄"}</span>
                        <input type="text"
                        className="inputContainer__input"
                        autoFocus
                        onKeyDown={addFile}
                        onBlur={() => setShowInput({...showInput, visible:false})} />
                    </div>
                )
            }
        {explorer.items.map((exp)=>{
            return <Folder explorer={exp} key={exp.id} />
        })}
        </div>
        </>
      )
  }
  else{
    return(
        <>
        <div className="file">📃 {explorer.name}</div>
        </>
    )
  }
}

export default Folder