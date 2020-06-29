import { FIELD_NAMES } from "./constants";
import { getTextTemplates } from "./helpers";

// Action types
// ----------------------------------------------------------------------------

export const INCREMENT_COUNTER =
  "MADLIBS.INCREMENT_COUNTER";
export const SAVE_ANSWER =
  "MADLIBS.SAVE_ANSWER";
export const CREATE_ESSAY =
  "MADLIBS.CREATE_ESSAY";
export const CLEAR_STATE =
  "MADLIBS.CLEAR_STATE";

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar,
  ],

  fieldAnswers: {},
  essayText: "",

  counter: 1,
};

// Reducer
// ----------------------------------------------------------------------------

export function reducer(
  state = INITIAL_STATE,
  action
) {
  console.log(action.type);
  switch (action.type) {
    case CLEAR_STATE: {
      console.log(INITIAL_STATE);
      return {
        ...state,
        fieldAnswers: {},
        essayText: "",
        counter: 1,
      };
    }

    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case SAVE_ANSWER: {
      const name =
        action.payload.fieldName;
      const answer =
        action.payload.fieldAnswer;
      return {
        ...state,
        fieldAnswers: {
          ...state.fieldAnswers,
          [name]: answer,
        },
      };
    }

    case CREATE_ESSAY: {
      const name =
        action.payload.fieldName;
      const answer =
        action.payload.fieldAnswer;
      const options = getTextTemplates(
        name,
        answer
      );
      const sentence =
        options[
          Math.floor(
            Math.random() *
              options.length
          )
        ];
      return {
        ...state,
        essayText:
          state.essayText + sentence,
      };
    }
    case CLEAR_STATE: {
      console.log(action.type);
      return {
        ...state,
        INITIAL_STATE,
      };
    }
    default:
      return state;
  }
}

// Action creators
// ----------------------------------------------------------------------------

// export function submitField({
//   id,
//   answer,
// }) {
//   return {
//     type: SUBMIT_FIELD,
//     payload: { fieldName: id, answer },
//   };
// }

export function increment() {
  return { type: INCREMENT_COUNTER };
}

export function saveAnswer(
  name,
  fieldAnswer
) {
  return {
    type: SAVE_ANSWER,
    payload: {
      fieldName: name,
      fieldAnswer,
    },
  };
}

export function createEssay(
  name,
  fieldAnswer
) {
  return {
    type: CREATE_ESSAY,
    payload: {
      fieldName: name,
      fieldAnswer,
    },
  };
}

export function clearState() {
  return { type: CLEAR_STATE };
}
