import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/open-sans';
import * as React from "react"
import { ToastContainer } from "react-toastify"
import Dashboard from '../components/Dashboard/Dashboard';

const IndexPage = () => {
  return (
    <>
      <Dashboard />
      <ToastContainer autoClose={5000} theme="colored" />
    </>
  )
}

export default IndexPage;
