import { FeedbackBtn, FeedbackContainer } from "./FeedbackOptions.styled"
import PropTypes from 'prop-types';

export const FeedbackOptions = ({chooseFeedback})=> {
    return(
        <FeedbackContainer>
        <FeedbackBtn type="button" name='good' onClick={chooseFeedback}>Good</FeedbackBtn>
        <FeedbackBtn type="button" name='neurtal'onClick={chooseFeedback}>Neurtal</FeedbackBtn>
        <FeedbackBtn type="button" name='bad'onClick={chooseFeedback}>Bad</FeedbackBtn>
    </FeedbackContainer>
    )
}

FeedbackOptions.prototype = {
    chooseFeedback: PropTypes.func
}