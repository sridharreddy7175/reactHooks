import React, { useState } from 'react';

const Register = () => {
    const [firstname, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [nameError,setfirstnameerror]=useState('');
    const [phoneError,setPhoneerror]=useState('');
    const[emailError,setEmailerror]=useState('');
    const onChangename = (e) => {
        setFirstName(e.target.value)
        console.log(firstname)
    }
    const onChangephone = (e) => {
        setPhone(e.target.value)
    }
    const onChangeemail = (e) => {
        setEmail(e.target.value)
    }
    const validate = () => {
        var nameError = '';
        var phoneError = '';
        var emailError = '';
        if (!firstname) {
            nameError = 'Please Enter a name'
        }
        if (!phone) {
            phoneError = 'Please Enter a Phone';
        }
        if (!email) {
            emailError = 'Please Enter a Email';
        }
        if (nameError || phoneError || emailError) {
            setfirstnameerror(nameError)
            setPhoneerror(phoneError)
            setEmailerror(emailError)
            return false;
        }
        return true;
    }
    const SubmitButton = (e) => {
        e.preventDefault()
        const isValid = validate();
        if (isValid) {

            console.log('The form was submitted with the following data');

        }
        // if(firstname=="" ){
        //     alert('enter a fields')
        // }
        // else if(phone==""){
        //     alert('enter a fields')
        // }
        // else if(email==""){
        //     alert('enter a fields')
        // }
        // else{
        //     alert('Submit Details')
        // }
    }
    return (
        <div>
            <h1>Register</h1>
            <div>
                <input type="text" name="firstname" value={firstname} placeholder=" Yourname"
                    onChange={onChangename} />
            </div>
            <div style={{ color: "red", fontSize: 15, outlineColor: "red" }}>{nameError}</div>
            <div>
                <input type="text" name="phone" value={phone} placeholder="Phone"
                    onChange={onChangephone} />
            </div>
            <div style={{ color: "red", fontSize: 15, outlineColor: "red" }}>{phoneError}</div>
            <div>
                <input type="text" name="email" value={email} placeholder="email"
                    onChange={onChangeemail} />
            </div>
            <div style={{ color: "red", fontSize: 15, outlineColor: "red" }}>{emailError}</div>
            <button onClick={SubmitButton}>Submit</button>

        </div>
    )
}
export default Register;