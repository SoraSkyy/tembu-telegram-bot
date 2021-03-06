import State from '../state';
import { formIDs } from '../../config';

export default class InterestGroupState extends State {
  constructor() {
    super();
    this.nextActions = {
      'IG Creation Form': this.sendCreationForm.bind(this),
      'IG Calendar': this.sendCalendar.bind(this),
      'IG List': this.sendIgList.bind(this),
    };
  }

  makeButtons() {
    const nextCommands = Object.keys(this.nextActions);
    nextCommands.push('Back');
    return nextCommands
      .map(commandString => [commandString]);
  }

  process(msg) {
    const selectedOption = Object.keys(this.nextActions).indexOf(msg.text);
    if (selectedOption === -1) return this.render();
    return (this.nextActions[msg.text])();
  }

  sendCreationForm() {
    return {
      respond: true,
      messages: [
        State.makeButtonMessage('Here is the IG creation form.', this.makeButtons()),
        {
          type: 'document',
          document: formIDs.ig_creation_form,
        },
      ],
    };
  }

  sendCalendar() {
    return {
      respond: true,
      messages: [
        State.makeButtonMessage('Unimplemented.', this.makeButtons()),
      ],
    };
  }

  sendIgList() {
    return {
      respond: true,
      messages: [
        State.makeButtonMessage('Unimplemented.', this.makeButtons()),
      ],
    };
  }
}
