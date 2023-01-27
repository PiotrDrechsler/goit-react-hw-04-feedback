import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.feedback__container}> 
    {options.map(option => (
    <button
      key={option}
      type="button"
      name={option}
      onClick={onLeaveFeedback}
      className={s.feedback__btn}
    >
        {option}
    </button>
  ))}
  </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}