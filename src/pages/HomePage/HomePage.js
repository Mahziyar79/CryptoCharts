import "./homepage.css";
import serviceimg1 from "../../assets/images/services-img1.png";
import serviceimg2 from "../../assets/images/services-img2.png";
import serviceimg3 from "../../assets/images/services-img3.png";
import TradingViewWidget from "react-tradingview-widget";
import { TickerTape, MiniChart } from "react-ts-tradingview-widgets";
import MarketOverviewComp from "../../components/MarketOverviewComp";

const HomePage = () => {
  const symbols = [
    {
      proName: "FX_IDC:EURUSD",
      title: "EUR/USD",
    },
    {
      proName: "BITSTAMP:BTCUSD",
      title: "Bitcoin",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "Ethereum",
    },
    {
      description: "",
      proName: "BINANCE:ETHUSDT",
    },
    {
      description: "shibusdt",
      proName: "BINANCE:SHIBUSDT",
    },
  ];
  return (
    <>
      <section className="top-banner-home container">
        <div className="banner-img">
          <div className="chart-desktop">
            <TradingViewWidget
              symbol="BINANCE:BTCUSDT"
              interval="5"
              save_image="false"
              theme="dark"
            />
          </div>
          <div className="chart-mobile">
            <TradingViewWidget
              symbol="BINANCE:BTCUSDT"
              interval="5"
              save_image="false"
              theme="dark"
              width="330px"
              height="450px"
            />
          </div>
        </div>
      </section>
      <section className="container market_overview">
        <div className="MiniChart">
          <MarketOverviewComp />
        </div>
        <div className="MiniChart">
          <MiniChart
            colorTheme="dark"
            height="400"
            symbol="BINANCE:BTCUSDT"
          ></MiniChart>
        </div>
      </section>
      <section className="tickertape">
        <TickerTape colorTheme="dark" symbols={symbols}></TickerTape>
      </section>
    </>
  );
};

export default HomePage;
