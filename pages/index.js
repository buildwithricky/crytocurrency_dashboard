//our-domain.com/

import Table from "../components/Table";
import Header from "../components/header";
import { Fragment } from "react";
import NavBar from "../components/Navbar";
import CardSlide from "../components/CardSlide";
import Trending from "../components/Trending";

import NewsLetter from "../components/coin";
import Footer from "../components/footer";

const coinGecko = require("coingecko-api");
const coinGeckoClient = new CoinGecko();
const HomePage = () => {
  const { data } = props.result;
  let trending = data.filter((single) => parseInt(single.current_price) > 590);
  let biggestGainers = data.filter(
    (single) => parseInt(single.price_change_percentage_24h) > 0
  );
  let recentlyAdded = data.filter(
    (single) => parseInt(single.current_price) < 1
  );

  return (
    <div className="home">
      <Header props={props} />
      <NavBar />
      <CardSlide />
      <Trending
        trending={trending}
        recents={recentlyAdded}
        gainer={biggestGainers}
      />
      <Table props={props} />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default HomePage;
export async function getServerSideProps(context) {
  const params = {
    order: CoinGecko.ORDER.MARKET_CAP_DESC,
  };

  const result = await coinGeckoClient.coins.markets({ params });

  return {
    props: {
      result,
    },
  };
}
