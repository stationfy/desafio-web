import PropTypes from 'prop-types';

const HomePropTypes = {
  error: PropTypes.string,
  getRepositories: PropTypes.func,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  repositories: PropTypes.array,
};

export default HomePropTypes;
