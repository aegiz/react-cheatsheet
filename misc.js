/* ********************************************* */
// Conditionnally render a property based on condition:
<Child editable={this.props.editable ? this.props.editableOpts : undefined} />;
/* ********************************************* */

/* ********************************************* */

// Proper way to use setState for a nested object's state
state = {
  inputs: {
    mygreatInput: {
      name: "Adrien Rahier",
      height: "190",
    },
  },
};

updateNestedInputs = (key, newInput) => {
  const inputs = { ...this.state.inputs };
  inputs[key] = newInput;
  this.setState({ inputs });
};

// Usage:
this.updateNestedInputs("mygreatInput", {
  name: "John Doe",
  height: "142",
});

/* ********************************************* */

/* ********************************************* */
// Get a nested property in object and avoid undefined errors:

const firstName = person.profile.name.firstName;
// Here, to get firstName, you first have to check that profile and name are defined
// I used to do this:
const firstName =
  person &&
  person.profile &&
  person.profile.name &&
  person.profile.name.firstName;

// ... Turn out you can do this:
const firstName = person.profile?.name?.firstName;
/* ********************************************* */

/* ********************************************* */
// Create an object base on switch properties:

const cardBackground = {
  ...(cardType === "inviteReceived" && {
    cardBackground: "rgba(69, 172, 74, 0.1)",
  }),
  ...(cardType === "inviteSent" && {
    cardBackground: "rgba(116, 116, 116, 0.1)",
  }),
  ...(cardType === "default" && {
    cardBackground: "rgba(255, 255, 255, 1)",
  }),
};

/* ********************************************* */

/* ********************************************* */
// Create an object base on switch properties:

const cardBackground = {
  ...(cardType === "inviteReceived" && {
    cardBackground: "rgba(69, 172, 74, 0.1)",
  }),
  ...(cardType === "inviteSent" && {
    cardBackground: "rgba(116, 116, 116, 0.1)",
  }),
  ...(cardType === "default" && {
    cardBackground: "rgba(255, 255, 255, 1)",
  }),
};

/* ********************************************* */
// Create an object with a key based on a variable

// customKey = "key1" || "key2"
const myObj = { [customKey]: "myValue" };

// Usage:
const customKey = "myKey";
console.log({ [customKey]: "myValue" }); // {myKey: "myValue"}

/* ********************************************* */

/* ********************************************* */
// Check if object is empty

Object.keys(obj).length === 0 && obj.constructor === Object;

/* ********************************************* */
