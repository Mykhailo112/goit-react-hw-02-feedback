import { nanoid } from 'nanoid';
import { Button } from './FeedbackOptions.styled.js';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Button
      key={nanoid()}
      type="button"
      name={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </Button>
  ));
};
