/* -----------------    ACTION TYPES     ------------------ */
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';


/* ------------   ACTION CREATORS     ------------------ */

export const gotMessagesFromServer = (messages) => ({
  type: GOT_MESSAGES_FROM_SERVER,
  messages: messages
})

/* ------------       THUNK CREATORS     ------------------ */


/* ------------       REDUCERS     ------------------ */
