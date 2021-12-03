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
import axious from "axios";

// const api = axious.create({
//   baseURL: "http://localhost:3001/api/login",
// });

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
      axious
        .post("http://localhost:3001/api/login", form)
        .then((res) => {
          console.log(res.data);
          props.setAuth(true);
        })
        .catch((err) => {
          setValue(err.response.data.message);
          setError(err.response.data.error);
        })
        .finally(() => {
          setIsPending(false);
        });
    }, 500);
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
  );
};

export default Form;
