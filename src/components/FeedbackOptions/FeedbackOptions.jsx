import React from 'react';
import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedback_options}>
      {Object.keys(options).map(key => (
        <button
          type="button"
          key={key}
          name={key}
          className={css.button}
          onClick={onLeaveFeedback}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func,
};
