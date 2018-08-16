import Immutable from 'immutable';

const AccountRecord = Immutable.Record({
  id: -1,
  firstName: "Default First Name",
  lastName: "Default Last Name",
  phoneNumber: "Default Phone Number",
  email: "Default Email Address"
});

export default class Account extends AccountRecord {

  constructor(obj) {
    if (obj && !obj.id) {
      throw new Error("INvalid obj")
    }
    super(obj);
  }

  extraMethod() {
    console.log("Yo im the extra method!");
  }
}