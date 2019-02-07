import React, { Component } from 'react';
import Canvas from './components/canvas';
import DomainModel from './stores/domain-model';

const storeInstance = new DomainModel(); // observable(asReference(store));
let storeInstanceId = 0; // forces full re-render so that all components have the correct store

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Canvas store={storeInstance} key={storeInstanceId} />
      </div>
    );
  }
}
