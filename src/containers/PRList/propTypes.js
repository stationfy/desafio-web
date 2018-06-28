import PropTypes from 'prop-types';

const PRListPropTypes = {
  pullRequests: PropTypes.array,
  history: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      creator: PropTypes.string,
      repository: PropTypes.string,
    }),
  }),
  error: PropTypes.string,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  getPullRequests: PropTypes.func,
};

export default PRListPropTypes;
