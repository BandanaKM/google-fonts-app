import { handleActions } from 'redux-actions';
import * as actions from './actions';

const reducer = handleActions(
  {
    [actions.updateClassification]: state => state,
    [actions.updateFontFamily]: state => state,
    [actions.updateFontVariant]: state => state,
    [actions.updateFontSize]: state => state,
    [actions.updateTextColor]: state => state,
    [actions.updateBackgroundColor]: state => state,
    [actions.setActive]: state => state,
  },
  {
    configuration: [
      {
       id: 'Cantora One',
       displayText: 'Cantora One'
      },
      {
       id: "Oswald",
       displayText: "Oswald"
      },
      {id: "Playfair Display",
       displayText: "Playfair Display"
      },
    ],
    formEntries: [
      {
        text: 'Hey Bana, how are you doing?',
        isActive: true,
        classification: "",
        fontVariant: "",
        fontFamily: "",
        fontSize: 20,
        color: "",
        backgroundColor: ""
      },
      {
        text: 'I am doing well, actually.',
        isActive: false,
        classification: "",
        fontVariant: "",
        fontFamily: "",
        fontSize: 20,
        color: "",
        backgroundColor: ""
      },
      {
        text: 'That is great.',
        isActive: false,
        classification: "",
        fontVariant: "",
        fontFamily: "",
        fontSize: 20,
        color: "",
        backgroundColor: ""
      },
    ]
  }
);

export default reducer;
