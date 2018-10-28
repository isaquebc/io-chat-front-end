export default class Chat {
  constructor(chat) {
    this.chat_id = chat.id;
    this._messages = [];
  }

  _setMessage(message) {
    this._messages.push(message);
  }
  
  getMessages() {
    return this._messages.map(m => (
      { 
        msg: m.getMessage(),
        owner_name: m.getOwner()
      }
    ));
  }
}