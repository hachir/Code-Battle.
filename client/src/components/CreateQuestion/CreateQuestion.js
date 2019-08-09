import React, {Component} from "react";
import Wrapper from "../../hoc/Wrapper/Wrapper";

class CreateQuestion extends Component {
  state = {
    questionText: "",
    code: "",
    tests: [""]
  };


  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const {name, value} = event.target;
    // Code for input during the demo
    if(name === "questionText" && value === "DEMO") {
      this.setState({
        questionText: "Create a function called reverse() that takes a string as an input and returns a reversed string.",
        code: "reverse(str)",
        tests: ["reverse('bop bop') === 'pob pob';", "reverse('Code Battle rules!') === '!selur elttaB edoC';","reverse('tacocat') === 'tacocat';"]
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  handleTestChange = (event, index) => {
    let updatedTests = [...this.state.tests];
    updatedTests[index] = event.target.value;
    this.setState({tests: updatedTests});
  };

  createCustomGame = () => {
    if (this.state.questionText && this.state.code) {
      let objectTests = [...this.state.tests];
      let mappedTests = objectTests.map(test => {
        return {
          testCode: test
        };
      });
      let customGame = {
        questionText: this.state.questionText,
        code: `function ${this.state.code} {\n\n}`,
        tests: mappedTests
      };
      this.props.createGame(customGame);
    }
  };

  addTest = () => {
    let updatedTests = this.state.tests.concat("");
    this.setState({tests: updatedTests});
  };

 
    );
  }
}

export default CreateQuestion;