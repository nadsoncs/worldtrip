import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next';
import { api } from '../../services/api';
import { Flex } from "@chakra-ui/react";
import { Header } from '../../components/Header';
import { ContinentBanner } from '../../components/ContinentBanner';
import { InfoBio } from '../../components/InfoBio';
import { TopHundred } from '../../components/TopHundred';

interface ContinentProps {
  continent: Continent;
  topHundred: City[];
}
interface Continent {
  id: string;
  name: string;
  slogan: string;
  description: string;
  countries: number;
  languages: number;
  banner: string;
}
interface City {
  city: string;
  country: string;
  flag: string;
  image: string;
  continent: number;
}

export default function Continent({continent, topHundred}: ContinentProps) {
  return (
    <Flex direction="column" h="100vh">
      <Head>
        <title>worldtrip</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header backPage="/"/>

      <ContinentBanner name={continent.name} banner={continent.banner}/>

      <main>
        <Flex
          direction="column"
          w={["100%",1440]}
          mt={[6, 20]}
          mx="auto"
          px={[4, "140px"]}
        >
          <InfoBio 
            description={continent.description}
            countries={continent.countries}
            languages={continent.languages}
            topHundred={topHundred.length}
          />
          <TopHundred topHundred={topHundred}/>
        </Flex>
      </main>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
const {id} = params;
  const { data } = await api.get(`/continents/${id}`);
  const continent = data;
  const topHundred = await api.get(`/top100?continent=${id}`);
  return {
    props: {
      continent,
      topHundred: topHundred.data,
    },
    // revalidate: 60 * 60 * 24,
  }
}

//export const getStaticProps: GetStaticProps = async (ctx) => {
  
// }