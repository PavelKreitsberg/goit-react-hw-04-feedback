import React from 'react';
import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.feedback_options}>
      <button
        type="button"
        key="goodReview"
        name="goodReview"
        className={css.button}
        onClick={onLeaveFeedback}
      >
        good
      </button>
      <button
        type="button"
        key="neutralReview"
        name="neutralReview"
        className={css.button}
        onClick={onLeaveFeedback}
      >
        neutral
      </button>
      <button
        type="button"
        key="badReview"
        name="badReview"
        className={css.button}
        onClick={onLeaveFeedback}
      >
        bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
