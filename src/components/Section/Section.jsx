import PropTypes from 'prop-types';
import { TitileSection } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <section>
      <TitileSection>{title}</TitileSection>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
