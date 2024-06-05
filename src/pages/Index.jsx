import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CodeMaster
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your ultimate online learning platform for coding. Start your journey to become a coding master today!
        </Text>
        <Box boxSize="sm">
          <Image src="/images/learning-platform.jpg" alt="Learning Platform" />
        </Box>
        <Button as={Link} to="/courses" colorScheme="teal" size="lg">
          Explore Courses
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;