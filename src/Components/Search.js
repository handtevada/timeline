import React, { useState, useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios';

const getTimelinesList = () => axios.get('https://us-central1-timelines-48943.cloudfunctions.net/getTimelinesList');

const Search = ({ callback }) => {
    const [option, setOption] = useState([]);

    useEffect(() => {
        getTimelinesList().then(res => {
            console.log(res.data)
            let options = [];
            res.data.forEach(item => {
                let option = {
                    key: item.name,
                    text: item.name,
                    value: item.name + '|' + item.dateStart + '|' + (item.dateEnd === "" ? new Date().toISOString().slice(0, 10) : item.dateEnd)
                };
                options.push(option);
            })
            setOption(options)
        })
    }, [])

    return (
        <Dropdown
            placeholder='Search'
            fluid
            multiple
            search
            selection
            options={option}
            onChange={callback}
        />
    )
}

export default Search