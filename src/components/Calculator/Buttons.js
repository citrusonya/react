import React from 'react';

export default class Buttons extends React.Component {
  render() {
    return (
      <div className="calculator__buttons">
        <button onClick={ this.props.onOperator }>+</button>
        <button onClick={ this.props.onOperator }>-</button>
        <button onClick={ this.props.onOperator }>*</button>
        <button onClick={ this.props.onOperator }>/</button>
        <button onClick={ this.props.onNumber }>7</button>
        <button onClick={ this.props.onNumber }>8</button>
        <button onClick={ this.props.onNumber }>9</button>
        <button onClick={ this.props.onNumber }>4</button>
        <button onClick={ this.props.onNumber }>5</button>
        <button onClick={ this.props.onNumber }>6</button>
        <button onClick={ this.props.onNumber }>1</button>
        <button onClick={ this.props.onEqual }>=</button>
        <button onClick={ this.props.onNumber }>2</button>
        <button onClick={ this.props.onNumber }>3</button>
        <button onClick={ this.props.onNumber }>0</button>
        <button onClick={ this.props.onDecimal }>.</button>
        <button onClick={ this.props.onClear }>C</button>
      </div>
    )
  }
}