import { useState, useEffect } from "react";
import TableFood from "./TableFood";
import { Link } from "react-router-dom";
import {
  Avatar,
  Flex,
  Heading,
  Icon,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";

import { FiHome, FiDollarSign, FiBookOpen } from "react-icons/fi";
import axios from "axios";

const Dashboard = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8001/foods").then((res) => setFoods(res.data));
  }, []);

  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      <Flex
        w="15%"
        flexDir="column"
        alignItems="center"
        backgroundColor="black"
        color="white"
      >
        <Flex flexDir="column" justifyContent="space-between" h="100vh">
          <Flex flexDir="column" as="nav">
            <Heading
              mt={50}
              mb={100}
              fontSize="4xl"
              alignSelf="center"
              letterSpacing="tight"
            >
              Dashboard.
            </Heading>

            <Flex flexDir="column" align="flex-start" justifyContent="center">
              <Flex className="sidebar-items">
                <ChakraLink>
                  <Link to="/home">
                    <Icon
                      as={FiHome}
                      fontSize="2xl"
                      className="active-icon"
                    ></Icon>
                  </Link>
                </ChakraLink>
                <ChakraLink _hover={{ textDecor: "none" }}>
                  <Link to="/home">
                    <Text className="active">Home</Text>
                  </Link>
                </ChakraLink>
              </Flex>
              <Flex className="sidebar-items">
                <ChakraLink>
                  <Link to="/transactions">
                    <Icon as={FiDollarSign} fontSize="2xl"></Icon>
                  </Link>
                </ChakraLink>
                <ChakraLink _hover={{ textDecor: "none" }}>
                  <Link to="/transactions">
                    <Text>Transactions</Text>
                  </Link>
                </ChakraLink>
              </Flex>
              <Flex className="sidebar-items">
                <ChakraLink>
                  <Link to="/book">
                    <Icon as={FiBookOpen} fontSize="2xl"></Icon>
                  </Link>
                </ChakraLink>
                <ChakraLink _hover={{ textDecor: "none" }}>
                  <Link to="/book">
                    <Text>Book</Text>
                  </Link>
                </ChakraLink>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
            <Avatar my={2} src="" />
            <Link to="/user">
              <Text textAlign="center">User</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      {/* Column 2 */}
      <Flex w="70%" p="3%" flexDir="column" overflow="auto" minH="100vh">
        <Heading fontWeight="normal" mb={4} letterSpacing="tight">
          Welcome back,
          <Flex fontWeight="bold" display="inline-flex">
            User
          </Flex>
        </Heading>

        {/* Table */}
        <TableFood foods={foods} />
      </Flex>

      {/* colum3 */}
      <Flex
        w="20%"
        bgColor="#F5F5F5"
        p="3%"
        flexDir="column"
        overflow="auto"
      ></Flex>
    </Flex>
  );
};

export default Dashboard;
