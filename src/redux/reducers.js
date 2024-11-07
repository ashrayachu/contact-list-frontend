import { UPDATE_CONTACT, ADD_NOTE } from "./actionTypes";
import initialState from './data';




// Action creators
export const updateContact = (id, newData) => ({
    type: UPDATE_CONTACT,
    payload: { id, newData },
});
export const addNote = (contactId, newNote) => ({
    type: ADD_NOTE,
    payload: {
        id: contactId,               // The ID of the contact
        note: {                      // The new note object to add
            id: Date.now(),          // Unique ID for the note
            content: newNote,     // Note content
        },
    },
});


const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id === action.payload.id
                        ? { ...contact, ...action.payload.newData }
                        : contact
                ),
            };
            case ADD_NOTE:
                return {
                    ...state,
                    contacts: state.contacts.map((contact) =>
                        contact.id === action.payload.id
                            ? {
                                  ...contact,
                                  notes: [...contact.notes, action.payload.note], // Spread to add the new note immutably
                              }
                            : contact
                    ),
                };
        default:
            return state;
    }
};

export default contactsReducer;


