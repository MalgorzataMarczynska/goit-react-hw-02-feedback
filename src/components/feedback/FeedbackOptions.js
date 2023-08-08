import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <button
    id={options}
    className={css.button}
    type="button"
    onClick={onLeaveFeedback}
  >
    {options}
  </button>
);

FeedbackOptions.propTypes = {
  options: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};
