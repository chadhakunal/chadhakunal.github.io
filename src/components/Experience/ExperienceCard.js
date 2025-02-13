import {
    Text,
    Box,
    HStack,
    Card,
    CardHeader,
    CardBody,
    Flex,
    Image,
    List,
    ListItem,
    ListIcon,
  } from "@chakra-ui/react";
  import { ChevronRightIcon } from "@chakra-ui/icons";

export default function ExperienceCard(props) {

    const {
        company,
        description, 
        icon, 
        role, 
        startTime, 
        endTime, 
        color
    } = props.experience;

    return (
        <Card key={company + role + startTime + endTime} size="sm" margin={0}>
            <CardHeader>
                <Flex justifyContent="space-between">
                <HStack>
                    <Image src={icon} h={75} w={75} />
                    <Box px={2} align="left">
                    <Text fontWeight={600}>{company}</Text>
                    <Text>{role}</Text>
                    </Box>
                </HStack>
                <Text px={2} fontWeight={300}>
                    {startTime + " - " + endTime}
                </Text>
                </Flex>
            </CardHeader>
            <CardBody>
                <Flex>
                <List align="left" spacing={3}>
                    {description.map((item, index) => (
                    <ListItem key={index}>
                        <ListIcon
                        boxSize={6}
                        as={ChevronRightIcon}
                        color={`${color}.500`}
                        />
                        {item}
                    </ListItem>
                    ))}
                </List>
                </Flex>
            </CardBody>
        </Card>
    )
}