import React from "react";
import {
  Tabletest,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "react-super-responsive-table";
export class Responsivetable extends React.Component {
  render() {
    return (
      <Tabletest>
        <Thead>
          <Tr>
            <Th>Event</Th>
            <Th>Date</Th>
            <Th>Location</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Tablescon</Td>
            <Td>9 April 2019</Td>
            <Td>East Annex</Td>
          </Tr>
          <Tr>
            <Td>Capstone Data</Td>
            <Td>19 May 2019</Td>
            <Td>205 Gorgas</Td>
          </Tr>
          <Tr>
            <Td>Tuscaloosa D3</Td>
            <Td>29 June 2019</Td>
            <Td>Github</Td>
          </Tr>
        </Tbody>
      </Tabletest>
    );
  }
}

export default Responsivetable;
