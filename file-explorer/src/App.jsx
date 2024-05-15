
import { useState } from 'react'
import './App.css'
import explorer from './data/folderData'
import Folder from './components/Folder'
import useTraverseTree from './hooks/use-traverse-tree'

function App() {
   
  const[explorerData, setExplorerData] = useState(explorer)
  
  const {insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const newExplorer = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(newExplorer);
  }

  return (
    <>
     
    <Folder explorer = {explorerData} handleInsertNode={handleInsertNode}/>
    </>
  )
}

export default App
