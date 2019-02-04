import { handleActions } from 'redux-actions';
import * as actions from './actions';

const reducer = handleActions(
  {
    [actions.setFormEntryAt]: (state, { payload: { text, index } }) => ({
      ...state,
      formEntries: state.formEntries.map((formEntry, i) => {
        if (i === index) {
          return {
            ...formEntry,
            text: text
          };
        }
         return formEntry;
      })
    }),
    [actions.removeFormEntryAt]: (state, { payload: {text, index} }) => ({
      ...state,
      formEntries: state.formEntries.filter((entry, i) => (index !== i)),
    }),
    [actions.addEntryAfter]: (state, { payload: { index } }) => {
      console.log(index, 'INDEX');
      return {
        ...state,
        formEntries: [
          ...state.formEntries.slice(0, index + 1),
          {
            text: '',
            isActive: false,
          },
          ...state.formEntries.slice(index + 1),
        ]
      }
    },
    [actions.setActive]: (state, { payload: { index } }) => ({
      ...state,
      formEntries: state.formEntries.map((formEntry, i) => {
        if (i === index) {
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
    [actions.setFieldAt]: (state, { payload: { value, fieldToChange } }) => ({
      ...state,
      formEntries: state.formEntries.map(formEntry => {
        if (formEntry.isActive) {
          return {
            ...formEntry,
            [fieldToChange]: value,
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
