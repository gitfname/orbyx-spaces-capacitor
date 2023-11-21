import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./i18n.js"
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { AddContactModal, AddNewStorage, Droppable, PowerdBy, UploadModal } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Droppable>
        <ChakraProvider>
          <AddContactModal />
          <UploadModal />
          <AddNewStorage />
          <PowerdBy />
          <App />
        </ChakraProvider>
      </Droppable>
    </BrowserRouter>
  // </React.StrictMode>,
)
