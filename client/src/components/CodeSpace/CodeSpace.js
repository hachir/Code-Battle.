import React, {Component} from "react";
import sandBoxEval from "../../Util/SandboxEval";
import Editor from "../Editor/Editor";
import CodeTests from "../CodeTests/CodeTests";
import Output from "../Output/Output";
import "./CodeSpace.css";

class CodeSpace extends Component {
  state = {
    currentQuestion: null,
    output: ""
  };

  componentWillMount() {
    this.setState({
      currentQuestion: this.props.questionDetails
    });
  }

  onChange = (newValue) => {
    let newCode = {...this.state.currentQuestion};
    newCode.code = newValue;
    this.setState({
      currentQuestion: newCode
    });
  };

  keySubmit = (event) => {
    if ((event.keyCode === 10 || event.keyCode === 13) && event.ctrlKey) {
      console.log("Submit!");
      this.submitCode();
    }
  };

  submitCode = () => {
    let userCode = this.state.currentQuestion.code;
    let codePromises = [];