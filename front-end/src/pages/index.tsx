import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import NFTTable from "../components/dashboards/NFTTable";
import StatCard from "../components/dashboards/StatCard";
import {
  Bundles_And_Packages,
  fonts,
  NFTsData,
  SBTs_And_Collectibles,
} from "../configs/constants";

const Home: NextPage = () => {
  const [available, setAvailable] = React.useState<string>('Bronxe');

  return (
    <>
      <Head>
        <title>PixelSoul - Dashboard</title>
      </Head>

      <Flex flex={1} w="full" flexDirection={{ base: "column", lg: "row" }}>
        <Flex
          flex={1}
          alignItems="flex-start"
          mr={{ base: "0px", lg: "32px" }}
          flexDirection="column"
        >
          <HStack w="full" pb="21px" borderBottom="1px solid #EAECF0" mb="10px">
            <VStack alignItems="flex-start">
              <Heading
                size="md"
                fontFamily={fonts.Inter}
                color="#101828"
                fontSize="18px"
                fontWeight="600"
                lineHeight="28px"
              >
                Create your Avatar
              </Heading>
              <Text
                color="#475467"
                fontSize="14px"
                fontWeight="400"
                fontFamily={fonts.Inter}
                mt="4px"
              >
                Manage and track your card spending.
              </Text>
            </VStack>
          </HStack>

          <Box
            bg="#EAECF0"
            w="348px"
            h="302px"
            borderRadius="24px"
            mt="32px"
            position="relative"
          >
            <Image
              src="./three-dot.svg"
              position="absolute"
              right="15px"
              top="16px"
            />
          </Box>

          <HStack
            w="85%"
            pb="21px"
            borderBottom="1px solid #EAECF0"
            mb="10px"
            mt="70px"
          >
            <VStack alignItems="flex-start">
              <Heading
                size="md"
                fontFamily={fonts.Inter}
                color="#101828"
                fontSize="18px"
                fontWeight="600"
                lineHeight="28px"
              >
                Available
              </Heading>

              <Flex
                border="1px solid #D0D5DD"
                filter="drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05))"
                borderRadius="8px"
                overflow="hidden"
              >
                <Box
                  p="10px 16px"
                  color="#1D2939"
                  fontSize="14px"
                  fontFamily={fonts.Inter}
                  fontWeight="600"
                  bg={available === 'Bronxe' ? "#F9FAFB" : ''} 
                  cursor="pointer"
                  onClick={() => setAvailable('Bronxe')}
                >
                  Bronxe
                </Box>
                <Box
                  p="10px 16px"
                  color="#1D2939"
                  fontSize="14px"
                  fontFamily={fonts.Inter}
                  fontWeight="600"
                  borderLeft="1px solid #D0D5DD"
                  borderRight="1px solid #D0D5DD"
                  cursor="pointer"
                  bg={available === 'Silver' ? "#F9FAFB" : ''} 
                  onClick={() => setAvailable('Silver')}
                >
                  Silver
                </Box>
                <Box
                  p="10px 16px"
                  color="#1D2939"
                  fontSize="14px"
                  fontFamily={fonts.Inter}
                  fontWeight="600"
                  cursor="pointer"
                  bg={available === 'Gold' ? "#F9FAFB" : ''} 
                  onClick={() => setAvailable('Gold')}
                >
                  Gold
                </Box>
              </Flex>
            </VStack>
          </HStack>

          <SimpleGrid columns={4} columnGap="14px">
            <Image src="./logomark.svg" w="70px" />
            <Image src="./logomark.svg" w="70px" />
            <Image src="./logomark.svg" w="70px" />
            <Image src="./logomark.svg" w="70px" />
          </SimpleGrid>
        </Flex>
        <Flex
          flex={{ base: 1, lg: 4 }}
          w="full"
          flexDirection="column"
          borderLeft={{ base: "none", lg: "1px solid #EAECF0" }}
          pl={{ base: "0px", lg: "32px" }}
        >
          <Flex w="full" flexDir="column">
            <HStack
              w="full"
              pb="21px"
              borderBottom="1px solid #EAECF0"
              mb="10px"
              mt={{base: "70px", lg: "0px"}}
            >
              <VStack alignItems="flex-start">
                <Heading
                  size="md"
                  fontFamily={fonts.Inter}
                  color="#101828"
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="28px"
                >
                  Stats
                </Heading>
                <Text
                  color="#475467"
                  fontSize="14px"
                  fontWeight="400"
                  fontFamily={fonts.Inter}
                  mt="4px"
                >
                  The higher your SoulScore the more valuable you are to Games
                  as a player.{" "}
                </Text>
              </VStack>
              <Spacer />
              <Image src="./three-dot.svg" />
            </HStack>

            <SimpleGrid columns={{ base: 1, lg: 4 }} w="full" columnGap="20px">
              <StatCard title="SoulScore" value="999" percent={10} isUp />
              <StatCard
                title="SoulScore"
                value="999"
                percent={50}
                isUp={false}
              />
              <StatCard title="SoulScore" value="999" percent={60} isUp />
              <StatCard title="SoulScore" value="999" percent={103} isUp />
            </SimpleGrid>
          </Flex>

          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            w="full"
            columnGap="13px"
            mt="16px"
          >
            <NFTTable
              title="SBTs and Collectibles"
              tableLabels={SBTs_And_Collectibles.header}
              data={SBTs_And_Collectibles.data}
            />

            <NFTTable
              title="Bundles and Packages"
              tableLabels={Bundles_And_Packages.header}
              data={Bundles_And_Packages.data}
            />
          </SimpleGrid>

          <Flex mt="32px">
            <NFTTable
              title="NFTs"
              tableLabels={NFTsData.header}
              data={NFTsData.data}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;