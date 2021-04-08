import React from 'react';
import './Calculator.css'
import Display from './Display'
import Buttons from './Buttons'
import * as Calc from './calculatorCPU';

export default class Calculator extends React.Component {
	constructor(props) {
	  	super(props);
  
	  	this.state = {
			formula: [],
			output: '0',
			afterCalculation: false
	  	}
  
		this.onNumber = this.onNumber.bind(this);
		this.onOperator = this.onOperator.bind(this);
		this.onDecimal = this.onDecimal.bind(this);
		this.onEqual = this.onEqual.bind(this);
		this.onClear = this.onClear.bind(this);
	}
  
	onNumber({ target }) {
		const change = target.innerText;
		const output = this.state.output;
  
		if (this.state.afterCalculation) {
			this.setState({
				output: change,
				afterCalculation: false
			});
		} else if (output === '0') {
			this.setState({
				output: change
			});
		} else if (Calc.isOperator(output)) {
			this.setState({
				output: change,
				formula: this.state.formula.concat(output)
			});
		} else {
				this.setState({
				output: output.concat(change)
			});
		}
	}

	onOperator({ target }) {
		const change = target.innerText;
		const output = this.state.output;
	
		if (Calc.isOperator(output)) {
			this.setState({
				formula: this.state.formula.concat(this.state.output),
				output: change,
				afterCalculation: false
			});
		} else {
			this.setState({
				formula: this.state.formula.concat(this.state.output),
				output: change,
				afterCalculation: false
			});
		}
	}
  
	onDecimal({ target }) {
		const change = target.innerText;
		const output = this.state.output;
	
		if (this.state.afterCalculation) {
			this.setState({
				output: `0${ change }`,
				afterCalculation: false
			});
		} else if (Calc.isOperator(output)) {
			this.setState({
				output: `0${ change }`,
				formula: this.state.formula.concat(output)
			});
		} else if (!output.includes(change)) {
			this.setState({
				output: output.concat(change),
			});
		}
	}

	onEqual() {
		const change = this.state.formula.concat(this.state.output);
		const result = Calc.calculation(change);
	
		if (!Number.isNaN(result)) {
			this.setState({
				output: result + '',
				formula: [],
				afterCalculation: true
			});
		}
	}
  
	onClear() {
		this.setState({
			formula: [],
			output: '0',
			afterCalculation: false
		});
	}
  
	render() {
	  	return (
			<div>
				<div className="calculator">
					<Display
						formula = { this.state.formula.concat(this.state.output) }
						output = { this.state.output }
					/>
		
					<Buttons
						onNumber = { this.onNumber }
						onOperator = { this.onOperator }
						onDecimal = { this.onDecimal }
						onEqual = { this.onEqual }
						onClear = { this.onClear }
					/>
				</div>
			</div>
		)
	}
}