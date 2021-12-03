import Navbar from "./Navbar";
import { Image, Box, Container, Heading, Center } from "@chakra-ui/react";

const User = () => {
  return (
    <div className="user">
      <Navbar />
      <Box textAlign="center">
        <Box>
          <Container maxWidth="container.xl">
            <Box
              d="flex"
              alignItems="center"
              alignContent="center"
              py={20}
              flexDirection="row"
            >
              <Box mr="6">
                <Heading as="h1" size="xl" isTruncated>
                  <Box>User</Box>
                </Heading>
                <Center mt="6">
                  <Image
                    alignItems="center"
                    borderRadius="full"
                    boxSize="150px"
                    src="https://bit.ly/sage-adebayo"
                  />
                </Center>
                <Box mt="6" fontWeight="medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  expedita voluptate nostrum enim autem accusamus tempore
                  veniam. Doloremque, alias laudantium esse nesciunt nulla odio
                  dolorem nostrum, obcaecati, facere fuga inventore!
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <Box p="5"></Box>
    </div>
  );
};

export default User;
