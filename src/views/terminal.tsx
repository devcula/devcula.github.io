import React from 'react';
import Terminal, { ColorMode } from 'react-terminal-ui';
import { TerminalProps } from '../interfaces/terminal';

const TerminalController = (props: TerminalProps) => {
    return (
        <div className="container">
            <Terminal name={props.heading} colorMode={ColorMode.Dark} onInput={props.handleInput}>
                {props.outputList}
            </Terminal>
        </div>
    );
};

export default TerminalController;
