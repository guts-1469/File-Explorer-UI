/* eslint-disable react/prop-types */

import { useState } from "react"

function Folder({ explorer }) {

  const [expand, setExpand] = useState(false);  

  if(explorer.isFolder) {
    return (
        <>
        <div onClick={() => setExpand(!expand)}>
            📁 {explorer.name}
        </div>
        <div style={{display: expand ? "block" : "none", paddingLeft:25}}>
        {explorer.items.map((exp, key)=>{
            return <Folder explorer={exp} key={key} />
        })}
        </div>
        </>
      )
  }
  else{
    return(
        <>
        <div>📃 {explorer.name}</div>
        </>
    )
  }
}

export default Folder