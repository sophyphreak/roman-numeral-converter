import React, { Component } from 'react';
import { Button, Col, Input, Row } from 'reactstrap';
import { rowStyle, pStyle } from './mainStyle';
import convertToRoman from './convertToRoman/convertToRoman';
import isInvalidNumber from './validation/isInvalidNumber';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ClippyIcon } from 'react-octicons';

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
        <Col md={{ size: 4, offset: 4 }} sm={{ size: 6, offset: 3 }} xs="12">
          <Input
            value={this.state.inputNumber}
            onChange={this.handleChange}
            placeholder="enter a whole number between 0 and 4999"
          />
          <p style={pStyle}>and then...</p>
          <Input
            value={this.state.outputRomanNumeral}
            placeholder="the roman numeral will appear here"
            disabled="true"
          />
          <br />
          {this.state.outputRomanNumeral && (
            <CopyToClipboard
              className="animated fadeIn"
              text={this.state.outputRomanNumeral}
            >
              <Button color="link">
                <ClippyIcon />
              </Button>
            </CopyToClipboard>
          )}
        </Col>
      </Row>
    );
  }
}

export default Main;
