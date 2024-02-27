import { useState } from 'react'
import explorer from './data/fileData'
import Folder from './components/Folder';
import './App.css'

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <>
    <Folder explorer={explorerData}/>
    </>
  )
}

export default App
