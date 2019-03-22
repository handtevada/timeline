import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";
import moment from 'moment';

const getTimelinesList = () =>
    axios.get(
        "https://us-central1-timelines-48943.cloudfunctions.net/getTimelinesList"
    );

const Search = ({ callback }) => {
    const [option, setOption] = useState([]);

    useEffect(() => {
        getTimelinesList().then(res => {
            let options = [];
            res.data.forEach(item => {
                let _dateEnd = item.dateEnd === "" ? new Date().toISOString().slice(0, 10) : item.dateEnd
                let _dateEndDesc = item.dateEnd === "" ? "Present" : moment(item.dateEnd).format('YYYY MMM DD')
                let option = {
                    key: item.name,
                    text: item.name,
                    value: `${item.name}|${item.dateStart}|${_dateEnd}`,
                    description: `${moment(item.dateStart).format('YYYY MMM DD')} - ${_dateEndDesc}`
                };
                options.push(option);
            });
            setOption(options);
        });
    }, []);

    return (
        <Dropdown
            placeholder="Search"
            fluid
            multiple
            search
            selection
            options={option}
            onChange={callback}
        />
    );
};

export default Search;
