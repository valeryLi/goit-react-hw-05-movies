export const actorsMapper = array => {
  return array.map(({ id, name, profile_path, character }) => ({
    id,
    name,
    profile_path,
    character,
  }));
};
