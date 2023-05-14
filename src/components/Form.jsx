import React from 'react'
import RegisterData from "../pages/RegisterData"
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link';
const Form = () => {
  return (
    <div>Form
      <RegisterData />
      
    
      <div>Corporate Information   <Link href="#"><EditIcon/></Link></div>
      



    </div>
  )
}

export default Form
