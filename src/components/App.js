import React from "react";
import { connect } from "react-redux";
import {
  increment,
  saveAnswer,
  createEssay,
  clearState,
} from "../madlibs";
import { COPY } from "../constants";

require("./App.scss");

const App = ({
  state,
  increment,
  saveAnswer,
  createEssay,
  clearState,
}) => {
  const handleInputChange = (
    question,
    v
  ) => {
    saveAnswer(question, v);
  };

  const handleUpdate = (
    question,
    key
  ) => {
    if (key == "Enter") {
      createEssay(
        question,
        state.fieldAnswers[question]
      );
      increment();
    }
  };
  return (
    <div>
      {state.counter == 8 ? (
        <div className="edit-page-container">
          <div className="edit-text-box">
            <h1>Your essay text</h1>
            <div className="edit-text">
              {state.essayText}
            </div>
            <button
              onClick={clearState}
            >
              Start Over
            </button>
          </div>
        </div>
      ) : (
        <div className="main-page-container">
          <div className="match-area">
            {/* {Counter (to make sure redux
            works): {counter}
            <br />
            <br />
            <button onClick={increment}>
              Increment
            </button> */}
            <div className="match-text">
              <h2>About Me</h2>
              {state.fieldOrder.map(
                (question) => (
                  <div className="question-input">
                    <h4>
                      {COPY[question]}
                    </h4>
                    <input
                      type="text"
                      onChange={(e) => {
                        handleInputChange(
                          question,
                          e.target.value
                        );
                      }}
                      onKeyDown={(e) =>
                        handleUpdate(
                          question,
                          e.key
                        )
                      }
                    />
                  </div>
                )
              )}
            </div>
          </div>
          <div className="essay-area">
            <div className="essay-text">
              <h2>Your essay text</h2>
              <div className="essay-box">
                {state.essayText}
              </div>
              {state.counter !=
              7 ? null : (
                <button
                  onClick={increment}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    state: state,
  };
}

const mapDispatchToProps = {
  increment,
  saveAnswer,
  createEssay,
  clearState,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
