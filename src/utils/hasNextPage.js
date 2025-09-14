export function hasNextPage(totalItems, currentPage, limit) {
  if (!totalItems || !limit) return false;
  const totalPages = Math.ceil(totalItems / limit);
  return currentPage < totalPages;
}
