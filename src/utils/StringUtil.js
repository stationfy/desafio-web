/**
 * Returns 'No description provided.' if description is null
 * or the first 250 characters with '...'
 * @param {String} description
 */
export function getFirst250CharsDescription(description) {
  return description
    ? `${String(description).substr(0, 250)}...`
    : 'No description provided.';
}

/**
 * Returns the first 100 characters if title have more than that
 * or the original title
 * @param {String} title
 */
export function getFirst100CharsTitle(title) {
  return String(title).length > 100
    ? `${String(title).substr(0, 100)}...`
    : title;
}
