import { Button } from './FeedbackOptions.styled.js';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
      {option}
    </Button>
  ));
};
