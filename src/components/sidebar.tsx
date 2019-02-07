import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DomainModel from '../stores/domain-model';

@observer
export default class Sidebar extends Component<{ store: DomainModel }> {
    render() {
        const { selection } = this.props.store;
        return (
            selection ?
                <div className="sidebar sidebar-open">
                    <input onChange={this.onChange} value={selection.name} />
                </div>
                : <div className="sidebar" />
        );
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.store.selection) {
            this.props.store.selection.name = e.target.value;
        }
    }
}
