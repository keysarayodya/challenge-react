import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Center,
  Box,
} from "@chakra-ui/react";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import axios from "axios";

const FormFood = () => {
  const [food, setFood] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = { food, description, price };
    console.log("Data: ", form);

    axios
      .post("http://localhost:8001/foods", form)
      .then((res) => {
        console.log(res.data);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <Center minH="90vh">
      <form onSubmit={handleSubmit}>
        <Box m={2} maxW="550px" w="100%">
          <Button leftIcon={<FiArrowLeft />} colorScheme="teal" variant="solid">
            <Link to="/dashboard">Back</Link>
          </Button>
          <FormControl marginTop="2">
            <FormLabel>Nama Makanan</FormLabel>
            <Input
              type="text"
              name="food"
              placeholder="Masukan Nama Makanan"
              required
              value={food}
              onChange={(e) => setFood(e.target.value)}
            ></Input>
          </FormControl>
          <FormControl marginTop="2">
            <FormLabel>Deskripsi</FormLabel>
            <Input
              type="text"
              name="description"
              placeholder="Masukan Deskripsi"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Input>
          </FormControl>
          <FormControl marginTop="2">
            <FormLabel>Harga</FormLabel>
            <Input
              type="text"
              name="price"
              placeholder="Masukan Harga"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Input>
          </FormControl>{" "}
          <Button
            type="submit"
            marginTop="2"
            leftIcon={<FiPlus />}
            colorScheme="teal"
            variant="solid"
          >
            Add Food
          </Button>
        </Box>
      </form>
    </Center>
  );
};

export default FormFood;
