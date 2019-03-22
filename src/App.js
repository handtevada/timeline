import React, { useState } from 'react';
import { Container, Icon, Header } from 'semantic-ui-react'
import Charts from './Components/Charts'
import Search from './Components/Search'

import './App.css';
import 'semantic-ui-css/semantic.min.css'

const App = () => {
    return (
        <Container fluid className="App">
            <TimelinesHeaders></TimelinesHeaders>
            <TimelinesContent></TimelinesContent>
            <TimelinesFooter></TimelinesFooter>
        </Container>
    );
}

const TimelinesHeaders = () => {
    return (
        <div className="Header">
            <Header as='h1'>
                <div>
                    <Icon loading name='time' />World Timelines
                </div>
            </Header>
        </div>
    )
}

const TimelinesContent = () => {
    let rowsInit = [];
    const [rows, setRows] = useState(rowsInit);

    const dropdownCallback = (e, values) => {
        let _rows = []
        let _no = 1
        values.value.forEach(element => {
            let some = [];
            let elArr = element.split('|');

            some.push(`${_no}`)
            some.push(elArr[0])
            some.push(new Date(elArr[1]))
            some.push(new Date(elArr[2]))

            _rows.push(some)
            _no++
        });

        setRows(_rows);
    }
    return (
        <div>
            <Container text>
                <Search callback={dropdownCallback} ></Search>
            </Container>
            <div className="Content">
                <Charts initRows={rows} ></Charts>
            </div>
        </div >
    )
}

const TimelinesFooter = () => {
    return (
        <div>
            <Header size='tiny'>Made by Keerati © 2019</Header>
        </div>
    )
}

export default App;
