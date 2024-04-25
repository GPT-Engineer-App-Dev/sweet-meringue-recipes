import { Box, Text, Image, VStack, Button, SimpleGrid, Heading } from '@chakra-ui/react';
import { FaCookieBite } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={8} align="center" justify="center" minH="100vh" bg="off-white" color="brand.600">
      <Box bg="off-white" color="brand.600" boxShadow="xl" width="100%">
        <Image src="/images/meringue1.jpg" alt="Elegant Meringue Dish" width="100%" />
      </Box>
      <Heading as="h1" size="2xl" fontWeight="bold">Welcome to Meringue Delights!</Heading>
      <Text fontSize="xl">Explore the best meringue recipes and tips to perfect your baking skills.</Text>
      <Button rightIcon={<FaCookieBite />} colorScheme="pink" variant="solid" size="lg">
        Discover Recipes
      </Button>
      <SimpleGrid columns={2} spacing={10} pt={10}>
        <Box boxShadow="2xl" bg="off-white" width="100%">
          <Image src="/images/meringue2.jpg" alt="Assorted Meringue Cookies" width="100%" />
          <Text mt={2} fontSize="lg" fontWeight="semibold" lineHeight="short">
            Learn to make perfect meringue cookies with our detailed guide.
          </Text>
        </Box>
        <Box boxShadow="2xl" bg="off-white" width="100%">
          <Image src="/images/meringue1.jpg" alt="Elegant Meringue Dish" width="100%" />
          <Text mt={2} fontSize="lg" fontWeight="semibold" lineHeight="short">
            Explore the art of creating sophisticated meringue dishes.
          </Text>
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default Index;