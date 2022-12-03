import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if(feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])
  
  const handleTextChange = ({ target: { value } }) => {
    if (value === '') {
      setBtnDisabled(true);
      setMsg(null);
    } else if (value.trim().length < 10) {
      setMsg('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMsg(null);
      setBtnDisabled(false);
    }

    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      };

      if(feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback);
      }


      setText('');
      setRating(10);
      setBtnDisabled(true);
    }
  };


  return (
    <Card>
      <form onSubmit={ handleSubmit }>
        <h2>How do you rate your service:</h2>
        <RatingSelect select={ setRating } selected={ rating } />
        <div className="input-group">
          <input onChange={ handleTextChange } value={ text } type="text" placeholder="Write a review" />
          <Button type="submit" version='primary' isDisabled={ btnDisabled }>Send</Button>
        </div>

        { msg && <div className="message">{ msg }</div> }
      </form>
    </Card>
  );
};
export default FeedbackForm;