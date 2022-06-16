import { Tooltip } from "antd";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import geographyJson from "../json/geography.json";

interface MapChartProps {
  selectedCountry: any | null;
  setSelectedCountry: (country: any) => void;
  setTooltipContent (content: string): void;
}

const MapChart = (props: MapChartProps) => {
  const {
    selectedCountry,
    setSelectedCountry,
    setTooltipContent
  } = props;

  return (
    <>
      <ComposableMap data-tip='' projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geographyJson}>
            {({ geographies }) =>
              geographies.map(geo => (
                <>
                  {(!selectedCountry || (geo.properties.name !== selectedCountry.properties.name))  && (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const { name } = geo.properties;
                        setTooltipContent(`${name}`);
                        setSelectedCountry(null);

                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        default: {
                          fill: "#D6D6DA",
                          outline: "none"
                        },
                        hover: {
                          fill: "#F53",
                          outline: "none"
                        },
                        pressed: {
                          fill: "#E42",
                          outline: "none"
                        }
                      }}
                    />
                  )}
                  {(selectedCountry && geo.properties.name === selectedCountry.properties.name) && (
                    <Tooltip
                      title={`${selectedCountry.properties.name}`}
                      visible={true}
                    >
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: "#F53",
                            outline: "none"
                          },
                          pressed: {
                            fill: "#E42",
                            outline: "none"
                          }
                        }}
                      />
                    </Tooltip>
                  )}
                </>
              ))
            }
          </Geographies>
        </ZoomableGroup>

      </ComposableMap>
    </>
  )
}

export default MapChart
