import Navbar from "./Navbar";
import { Text } from "@chakra-ui/react";

const Book = () => {
  return (
    <div className="book">
      <Navbar />
      <Text fontSize="xl" textAlign="center">
        Book
      </Text>
    </div>
  );
};

export default Book;
