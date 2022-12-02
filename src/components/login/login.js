import './login.css'
import {Button, TextField} from "@mui/material";


const Login = () => {

    const handleLoginInput = (event) => {
        console.log(event.target.value)
    }

    return <div className="main-log">
        <form className='form'>
            <div className='title'>Log In</div>
            <div className="inputs">
                <TextField className='input' label="Login" variant="outlined" required onChange={handleLoginInput}/>
                <TextField className='input' label="Password" variant="outlined" required />
            </div>
            <Button variant="text">Log in</Button>
        </form>
    </div>
}

export default Login;