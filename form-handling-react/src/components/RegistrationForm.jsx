import { useState } from "react";

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username ) {
            setErrors("Username is required");
            return;
        }
        
        if (!email ) {
            setErrors("Email is required");
            return;
        }   

        if (!password ) {
            setErrors("Password is required");
            return;
        }
        
        setErrors("");
        console.log("Submitting data:", { username, email, password });
        alert("User registered successfully!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={username} required/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={email} required/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={password} required/>
            </div>
            <button type="submit">Register</button>
        </form>
    );
}
export default RegistrationForm;