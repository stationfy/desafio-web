import PropTypes from 'prop-types';

const CardTypes = {
  userAvatar: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  urlLink: PropTypes.string,
  forks: PropTypes.number,
  stars: PropTypes.number,
  isRepo: PropTypes.bool,
  children: PropTypes.object,
  createAt: PropTypes.string,
};

export default CardTypes;
