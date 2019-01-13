import { createAction } from 'redux-actions';

export const setFormEntryAt = createAction('SET_FORM_ENTRY_AT', (text, index) => {});
export const removeFormEntryAt = createAction('REMOVE_FORM_ENTRY_AT');
export const addEntryAfter = createAction('ADD_ENTRY_AFTER');
export const setActive = createAction('SET_ACTIVE');
export const setFieldAt = createAction('SET_FIELD_AT', (value, fieldToChange) => {});
