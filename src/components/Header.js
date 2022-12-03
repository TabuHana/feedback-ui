import PropTypes from 'prop-types';
// impt short hand

const Header = ({ text, bgColor, color }) => {

  const headerStyles = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    // <header style ={{ backgroundColor: blue}}>
    // <header style = {headerStyles}> => if youre using a variable
    // can also be passed in from app, same as with text
    <header style={ headerStyles }>
      <div className="container">
        <h2>{ text }</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  color: '#ff6a95',
};

// This is unnecessary to do
Header.propTypes = {
  text: PropTypes.string,
};


export default Header;