const formatMessage = ({ message = "", sender = "" } = {}) => ({
  time: getTime(new Date(Date.now())),
  message,
  sender,
});
