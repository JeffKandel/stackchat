import {createStore} from 'redux'

const initialState = {
  messages: [],
}

/* -----------------    ACTION TYPES     ------------------ */
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';


/* ------------   ACTION CREATORS     ------------------ */

export const gotMessagesFromServer = (messages) => ({
  type: GOT_MESSAGES_FROM_SERVER,
  messages: messages
})

/* ------------       THUNK CREATORS     ------------------ */


/* ------------       REDUCERS     ------------------ */
function reducer(prevState = initialState, action) {
  const newState = Object.assign({}, prevState)
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      newState.messages = action.messages
      break;
  return newState
  }

  return newState;
}

export default createStore(reducer)
