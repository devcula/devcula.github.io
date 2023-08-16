import React, { useState } from 'react';
import { TerminalOutput } from 'react-terminal-ui';
import TerminalController from './terminal';

const App = () => {
    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput key="1">{'$ Session started at ' + new Date().toLocaleString()}</TerminalOutput>,
    ]);

    const inputHandler = (terminalInput: string) => {
        const data = [
            ...terminalLineData,
            <TerminalOutput key="2">{'$ ' + terminalInput}</TerminalOutput>,
            <TerminalOutput key="3">{'$ ' + terminalInput + ' received'}</TerminalOutput>,
        ];
        setTerminalLineData(data);
    };

    return <TerminalController heading="Hey there!" handleInput={inputHandler} outputList={terminalLineData} />;
};

export default App;
