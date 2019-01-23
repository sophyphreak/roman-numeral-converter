import React, { Component } from 'react';
import { Col, Input, Row } from 'reactstrap';
import { rowStyle, pStyle } from './mainStyle';
import convertToRoman from './convertToRoman/convertToRoman';
import isInvalidNumber from './validation/isInvalidNumber';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: '',
      outputRomanNumeral: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const inputNumber = e.target.value;
    if (isInvalidNumber(inputNumber)) return;
    if (inputNumber > 4999) return;
    let outputRomanNumeral;
    if (inputNumber.length === 0) {
      outputRomanNumeral = '';
    } else {
      outputRomanNumeral = convertToRoman(inputNumber);
    }
    this.setState({ inputNumber, outputRomanNumeral });
  }
  render() {
    return (
      <Row style={rowStyle}>
        <Col sm={{ size: 6, offset: 3 }} xs="12">
          <Input
            value={this.state.inputNumber}
            onChange={this.handleChange}
            placeholder="please enter a whole number between 0 and 4999"
          />
          <p style={pStyle}>{this.state.outputRomanNumeral}</p>
        </Col>
      </Row>
    );
  }
}

export default Main;
