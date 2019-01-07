import { createAction } from 'redux-actions';

export const updateClassification = createAction('UPDATE_CLASSIFICATION');
export const updateFontFamily= createAction('UPDATE_FONT_FAMILY');
export const updateFontVariant = createAction('UPDATE_VARIANT');
export const updateFontSize = createAction('UPDATE_FONT_SIZE');
export const updateTextColor = createAction('UPDATE_TEXT_COLOR');
export const updateBackgroundColor = createAction('UPDATE_BACKGROUND_COLOR');
export const setActive = createAction('SET_ACTIVE');
