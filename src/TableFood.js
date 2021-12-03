import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { Box, Button, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const TableFood = ({ foods }) => {
  // const handleClick = () => {
  //   axios.delete("http://localhost:8001/foods" + foods.id).then(() => {
  //     console.log("deleted");
  //   });
  // };

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th w="5%">No</Th>
            <Th>Nama Makanan</Th>
            <Th>Deskripsi</Th>
            <Th>Harga</Th>
            <Th>Aksi</Th>
          </Tr>
        </Thead>
        {foods &&
          foods.map((form) => (
            <Tbody>
              <Tr>
                <Td>{form.id}</Td>
                <Td>{form.food}</Td>
                <Td>{form.description}</Td>
                <Td>{form.price}</Td>
                <Td>
                  <Button mr="2">Edit</Button>
                  <Button>Delete</Button>
                </Td>
              </Tr>
            </Tbody>
          ))}
      </Table>

      <Button mt="5">
        <Link to="/formFood">Add Food</Link>
      </Button>
    </Box>
  );
};

export default TableFood;
