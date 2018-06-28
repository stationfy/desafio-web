import PropTypes from 'prop-types';

const CardRepositoryPropTypes = {
  userAvatar: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  urlPr: PropTypes.string,
  forks: PropTypes.number,
  stars: PropTypes.number,
};

export default CardRepositoryPropTypes;
