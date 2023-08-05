import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import TerminalController from './terminal';

const App = () => {
    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput>{"$ Session started at " + new Date().toLocaleString()}</TerminalOutput>
    ]);
    
    const inputHandler = (terminalInput: string) => {
        const data = [
            ...terminalLineData,
            <TerminalOutput>{"$ " + terminalInput}</TerminalOutput>,
            <TerminalOutput>{"$ " + terminalInput + " received"}</TerminalOutput>
        ];
        setTerminalLineData(data);
    }

    return (
        <TerminalController heading='Hey there!' handleInput={inputHandler} outputList={terminalLineData} />
    )
};

export default App;