import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const initialValues = {
    BusinessDescription: "",
    email: "",
    phoneNo: "",

}

const ResgisterForm = () => {

    const [values, setValues] = useState(initialValues);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        // if(validate())
       window.alert("test");
    }


    return (
        <div>

            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>

                    <TextField label="Business Description"
                        variant="outlined"
                        name="BusinessDescription"
                        value={values.BusinessDescription}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={6} md={8}>

                    <TextField label="Email"
                        variant="outlined"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />

                </Grid>

                <Grid item xs={6} md={8}>

                    <TextField label="Phone Number"
                        variant="outlined"
                        name="phoneNo"
                        value={values.phoneNo}
                        onChange={handleInputChange}
                    />

                </Grid>

                <Grid item xs={6} md={8}>

                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>

                </Grid>

            </Grid>



        </div>
    )
}

export default ResgisterForm
