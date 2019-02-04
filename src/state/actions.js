import { createAction } from 'redux-actions';

export const setFormEntryAt = createAction('SET_FORM_ENTRY_AT', (text, index) => ({text, index}));
export const removeFormEntryAt = createAction('REMOVE_FORM_ENTRY_AT', index => ({index}));
export const addEntryAfter = createAction('ADD_ENTRY_AFTER', index => ({index}));
export const setActive = createAction('SET_ACTIVE', index => ({index}));
export const setFieldAt = createAction('SET_FIELD_AT', (value, fieldToChange) => ({value, fieldToChange}));
