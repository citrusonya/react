import React from 'react';

export default class Display extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        return (
            <div className='calculator__display'>
                <input value={ this.props.formula.join('') || this.props.input } disabled/>
            </div>
        )
    }
}