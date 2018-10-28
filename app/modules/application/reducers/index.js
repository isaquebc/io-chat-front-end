import { 
	SET_MESSAGE,
	SET_ID,
	NEW_CHAT, 
} from "../actions/index";
import Chat from "../models/Chat";
import Message from "../models/Message";

const INITIAL_STATE = {
	chats: {},
	my_id: "",
};

const setMessage = (state, message) => {
	const stateCopy = JSON.parse(JSON.stringify(state));

	stateCopy.chats[message.chat_id].setMessage(new Message(message));

	return stateCopy;
}

const setNewChat = (state, chat) => {
	const stateCopy = JSON.parse(JSON.stringify(state));

	stateCopy.chats[chat.chat_id] = new Chat(chat);

	return stateCopy;
}

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case SET_MESSAGE:  	return setMessage();
		case SET_ID:  			return { ...state, my_id: action.data.id };
		case NEW_CHAT:  		return setNewChat();
		
		default: return state;
	}
}

