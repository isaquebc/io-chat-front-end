export const SET_MESSAGE = "SET_MESSAGE";
export const SET_ID = "SET_ID";
export const NEW_CHAT = "NEW_CHAT";

export const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    data: message
  };
}

export const setId = (id) => {
  return {
    type: SET_ID,
    data: {id}
  };
}

export const initNewChat = (chat) => {
  return {
    type: NEW_CHAT,
    data: { chat}
  };
}