export function joiToFormErrors(error) {
  return error.details.reduce((errors, detail) => {
    errors[detail.path[0]] = detail.message;
    return errors;
  }, {});
}
