import Navbar from "./Navbar";
import { Text, Box, Container, Heading, Image } from "@chakra-ui/react";

const Transactions = () => {
  return (
    <div className="transactions">
      <Navbar />
      <Box textAlign="center">
        <Box>
          <Container maxWidth="container.xl">
            <Box d="flex" alignItems="center" py={20} flexDirection="row">
              <Box mr="6">
                <Heading as="h1" size="xl" isTruncated>
                  <Box>Transaction</Box>
                </Heading>
                <Box mt="6" fontWeight="medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  expedita voluptate nostrum enim autem accusamus tempore
                  veniam. Doloremque, alias laudantium esse nesciunt nulla odio
                  dolorem nostrum, obcaecati, facere fuga inventore!
                </Box>
              </Box>
              <Box w="100%">
                <Image
                  w="100%"
                  src="https://img.freepik.com/free-photo/finance-money-transaction-technology_31965-1134.jpg?size=626&ext=jpg"
                  objectFit="cover"
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Transactions;
