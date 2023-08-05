import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

const TerminalController = (props = {}) => {
    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput>Type help for getting help</TerminalOutput>
    ]);
    const handleInput = (terminalInput: string) => {
        const data = [
            ...terminalLineData, 
            <TerminalOutput>{"$ " + terminalInput}</TerminalOutput>,
            <TerminalOutput>{"$ " + terminalInput + " received"}</TerminalOutput>
        ];
        setTerminalLineData(data);
    }
    return (
        <div className="container">
            <Terminal 
                name='Welcome to my Terminal' 
                colorMode={ColorMode.Dark} 
                onInput={handleInput}
            >
                {terminalLineData}
            </Terminal>
        </div>
    )
};

export default TerminalController;