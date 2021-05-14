import React from 'react';

export default class Display extends React.Component {
    render() {
        return (
            <div className='calculator__display'>
                <input value={ this.props.formula.join('') || this.props.input } disabled/>
            </div>
        )
    }
}