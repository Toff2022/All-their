import React, {useEffect, useState} from 'react';
import TextField from '../components/textField';
import { validator } from '../utils/validator';

const LoginPage = () => {

    const [data, setData] = useState({email:"", password:"",})
    const [errors, setErrors] = useState({})
    const handleChange = ({target}) => {
        setData((prevState) =>({
            ...prevState,
            [target.name]:target.value 
        }))
    }
    const validatorConfig = {
        email:{isRequired:{message:"Электронная почта обязательна к заполнению"}},
        password:{isRequired:{message:"Пароль обязательно к заполнению"}}
    }
    useEffect(() => {validate()}, [data])
    const validate = () => {
        const errors = validator(data, validatorConfig)
        
        setErrors(errors)
        return Object.keys(errors).length === 0
    } 
    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if(!isValid) return
        console.log(data)

    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextField
                    required
                    label="Email" 
                    name="email" 
                    value={data.email}
                    error={errors.email}
                    onChange={handleChange}
                />
                    <TextField 
                    required
                    label="Password" 
                    type="password" 
                    name="password" 
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    ) 
}
 
export default LoginPage;