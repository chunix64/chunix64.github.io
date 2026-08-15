import DefaultLayout from "@/layouts/DefaultLayout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './globals.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}></Route>
          <Route path="*" element={<DefaultLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
