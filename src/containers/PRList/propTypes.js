import PropTypes from 'prop-types';

const PRListPropTypes = {
  error: PropTypes.string,
  getPullRequests: PropTypes.func,
  history: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      creator: PropTypes.string,
      repository: PropTypes.string,
    }),
  }),
  pullRequests: PropTypes.array,
};

export default PRListPropTypes;
