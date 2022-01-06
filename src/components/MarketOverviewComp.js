import { MarketOverview } from "react-ts-tradingview-widgets";

const MarketOverviewComp = ({width}) => {
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
        <MarketOverview
            colorTheme="dark"
            height={400}
            tabs={tabs}
            showChart="true"
            locale="en"
            largeChartUrl=""
            showFloatingTooltip="false"
            width={width}
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
     );
}
 
export default MarketOverviewComp;