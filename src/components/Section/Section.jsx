import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  <section>{children}</section>;
};

Section.propTYpes = {
  children: PropTypes.node,
};
