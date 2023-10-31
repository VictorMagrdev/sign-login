import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export const Sign = () =>{
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');

    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }

    return (
        <>
        <Card sx={{ maxWidth: 200, alignContent:'center'}}>
            <CardContent>
            <TextField id="outlined-basic" label="firstname" variant="outlined" value={firstname} onChange={handleChange(setfirstname)}/>
            <TextField id="outlined-basic" label="lastname" variant="outlined" value={lastname} onChange={handleChange(setlastname)}/>
            <TextField id="outlined-basic" label="email" variant="outlined" value={email} onChange={handleChange(setemail)}/>
            <TextField id="outlined-basic" label="phone" variant="outlined" value={phone} onChange={handleChange(setphone)}/>
            <TextField id="outlined-basic" label="password" type="password" autoComplete="current-password" variant="outlined" value={password} onChange={handleChange(setpassword)}/>
            <TextField id="outlined-basic" label="repassword" variant="outlined"/>
            </CardContent>
        <CardActions>
            <Button size="small">sign</Button>
            <Button size="small">cancel</Button>
        </CardActions>
        </Card>
        </>
    );
}

