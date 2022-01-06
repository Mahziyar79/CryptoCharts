import "./homepage.css";
import serviceimg1 from "../../assets/images/services-img1.png";
import serviceimg2 from "../../assets/images/services-img2.png";
import serviceimg3 from "../../assets/images/services-img3.png";
import TradingViewWidget from "react-tradingview-widget";
import { MarketOverview, TickerTape } from "react-ts-tradingview-widgets";

const HomePage = () => {
  const tabs = [
    {
      title: "Futures",
      symbols: [
        {
          s: "BINANCE:ETHUSDT",
        },
        {
          s: "BINANCE:BTCUSDT",
        },
        {
          s: "BINANCE:SHIBUSDT",
        },
      ],
      originalTitle: "Futures",
    },
  ];
  return (
    <>
      <section className="top-banner-home container">
        <div className="banner-title animate__animated animate__fadeInUp">
          <h1>
            Talk to 2 Billion+ People on <br></br>💬 WhatsApp
          </h1>
        </div>
        <div className="banner-desc animate__animated animate__fadeInUp">
          Drive Better Conversions, Sales, Revenue <br></br> on your customers'
          most preferred communication channel
        </div>
        <div className="banner-btns">
          <button className="btn-banner-1 btn-lg animate__animated animate__fadeInBottomRight">
            Get Official WhatsApp API{" "}
          </button>
          <button className="btn-banner-2 btn-lg animate__animated animate__fadeIn">
            Join a Free Demo{" "}
          </button>
          <button className="btn-banner-3 btn-lg animate__animated animate__fadeInBottomLeft">
            Start Free Trial{" "}
          </button>
        </div>
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
            />
          </div>
        </div>
      </section>
      <section>
        <div className="service-sec-title">
          <h3>How you can use Crypto API?</h3>
        </div>
        <div className="services container">
          <div className="service">
            <div className="service-block-sec">
              <img src={`${serviceimg1}`} alt="service-img-1"></img>
              <h4 className="service-title">
                Broadcast Messages and Start Conversations
              </h4>
              <p className="service-desc">
                Send shipping updates, delivery reminders, payment reminders and
                other notifications on WhatsApp using our APIs.
              </p>
              <button className="btn btn-service">Broadcast Now!</button>
            </div>
          </div>
          <div className="service">
            <div className="service-block-sec">
              <img src={`${serviceimg2}`} alt="service-img-1"></img>
              <h4 className="service-title">
                Broadcast Messages and Start Conversations
              </h4>
              <p className="service-desc">
                Send shipping updates, delivery reminders, payment reminders and
                other notifications on WhatsApp using our APIs.
              </p>
              <button className="btn btn-service">Get WhatsApp API</button>
            </div>
          </div>
          <div className="service">
            <div className="service-block-sec">
              <img src={`${serviceimg3}`} alt="service-img-1"></img>
              <h4 className="service-title">
                Broadcast Messages and Start Conversations
              </h4>
              <p className="service-desc">
                Send shipping updates, delivery reminders, payment reminders and
                other notifications on WhatsApp using our APIs.
              </p>
              <button className="btn btn-service">Try For Free!</button>
            </div>
          </div>
        </div>
      </section>
      <section className="market_overview">
        <div className="chart-desktop">
          <MarketOverview
            colorTheme="dark"
            height={700}
            tabs={tabs}
            showChart="true"
            locale="en"
            largeChartUrl=""
            showFloatingTooltip="false"
            width="600"
            dateRange="1D"
            plotLineColorGrowing="rgba(41, 98, 255, 1)"
            plotLineColorFalling="rgba(41, 98, 255, 1)"
            gridLineColor="rgba(240, 243, 250, 0)"
            scaleFontColor="rgba(120, 123, 134, 1)"
            belowLineFillColorGrowing="rgba(41, 98, 255, 0.12)"
            belowLineFillColorFalling="rgba(41, 98, 255, 0.12)"
            belowLineFillColorGrowingBottom="rgba(41, 98, 255, 0)"
            belowLineFillColorFallingBottom="rgba(41, 98, 255, 0)"
            symbolActiveColor="rgba(41, 98, 255, 0.12)"
          ></MarketOverview>
        </div>
        <div className="chart-mobile">
          <MarketOverview
            colorTheme="dark"
            height={700}
            tabs={tabs}
            showChart="true"
            locale="en"
            largeChartUrl=""
            showFloatingTooltip="false"
            width="300"
            dateRange="1D"
            plotLineColorGrowing="rgba(41, 98, 255, 1)"
            plotLineColorFalling="rgba(41, 98, 255, 1)"
            gridLineColor="rgba(240, 243, 250, 0)"
            scaleFontColor="rgba(120, 123, 134, 1)"
            belowLineFillColorGrowing="rgba(41, 98, 255, 0.12)"
            belowLineFillColorFalling="rgba(41, 98, 255, 0.12)"
            belowLineFillColorGrowingBottom="rgba(41, 98, 255, 0)"
            belowLineFillColorFallingBottom="rgba(41, 98, 255, 0)"
            symbolActiveColor="rgba(41, 98, 255, 0.12)"
          ></MarketOverview>
        </div>
      </section>
      <section className="tickertape">
        <TickerTape colorTheme="dark"></TickerTape>
      </section>
    </>
  );
};

export default HomePage;