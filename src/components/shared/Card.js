const Card = ({ children, reverse }) => {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
      { children }
    </div>
  );
};

Card.defaultProp = {
  reverse: false,
}
export default Card; 