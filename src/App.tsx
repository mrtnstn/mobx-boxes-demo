import React, { Component } from 'react';
import Canvas from './components/canvas';
import DomainModel from './stores/domain-model';
import Box from './stores/box';
import Arrow from './stores/arrow';
import History from './stores/time';
import DevTools from 'mobx-react-devtools';

const storeInstance = new DomainModel();
let storeInstanceId = 0; // forces full re-render so that all components have the correct store

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Canvas store={storeInstance} key={storeInstanceId} />
        <DevTools />
      </div>
    );
  }
}

/*
 * Some initial state
 */
storeInstance.boxes.push(
  new Box('Rotterdam', 100, 100),
  new Box('Vienna', 650, 300)
);

storeInstance.arrows.push(
  new Arrow(storeInstance.boxes[0], storeInstance.boxes[1])
);

/*
 * Switch on state logging for time travelling
 */
export const history = new History(storeInstance);
history.startLogging();
