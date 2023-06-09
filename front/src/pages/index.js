import { Text, Flex, Heading, Image, chakra } from "@chakra-ui/react";
import Layout from "../../components/Layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <title>Crypto Astro</title>
      <meta name="description" content="crypto astro nft dapp" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="Crypto astro, NFT, Polygon/Matic, Blockchain, Cryptocurrency, Mint, Smart contract, Marketplace, Collectibles, Token, Exchange, Wallet, Crypto art, Digital art gallery, Investment, Blockchain technology, Digital art, Crypto-economy, Blockchain ecosystem, Non-fungible tokens, Digital artworks, NFT events, User experience (UX), Metaverse, Digital identity"
      />

      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Francois+One&display=swap"
        rel="stylesheet"
      />

      <Layout>
        <Flex className={styles.container}
          direction={["column", "column", "row", "row"]}
          w="100%"
          h="85vh"
          justify="center"
          alignItems="center"
          textAlign="center"
          p="1rem"
          maxW="1200px"
          mx="auto"
        >
          <Flex className="content"
            width={["100%", "100%", "50%", "50%"]}
            direction="column"
            align="center"
            justify="center"
            fontFamily="Roboto Mono"
          >
            <Heading
              as="h1"
              fontSize={["3rem", "3rem", "3rem", "4rem"]}
              fontFamily="Francois One"
              mb="1rem"
            >
              Crypto Astro
            </Heading>
            <Text fontSize={["1.5rem", "1.75rem", "1.75rem", "2rem"]}>
              <chakra.span fontWeight="bold">
                Collect Crypto Astro NFTs
              </chakra.span>
            </Text>
            <Text
              fontSize={["1.5rem", "1.75rem", "1.75rem", "2rem"]}
              mt="0.5rem"
            >
              <chakra.span fontWeight="bold">Explore the Galaxy🪐</chakra.span>
              <br />
              <chakra.span
                fontSize={["1rem", "1rem", "1rem", "1.5rem"]}
                textColor={"#dcdde1"}
              >
                * Just now on mumbai testnet
              </chakra.span>
            </Text>
          </Flex>
          <Flex className={styles.image}
            width={["100%", "100%", "50%", "50%"]}
            align="center"
            justify="center"
            mt={["1.5rem", "1.5rem", "0", "0"]}
          >
            <Image 
              src="https://res.cloudinary.com/defpadn0s/image/upload/v1680449623/cryto_astro-home_mtls9f.png"
              alt="astronauts"
              width={["100%", "60%", "80%", "90%"]}
            />
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}
