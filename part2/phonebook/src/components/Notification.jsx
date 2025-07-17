import "../index.css"


const Notification = ({ type, message }) => {
    
  if (message && type === "error") {
    return (
    <div className="error">{message}</div>
)
  }
  return (
  <div className="added">{message}</div>
)
};

export default Notification;
