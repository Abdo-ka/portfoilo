import PropTypes from "prop-types";

function CardItem({ title, description, icon, skills, onHover }) {
  return (
    <div
      className="skill-category"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  onHover: PropTypes.func.isRequired,
};

export default CardItem;
