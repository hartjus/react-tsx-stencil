import * as React from 'react';
import './App.css';

class App extends React.Component {

  hw: HTMLHelloWorldElement;

  componentDidMount() {
    this.hw.addEventListener('sayName', this.onSayName);
  }

  componentWillUnmount() {
    this.hw.removeEventListener('sayName', this.onSayName);
  }

  onSayName = (event: CustomEvent) => {
    alert(event.detail);
  }

  render() {
    return (
      <div className="App">

        <hr />
        Notes:
        <ul>
          <li>Had to add the 'ref' property to the components.d.ts for react to get past the compile error.</li>
          <li>Had to manually register the event listener</li>
        </ul>
        <hello-world
          name="This works" 
          show-button={true}
          ref={(el: HTMLHelloWorldElement) => this.hw = el}
        />

        <hr/>
        Notes: <br/>
        <p>Doesn't work; attributes match the components.d.ts</p>
        <hello-world
          name=":(   This does not work" 
          showButton={true}
          onSayName={this.onSayName}
        />

        <hello-world
          name=":(   This also does not work" 
          showButton={true}
          on-say-name={this.onSayName}
        />

      </div>
    );
  }
}

export default App;
