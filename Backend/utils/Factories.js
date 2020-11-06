const formatMessage = ({ message = "", userName = "", userId = "" } = {}) => ({
  time: getTime(new Date(Date.now())),
  message,
  userName,
  userId,
});

const getTime = (date) => {
  return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
};

module.exports = {
  formatMessage,
};
