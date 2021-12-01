import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Center,
  Box,
} from "@chakra-ui/react";
const eye = <FontAwesomeIcon icon={faEye} />;

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const history = useHistory();

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { username, password };

    setIsPending(true);

    setTimeout(() => {
      fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((res) => {
          console.log(res);
          if (!res.error) {
            props.setAuth(true);
          } else {
            setValue(res.message);
            setError(res.error);
          }
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsPending(false);
        });
    }, 1000);
  };

  useEffect(() => {
    if (props.isAuth) {
      history.push("/home");
    }
  }, [props.isAuth]);

  return (
    <Center minH="90vh">
      <Box m={2} maxW="350px" w="100%">
        {error ? (
          <Text fontSize="md" color="red">
            {value}
          </Text>
        ) : (
          <Text fontSize="md" color="green">
            {value}
          </Text>
        )}
        <Text fontWeight="bold" fontSize="xl">
          Login
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl marginTop="2" isInvalid={error}>
            <FormLabel>Username</FormLabel>
            <Input
              pos="relative"
              type="text"
              name="username"
              placeholder="Masukan Username"
              errorBorderColor="red.300"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          <FormControl marginTop="2" isInvalid={error}>
            <FormLabel>Password</FormLabel>
            <Input
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Masukan Password"
              errorBorderColor="red.300"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i onClick={togglePasswordVisiblity}>{eye}</i>
          </FormControl>

          {!isPending && (
            <Button
              w="100%"
              marginTop="2"
              colorScheme="purple"
              type="submit"
              disabled={username === "" || password === ""}
            >
              Login
            </Button>
          )}
          {isPending && (
            <Button
              w="100%"
              marginTop="2"
              isLoading
              loadingText="Loading"
              colorScheme="purple"
              // variant="outline"
              spinnerPlacement="start"
            ></Button>
          )}
        </form>
        <Center>
          <Link to="/book">Book</Link>
        </Center>
        <Center>
          <Link to="/dashboard">Dashboard</Link>
        </Center>
      </Box>
    </Center>
    // <div className="form">
    //   {error ? (
    //     <p className="value error-color">{value} </p>
    //   ) : (
    //     <p className="value success-color"> {value} </p>
    //   )}
    //   <h2>Login</h2>

    //   <form onSubmit={handleSubmit}>
    //     <label>Username</label>
    //     <div className="username">
    //       <input
    //         type="text"
    //         className={error ? "border-error" : ""}
    //         name="username"
    //         placeholder="Masukan Username"
    //         required
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>

    //     <div className="password">
    //       <label>Password</label>
    //       <input
    //         type={passwordShown ? "text" : "password"}
    //         className={error ? "border-error" : ""}
    //         name="password"
    //         placeholder="Masukan Password"
    //         required
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <i onClick={togglePasswordVisiblity}>{eye}</i>
    //     </div>

    //     {!isPending && (
    //       <button disabled={username === "" || password === ""}>Login</button>
    //     )}
    //     {isPending && <button>Loading...</button>}
    //   </form>
    //   <div className="links">
    //     <Link to="/book">Book</Link>
    //   </div>
    // </div>
  );
};

export default Form;
