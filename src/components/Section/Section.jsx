import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import { Statistics } from "components/Statistics/Statistics"
import { Component } from "react"
import { Container } from "./Section.styled"

export class Section extends Component{
state = {
    good: 0,
    neurtal: 0,
    bad: 0,
}
chooseFeedback=({target})=>{
    const feedback = target.name
    this.setState((prevState) => {
        if(feedback === 'good'){
            return {
                [feedback]: prevState.good +1,
            }    
        }
        if(feedback === 'neurtal'){
            return {
                [feedback]: prevState.neurtal +1,
            }    
        }
        if(feedback === 'bad'){
            return {
                [feedback]: prevState.bad +1,
            }    
        }

    })

}

render(){
    return(
        <Container>
        <h2>{this.props.title}</h2>
        <FeedbackOptions chooseFeedback={this.chooseFeedback}/>
        <Statistics 
        good={this.state.good}
        neurtal={this.state.neurtal}
        bad={this.state.bad}
        />
        </Container>
        )
}
}

