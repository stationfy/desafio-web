export function formattedDescription(description) {
  return description
    ? `${String(description).substr(0, 250)}...`
    : 'No description provided.';
}

export function formattedTitle(title) {
  return String(title).length > 100
    ? `${String(title).substr(0, 100)}...`
    : title;
}
