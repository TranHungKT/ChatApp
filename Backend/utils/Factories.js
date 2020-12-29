const getTime = (date) => {
  return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
};

const formatMessage = ({
  message = "",
  sender = "",
  userId = "",
  type = "",
} = {}) => ({
  time: getTime(new Date(Date.now())),
  message,
  sender,
  userId,
  type,
});

const formatImage = ({ url = "", sender = "", userId = "" } = {}) => ({
  time: getTime(new Date(Date.now())),
  url,
  sender,
  userId,
});

module.exports = {
  formatMessage,
  formatImage,
};
