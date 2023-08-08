import React from 'react';
import { Section } from './section/Section.js';
import { FeedbackOptions } from './feedback/FeedbackOptions.js';
import { Statistics } from './statistics/Statistics.js';

export class App extends React.Component {
  state = { good: 0, neutral: 0, bad: 0 };

  updateStats = evt => {
    const key = evt.target.id;
    this.setState(prevState => ({ [key]: Number(prevState[key] + 1) }));
  };

  countTotalFeedback = () => {
    const state = this.state;
    const totalRatingAmount = Object.values(state).reduce(
      (total, value) => (total += value)
    );
    return Number(totalRatingAmount);
  };
  countPositiveFeedbackPercentage = () => {
    const state = this.state;
    const totalAmountRating = this.countTotalFeedback();
    const positiveFeedback = Number(state.good / totalAmountRating) * 100;
    return Math.round(positiveFeedback);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          {Object.keys(this.state).map(key => (
            <FeedbackOptions
              key={key}
              options={key}
              onLeaveFeedback={this.updateStats}
            />
          ))}
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
