import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading fontSize="4xl">Welcome to CodeLearn</Heading>
        <Text fontSize="xl">Your online platform to learn coding interactively.</Text>
        <Box>
          <Link to="/courses">
            <Button colorScheme="teal" size="lg">Explore Courses</Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;