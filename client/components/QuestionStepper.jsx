import React from 'react'
import {connect} from 'react-redux'
import {Step, Stepper, StepLabel} from 'material-ui/Stepper'
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward'

class QuestionStepper extends React.Component {
  render () {
    return (
      <div className='stepper'style={{width: '100%', maxWidth: 200}}>
        {/* // <div> */}
        <Stepper activeStep={this.props.questionNum} connector={<ArrowForwardIcon />}>
          {this.props.questions.map((question) => {
            return (
              <Step key={question.id}>
                <StepLabel></StepLabel>
              </Step>
            )
          })}
          {/* </div> */}
        </Stepper>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    questionNum: state.quiz.questionNum,
    questions: state.quiz.questions

  }
}

export default connect(mapStateToProps)(QuestionStepper)
