export class HelloWorld {
    constructor() {
        this.onButtonClick = () => {
            this.sayName.emit(this.name);
        };
    }
    render() {
        return (h("div", null,
            h("p", null,
                "Hello, ",
                this.name,
                "!"),
            h("p", null,
                h("button", { type: "button", onClick: this.onButtonClick }, "Say name"))));
    }
    static get is() { return "hello-world"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "name": { "type": String, "attr": "name" }, "showButton": { "type": Boolean, "attr": "show-button" } }; }
    static get events() { return [{ "name": "sayName", "method": "sayName", "bubbles": true, "cancelable": true, "composed": true }]; }
}
