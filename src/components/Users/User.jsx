
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
  const userstyles = {
    border: '2px solid gray',
    padding: '10px',
    borderRadius: '20px',
    margin: '10px'
  }
  const {id, name, email, phone} = user;
  return (
    <div style={userstyles}>
      <h2>{id}-{name}</h2>
      <p>Email: <strong>{email}</strong></p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>show Details</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;