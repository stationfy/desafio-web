export function selectRepository(data) {
  return {
    type: '@repository/UPDATE_SELECTED_REPOSITORY',
    payload: { data },
  };
}
