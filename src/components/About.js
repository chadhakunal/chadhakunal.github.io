import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";

import { Fade } from "react-reveal";

export default function About({ color }) {

  return (
    <>
      <Fade bottom>
        <Heading>
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
            rel="stylesheet"
          />
        </Heading>

        <Container maxW={"3xl"} id="hero">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
            pt={{ base: 36, md: 52 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              John Jakobsen <br />
              <Text as={"span"} color={`${color}.400`}>
                Software Engineer
              </Text>
            </Heading>
            <Text
              color={"gray.500"}
              fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
            >
              Looking for Software Engineering Opportunities
            </Text>
          </Stack>
        </Container>
      </Fade>
    </>
  );
}
