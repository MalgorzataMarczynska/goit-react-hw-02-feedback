import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { Notification } from '../notification/Notification.js';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.stats}>
      {total > 0 ? (
        <>
          <p className={css.text}>
            <b>Good: </b>
            {good}
          </p>
          <p className={css.text}>
            <b>Neutral: </b> {neutral}
          </p>
          <p className={css.text}>
            <b>Bad: </b>
            {bad}
          </p>
          <p className={css.text}>
            <b>Total: </b>
            {total}
          </p>
          <p className={css.text}>
            <b>Positive feedback: </b>
            {positivePercentage}%
          </p>
        </>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
