import { handleActions } from 'redux-actions';
import * as actions from './actions';

const reducer = handleActions(
  {
    [actions.setFormEntryAt]: (state, payload) => ({
      ...state,
      formEntries: state.formEntries.map((formEntry, index) => {
        if (index === payload.indexToChange) {
          return {
            ...formEntry,
            text: payload.text
          };
        }
         return formEntry;
      })
    }),
    [actions.removeFormEntryAt]: (state, payload) => ({
      ...state,
      formEntries: state.formEntries.filter((entry, index) => (payload !== index)),
    }),
    [actions.addEntryAfter]: (state, payload) => ({
      ...state,
      formEntries: [
        ...state.formEntries.slice(0, payload + 1),
        {
          text: '',
          isActive: false,
        },
        ...state.formEntries.slice(payload + 1),
      ]
    }),
    [actions.setActive]: (state, payload) => ({
      ...state,
      formEntries: state.formEntries.map((formEntry, index) => {
        if (index === payload) {
          return {
            ...formEntry,
            isActive: true,
          }
        }
        return {
          ...formEntry,
          isActive: false,
        }
      })
    }),
    [actions.setFieldAt]: (state, payload) => ({
      ...state,
      formEntries: state.formEntries.map(formEntry => {
        if (formEntry.isActive) {
          return {
            ...formEntry,
            [payload.fieldToChange]: payload.value,
          }
        }
        return formEntry;
      })
    })
  },
  {
    fontFamilyData: [
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
    fontVariantData: [
      {id: "regular",
       displayText: "regular"
      },
      {id: "bold",
       displayText: "bold"
      },
      {id: "italic",
       displayText: "italic"
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
