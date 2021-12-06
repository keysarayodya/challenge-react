import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const TableFood = ({ foods }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const handleClick = (id) => {
    axios
      .delete(`http://localhost:8001/foods/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th w="5%">No</Th>
            <Th w="20%">Nama Makanan</Th>
            <Th w="30%">Deskripsi</Th>
            <Th>Harga</Th>
            <Th>Aksi</Th>
          </Tr>
        </Thead>
        {foods &&
          foods.map((form, i) => (
            <Tbody key={i}>
              <Tr>
                <Td>{i + 1}</Td>
                <Td>{form.food}</Td>
                <Td>{form.description}</Td>
                <Td>{form.price}</Td>
                <Td>
                  <Button mr="2" mb="2">
                    <Link to="/editForm" state={{ form }}>
                      {/* <Link
                      to={{ pathname: `/editForm/${form.id}`, state: { form } }}
                    > */}
                      Edit
                    </Link>
                  </Button>
                  <Button mb="2" onClick={() => setIsOpen(true)}>
                    Delete
                  </Button>
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                          Delete Food
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={() => handleClick(form.id)}
                            ml={3}
                          >
                            Delete
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
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
