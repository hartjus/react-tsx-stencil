import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class HelloWorld {
    name: string;
    showButton: boolean;
    sayName: EventEmitter;
    onButtonClick: () => void;
    render(): JSX.Element;
}
