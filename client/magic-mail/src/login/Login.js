import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export const Login = () =>{
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }

    return (
        <>
        <Card sx={{ maxWidth: 200, alignContent:'center'}}>
            <CardContent>
            <TextField id="outlined-basic" label="email" variant="outlined" value={email} onChange={handleChange(setemail)}/>
            <TextField id="outlined-basic" label="password" type="password" autoComplete="current-password" variant="outlined" value={password} onChange={handleChange(setpassword)}/>
            </CardContent>
        <CardActions>
            <Button size="small">login</Button>
            <Button size="small">cancel</Button>
        </CardActions>
        </Card>
        </>
    );
}