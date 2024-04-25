import { Box, Text, Image, VStack, Button } from '@chakra-ui/react';
import { FaCookieBite } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={8} align="center" justify="center" minH="100vh" bg="brand.700" color="white">
      <Box p={5} bg="white" color="brand.700" borderRadius="lg" boxShadow="xl">
        <Image src="/images/meringue-hero.jpg" alt="Delicious Meringue" borderRadius="md" />
      </Box>
      <Text fontSize="4xl" fontWeight="bold">Welcome to Meringue Delights!</Text>
      <Text fontSize="xl">Explore the best meringue recipes and tips to perfect your baking skills.</Text>
      <Button rightIcon={<FaCookieBite />} colorScheme="pink" variant="solid" size="lg">
        Discover Recipes
      </Button>
    </VStack>
  );
};

export default Index;