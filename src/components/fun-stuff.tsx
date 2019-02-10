import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { history } from '../App';
import DomainModel, { generateStuff } from '../stores/domain-model';

@observer
export default class FunStuff extends Component<{ store: DomainModel }> {
    render() {
        return (
            <div className="funstuff">
                <button onClick={this.generateStuff} title="generate 500 boxes">!</button>
                <button onClick={this.previous} title="previous state">&lt;</button>
                <button onClick={this.next} title="next state">&gt;</button>
            </div>
        );
    }

    generateStuff = (e:any) => {
        generateStuff(this.props.store, 500);
    }

    previous = () => {
        history.previousState();
    }

    next = () => {
        history.nextState();
    }
}
