export function selectRepository(repository) {
  return {
    type: '@repository/UPDATE_SELECTED_REPOSITORY',
    payload: { repository },
  };
}
