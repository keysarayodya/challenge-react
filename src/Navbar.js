import { Link } from "react-router-dom";
import { Flex, Spacer, Box, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      background="purple.600"
      color="white"
    >
      <Box p="6">
        <Heading as="h5" size="md" alt="brand">
          <Link to="/home">Challenge</Link>
        </Heading>
      </Box>

      <Spacer />
      <Box p="6">
        <Link to="/transactions">Transactions</Link>
      </Box>

      <Box p="6">
        <Link to="/user">User</Link>
      </Box>
    </Box>

    // <nav className="navbar">
    //   <Link to="/home">
    //     <h1>Challenge</h1>
    //   </Link>
    //   <div className="links">
    //     <Link to="/transactions">Transactions</Link>
    //     <Link to="/user">User</Link>
    //   </div>
    // </nav>
  );
};

export default Navbar;
