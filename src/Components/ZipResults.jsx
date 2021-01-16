import React, { Component } from "react";
import PropTypes from 'prop-types';

function ZipResults(props) {  
  return (
    <div className="output">
      {props.searchResults.length > 0 ? 
            props.searchResults.map((output, i) => {
            const {City, State, Lat, Long, EstimatedPopulation, TotalWages } = output
            return (
              <div className="result" key={i}>
                <div className="city-state">
                  <h2>{City}, {State}</h2>
                </div>
                <ul className="search-info">
                  <li><b>State:</b> {State}</li>
                  <li><b>Location:</b> {Lat}, {Long}</li>
                  <li><b>Population (estimated):</b> {EstimatedPopulation}</li>
                  <li><b>Total Wages:</b> {TotalWages}</li>
                </ul>
              </div>
          )})
        :
          <div className="line">
          <p>No Results</p>
          </div>
      }
    </div>
  )
}

ZipResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
}

export default ZipResults



