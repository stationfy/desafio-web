import PropTypes from 'prop-types';

const CardTypes = {
  body: PropTypes.string,
  createAt: PropTypes.string,
  children: PropTypes.object,
  forks: PropTypes.number,
  isRepo: PropTypes.bool,
  stars: PropTypes.number,
  title: PropTypes.string,
  urlLink: PropTypes.string,
  userAvatar: PropTypes.string,
  username: PropTypes.string,
};

export default CardTypes;
