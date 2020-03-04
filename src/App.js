import React, { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";
import inCounter, { deCounter, resetCounter } from "./redux/action";
import Button from "@material-ui/core/Button";

export function App(props) {
  const { inCounter, deCounter, resetCounter, state } = props;
  return (
    <div className="App">
      <h1>{state}</h1>
      <Button
        variant="contained"
        size="large"
        onClick={resetCounter}
        color="primary"
      >
        Reset
      </Button>
      <br />
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={deCounter}
      >
        -
      </Button>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={inCounter}
      >
        +
      </Button>
      {(state === 20 || state === -20) && (
        <h4>Congratulations! you have learnt the basic flow of Redux</h4>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inCounter: () => dispatch(inCounter()),
    deCounter: () => dispatch(deCounter()),
    resetCounter: () => dispatch(resetCounter())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
