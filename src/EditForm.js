import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";
import { FiArrowLeft, FiEdit2 } from "react-icons/fi";
import axios from "axios";

const EditForm = ({ foods }) => {
  const [food, setFood] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = { food, description, price };
    console.log("Data: ", form);

    axios
      .post("http://localhost:8001/foods", form)
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <Center minH="90vh">
      {foods.map((form) => (
        <form onSubmit={handleSubmit}>
          <Box m={2} maxW="550px" w="100%">
            <Button
              leftIcon={<FiArrowLeft />}
              colorScheme="teal"
              variant="solid"
            >
              <Link to="/dashboard">Back</Link>
            </Button>

            <FormControl marginTop="2">
              <FormLabel>Nama Makanan</FormLabel>
              <Input
                type="text"
                name="food"
                placeholder="Masukan Nama Makanan"
                required
                value={form.food}
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
                value={form.description}
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
                value={form.price}
                onChange={(e) => setPrice(e.target.value)}
              ></Input>
            </FormControl>
            <Button
              type="submit"
              marginTop="2"
              leftIcon={<FiEdit2 />}
              colorScheme="teal"
              variant="solid"
            >
              Update
            </Button>
          </Box>
        </form>
      ))}
    </Center>
  );
};

export default EditForm;
