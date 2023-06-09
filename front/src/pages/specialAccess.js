import React, { useState, useEffect } from "react";
import useEthersProvider from "../../hook/useEthersProvider";
import Contract from "../../public/NFTCryptoAstro.json";
import { ethers } from "ethers";
import Layout from "../../components/Layout/Layout";
import { Flex, Spinner, Text, Box, Button, useToast } from "@chakra-ui/react";

require('dotenv').config({ path: '../../../front/.env'});

const SpecialAccess = () => {
  const [hasNFTs, setHasNFTs] = useState(false);
  const { account, provider } = useEthersProvider();
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const contractAddress = "0xD8e69f674a04dB289ef49A27f7145FBd2d19a3aF";
  //Testnet address
  const teamAddress = "0xEcb86fEf51e5c603d0514d904b79AB40158BA67A";
  const ownerAddress = "0x957E3B7c98cA23dBc89B7358f90aC1A8d5b2655E";
  const maxGift = 5;

  useEffect(() => {
    if (account) {
      getDatas();
    }
  }, [account]);

  const getDatas = async () => {
    setIsLoading(true);
    const contract = new ethers.Contract(
      contractAddress,
      Contract.abi,
      provider
    );

    let hasNFTs = await contract.tokensOfOwner(account);// 
    setHasNFTs(hasNFTs);
    setIsLoading(false);
  };

  const handleGift = async (e) => {
    e.preventDefault();

  
    if (account !== ownerAddress) {
      toast({
        title: "Error",
        description: "Only the contract owner can gift NFTs",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    const contract = new ethers.Contract(
      contractAddress,
      Contract.abi,
      provider.getSigner()
    );

    try {
      const tx = await contract.gift(teamAddress, maxGift);
      await tx.wait();
      toast({
        title: "Success",
        description: `Gifted ${maxGift} NFTs to ${teamAddress}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Francois+One&display=swap"
        rel="stylesheet"
      ></link>

      <Layout>
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="100%"
          h="85vh"
        >
          {account ? (
            isLoading ? (
              <Spinner />
            ) : hasNFTs.length > 0 ? (
              <Text fontSize="2rem" mb="2rem" align="center">
                Congratulations!🎉 You've {hasNFTs.length} NFTs from the
                collection.
              </Text>
            ) : (
              <Text fontSize="2rem" mb="2rem" align="center">
                You don't have any NFTs 🥺
              </Text>
            )
          ) : (
            <Text fontSize="2rem" mb="2rem" align="center">
              Please connect your wallet to see your NFTs.
            </Text>
          )}
      
          {account && account === ownerAddress && (
            <Box align="center" justify="center">
              <Text fontSize="2rem" mb="2rem" align="center">
                You are the Owner address.
              </Text>
              <Button
                onClick={handleGift}
                colorScheme="blue"
                align="center"
                justify="center"
              >
                Gift NFTs
              </Button>
              <Text mt="2rem">To your favorite Team 💝</Text>
            </Box>
          )}
        </Flex>
      </Layout>
    </>
  );
};

export default SpecialAccess;
