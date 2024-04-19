import { Box, Heading, Text, Image, Container, SimpleGrid } from "@chakra-ui/react";
import { FaRulerCombined, FaCity, FaRegImages } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" mb={4} textAlign="center">
        Aerial Rooftop Measurements with 3D Imaging
      </Heading>
      <Text fontSize="lg" mb={10} textAlign="center">
        Explore the precision and efficiency of using aerial 3D imaging for rooftop measurements.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <FaRulerCombined size="3em" />
          <Heading as="h3" size="lg" my={4}>
            Accurate Measurements
          </Heading>
          <Text>Utilize advanced aerial technologies to obtain precise measurements of any rooftop.</Text>
        </Box>
        <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <FaCity size="3em" />
          <Heading as="h3" size="lg" my={4}>
            Urban Planning
          </Heading>
          <Text>Enhance urban development projects with detailed 3D models of city landscapes.</Text>
        </Box>
        <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <FaRegImages size="3em" />
          <Heading as="h3" size="lg" my={4}>
            Visual Documentation
          </Heading>
          <Text>Create comprehensive visual archives of properties with high-resolution 3D images.</Text>
        </Box>
      </SimpleGrid>
      <Box mt={10} textAlign="center">
        <Image src="https://images.unsplash.com/photo-1490213299088-a5b6ff3ac761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwb2YlMjByb29mdG9wc3xlbnwwfHx8fDE3MTM0ODUxODJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
      </Box>
    </Container>
  );
};

export default Index;
