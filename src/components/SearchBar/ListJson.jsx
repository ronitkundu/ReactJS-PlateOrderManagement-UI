import React from 'react';
import '../css/SearchBarResult.css'
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import ReactJson from 'react-json-view'


function ListJson(searchResult) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore  />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        minWidth: 10,
                    }}
                >
                    <Typography>Json Data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ReactJson src={searchResult} />
                </AccordionDetails>
            </Accordion>
            <br />
            <br />
            <br />
        </div>
    )
}

export default ListJson;
