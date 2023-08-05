import { ReactElement } from 'react';

export interface TerminalProps {
    handleInput: (input: string) => void;
    outputList: Array<ReactElement>;
    heading: string;
}