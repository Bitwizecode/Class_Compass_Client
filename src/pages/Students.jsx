import React from 'react'
import {Box} from "@mui/material"
import Layout from '../components/Layout'

const Students = ({selected, setSelected}) => {
  return (
    <Layout isBottomNavbar selected={selected} setSelected={setSelected}>
       <h1>Students</h1>
    </Layout>
  )
}

export default Students