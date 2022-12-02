import React from "react";
import ListviewEntry from './ListviewEntry.jsx';

export default function Listview({ data }) {
  return (
    <>
      {data.results.map((entry, index) => <ListviewEntry key={index} entry={entry}/>)}
    </>
  )
}