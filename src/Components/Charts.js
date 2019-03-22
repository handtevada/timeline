import React, { useEffect } from "react";
import Chart from "react-google-charts";
import { Header } from 'semantic-ui-react'

// Reference : https://developers.google.com/chart/interactive/docs/gallery/timeline
const columns = [
    { type: "string", id: "No" },
    { type: "string", id: "Keyword" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" }
];

const Charts = (props) => {

    useEffect(() => {
        console.log('Charts Changed', props.initRows);
    }, [props.initRows])

    return (
        props.initRows.length === 0 ?
            <div className="Chart">
                <Header as='h2'>
                    NOT FOUND
                </Header>
            </div>
            :
            <div className="App">
                <Chart
                    chartType="Timeline"
                    data={[columns, ...props.initRows]}
                    width="100%"
                    height="300px"
                />
            </div>
    );
}

export default Charts;