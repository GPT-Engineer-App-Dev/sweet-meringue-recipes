import { Box, Text, Image, VStack, SimpleGrid, Heading, UnorderedList, ListItem } from '@chakra-ui/react';
import { FaCookieBite } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={8} align="center" justify="center" minH="100vh" bg="off-white" color="brand.600">
      <Box bg="off-white" color="brand.600" width="100%">
        <Image src="images/new-meringue1.jpg" alt="Elegant Meringue Dish" width="95%" />
      </Box>
      <Heading as="h1" size="2xl" fontWeight="bold">Meringue</Heading>
      <Text fontSize="xl">Explore the best meringue recipes and tips to perfect your baking skills.</Text>
      <SimpleGrid columns={2} spacing={10} pt={10}>
        <Box bg="off-white" width="100%">
          <Image src="images/new-meringue2.jpg" alt="Assorted Meringue Cookies" width="95%" />
          <Text mt={2} fontSize="lg" fontWeight="semibold" lineHeight="short">
            Learn to make perfect meringue cookies with our detailed guide.
          </Text>
        </Box>
        <Box bg="off-white" width="100%">
          <Image src="images/new-meringue1.jpg" alt="Elegant Meringue Dish" width="95%" />
          <Text mt={2} fontSize="lg" fontWeight="semibold" lineHeight="short">
            Explore the art of creating sophisticated meringue dishes.
          </Text>
        </Box>
      </SimpleGrid>
      <Box p={5} bg="off-white" width="100%">
        <Heading as="h2" size="xl" fontWeight="bold" mb={4}>Featured Recipes</Heading>
        <Text fontSize="lg">Here are some of our favorite meringue recipes:</Text>
        <UnorderedList mt={4} ml={10} spacing={3}>
          <ListItem>Classic French Meringue</ListItem>
          <ListItem>Swiss Meringue Buttercream</ListItem>
          <ListItem>Italian Meringue Macarons</ListItem>
        </UnorderedList>
      </Box>
    </VStack>
  );
};

export default Index;