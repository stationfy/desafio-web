import PropTypes from 'prop-types';

const HomePropTypes = {
  repositories: PropTypes.array,
  error: PropTypes.string,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  getRepositories: PropTypes.func,
};

export default HomePropTypes;
