import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export function App() {
  const [goodReview, setGoodReview] = useState(0);
  const [neutralReview, setNeutralReview] = useState(0);
  const [badReview, setBadReview] = useState(0);

  const increaseReviewsNumber = event => {
    switch (event.target.name) {
      case 'goodReview':
        setGoodReview(prevState => prevState + 1);
        break;
      case 'neutralReview':
        setNeutralReview(prevState => prevState + 1);
        break;
      case 'badReview':
        setBadReview(prevState => prevState + 1);
        break;
      default:
        console.log('unexpected event');
    }
  };

  const countTotalFeedback = () => goodReview + neutralReview + badReview;

  const countPositiveFeedbackPercentage = () => {
    if (goodReview === 0) {
      return 0;
    }
    return Math.round((goodReview / countTotalFeedback()) * 100);
  };

  return (
    <div
      style={{
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={increaseReviewsNumber} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={goodReview}
            neutral={neutralReview}
            bad={badReview}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
