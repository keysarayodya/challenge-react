import Navbar from "./Navbar";
import { Box, Container, Heading, AspectRatio } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Box textAlign="center">
        <Box>
          <Container maxWidth="container.xl">
            <Box d="flex" alignItems="center" py={20} flexDirection="row">
              <Box mr="6">
                <Heading as="h1" size="xl" isTruncated>
                  <Box>HomePage</Box>
                </Heading>
                <Box mt="6" fontWeight="medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae saepe et cumque ipsam! Incidunt fugiat magnam nemo,
                  ex quasi aliquid. Nemo, maxime ad. Fugit voluptate tempora
                  corporis impedit maxime iure.
                </Box>
              </Box>
              <Box w="100%">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
                    alt="demo"
                  />
                </AspectRatio>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
