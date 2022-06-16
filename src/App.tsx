import React, { useState } from 'react'
import './App.css'
import MapChart from './components/MapChart'
import ReactTooltip from 'react-tooltip'
import { Button } from 'antd'
import geographyJson from "./json/geography.json"
import 'antd/dist/antd.css'


function App() {
   const [tooltipContent, setTooltipContent] = useState<string>('')
   const [selectedCountry, setSelectedCountry] = useState<any | null>(null)
  return (
    <div className="App">
      <header className="App-header">
        <div style={{margin: '0 auto', width: '80%'}}>
          <MapChart
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            setTooltipContent={setTooltipContent}
          />
          <ReactTooltip>{tooltipContent}</ReactTooltip>
        </div>
        <Button
          onClick={() => {
            const randomCountryIndex = Math.floor(Math.random() * geographyJson.features.length)
            setSelectedCountry(geographyJson.features[randomCountryIndex])
          }}
        >Random Country</Button>
      </header>
    </div>
  )
}

export default App
