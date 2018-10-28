export default class Message {
  constructor(msg) {
    this.chat_id = msg.chat_id;
    this._type = "text";
    this._content = msg.content
    this._owner = msg.owner
  }

  _getTextMessage() {
    return `${this._content}`;
  }

  getMessage() {
    switch(this._type) {
      case 'text' : return this._getTextMessage();
      default: return 'message not found';
    }
  }

  getOwner() {
    return `${this._owner}`;
  }
}