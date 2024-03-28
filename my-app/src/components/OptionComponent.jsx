import * as React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
export const OptionComponent = ({ title, data }) => {
  const [infoTab, setInfoTab] = React.useState(undefined);

  const handleClick = (buttonValue) => {
    if (buttonValue === "jobSearch") {
      setInfoTab("jobSearch");
    }
  };

  const outputData = (data) => {
    return data.map(({ name, url, id }) => (
      <li key={`work-list-item-${id}`}>
        <h3>{name}</h3>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </li>
    ));
  };

  return (
    <Accordion>
      <AccordionSummary>{title}</AccordionSummary>
      <AccordionDetails>{outputData(data)}</AccordionDetails>
    </Accordion>
  );
};
