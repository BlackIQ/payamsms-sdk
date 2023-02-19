// ----------------------------------------------
// complition.function.js
// ----------------------------------------------
// Here is where we add sender to the messages.
// Each message have to have sender item.

const complition = (messages, sender) => {
  const goingMessages = messages;

  goingMessages.forEach((message) => (message["sender"] = sender));

  return goingMessages;
};

export default complition;
