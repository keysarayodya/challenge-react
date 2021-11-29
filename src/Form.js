import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Form = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isPending, setIsPending] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [error, setError] = useState(null);
    const [value, setValue] = useState("")

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form={username, password}

        setIsPending(true);

        fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(form)
        }).then((res) => {
            console.log(res)
            return res.json();     
        }).then(res => {
            console.log(res)
            setValue(res.message)
            setError(res.error)
        }).catch(e => {
            console.log(e)
        }).finally(() => {
            setIsPending(false);
        })
    };

    return (
        <div className="form">
            { error ? <p className="value error-color">{value} </p> : <p className="value success-color"> {value} </p>}
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <div className="username">
                    <input
                        type="text"
                        name="username"
                        placeholder="Masukan Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                
                <div className="password">
                <label>Password</label>
                    <input
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        placeholder="Masukan Password"
                        required
                        value= {password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
                
                {!isPending && <button disabled={username === "" || password === ""}>Login</button>}
                {isPending && <button>Loading...</button>}
            </form>
        </div>
    )
}

export default Form;
