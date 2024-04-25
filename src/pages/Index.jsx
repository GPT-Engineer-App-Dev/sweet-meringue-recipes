import { Box, Text, Image, VStack, Button, SimpleGrid, Heading } from '@chakra-ui/react';
import { FaCookieBite } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={8} align="center" justify="center" minH="100vh" bg="off-white" color="brand.600">
      <Box p={5} bg="off-white" color="brand.600" borderRadius="lg" boxShadow="xl">
        <Image src="/images/meringue1.jpg" alt="Elegant Meringue Dish" borderRadius="md" />
      </Box>
      <Heading as="h1" size="2xl" fontWeight="bold">Welcome to Meringue Delights!</Heading>
      <Text fontSize="xl">Explore the best meringue recipes and tips to perfect your baking skills.</Text>
      <Button rightIcon={<FaCookieBite />} colorScheme="pink" variant="solid" size="lg">
        Discover Recipes
      </Button>
      <SimpleGrid columns={2} spacing={10} pt={10}>
        <Box boxShadow="2xl" p="6" rounded="md" bg="off-white">
          <Image src="/images/meringue2.jpg" alt="Assorted Meringue Cookies" borderRadius="md" />
          <Text mt={2} fontSize="lg" fontWeight="semibold" lineHeight="short">
            Learn to make perfect meringue cookies with our detailed guide.
          </Text>
        </Box>
        <Box boxShadow="2xl" p="6" rounded="md" bg="off-white">
          <Image src="/images/meringue1.jpg" alt="Elegant Meringue Dish" borderRadius="md" />
          <Text mt={2} fontSize="lg" fontWeight="semibold" lineHeight="short">
            Explore the art of creating sophisticated meringue dishes.
          </Text>
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default Index;