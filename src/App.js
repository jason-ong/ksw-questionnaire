import React, { Component } from 'react';
import finalQuestion from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/logo.svg';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';
import Button from '@material-ui/core/Button';
import { 
  RadioGroup,
  Radio,
  TextField
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// const classes = useStyles();
const LowLinearProgress = withStyles({
  root: {
    height: 20,
    backgroundColor: 'transparent',
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#00ca51',
  },
})(LinearProgress);

const MediumLinearProgress = withStyles({
  root: {
    height: 20,
    backgroundColor: 'transparent',
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

const HighLinearProgress = withStyles({
  root: {
    height: 20,
    backgroundColor: 'transparent',//lighten('#a51100', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#a51100',
  },
})(LinearProgress);
// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intro: false,
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      QA1: null,
      QA1_OTH: '',
      questionObj: {},
      showResult: false,
//       result: {
//   "QA1": {
//     "q_id": "QA1",
//     "question": "Category of Respondent:",
//     "answer": "Vendor"
//   },
//   "QA2": {
//     "q_id": "QA2",
//     "question": "Category of Business Sector:",
//     "answer": "Others"
//   },
//   "QA3": {
//     "q_id": "QA3",
//     "question": "Years of adopting ERP system in your organization:",
//     "answer": "Less than 1 year"
//   },
//   "OF1": {
//     "q_id": "OF1",
//     "question": "Failure to redesign business processes",
//     "answer": "5"
//   },
//   "OF2": {
//     "q_id": "OF2",
//     "question": "Failure to follow an enterprise-wide design which supports data integration",
//     "answer": "3"
//   },
//   "OF3": {
//     "q_id": "OF3",
//     "question": "Insufficient resources",
//     "answer": "3"
//   },
//   "OF4": {
//     "q_id": "OF4",
//     "question": "Extent of change",
//     "answer": "3"
//   },
//   "OF5": {
//     "q_id": "OF5",
//     "question": "Degree  of computerization",
//     "answer": "3"
//   },
//   "SM1": {
//     "q_id": "SM1",
//     "question": "Insufficient training and reskilling",
//     "answer": "3"
//   },
//   "SM2": {
//     "q_id": "SM2",
//     "question": "Insufficient internal expertise",
//     "answer": "3"
//   },
//   "SM3": {
//     "q_id": "SM3",
//     "question": "Lack of business analysts with business and technology knowledge",
//     "answer": "3"
//   },
//   "SM4": {
//     "q_id": "SM4",
//     "question": "Failure to mix internal and external expertise effectively",
//     "answer": "3"
//   },
//   "SM5": {
//     "q_id": "SM5",
//     "question": "Lack of ability to recruit and retain qualified ERP systems developers",
//     "answer": "3"
//   },
//   "MSS1": {
//     "q_id": "MSS1",
//     "question": "Lack of senior management support",
//     "answer": "3"
//   },
//   "MSS2": {
//     "q_id": "MSS2",
//     "question": "Lack of proper management control structure",
//     "answer": "3"
//   },
//   "MSS3": {
//     "q_id": "MSS3",
//     "question": "Ineffective communications",
//     "answer": "3"
//   },
//   "MSS4": {
//     "q_id": "MSS4",
//     "question": "Lack of agreement on project goals",
//     "answer": "3"
//   },
//   "MSS5": {
//     "q_id": "MSS5",
//     "question": "Lack of effective project management methodology",
//     "answer": "3"
//   },
//   "SSD1": {
//     "q_id": "SSD1",
//     "question": "Failure to adhere to standardized specifications which the software supports",
//     "answer": "3"
//   },
//   "SSD2": {
//     "q_id": "SSD2",
//     "question": "Lack of integration between enterprise-wide systems",
//     "answer": "3"
//   },
//   "SSD3": {
//     "q_id": "SSD3",
//     "question": "Unclear/Misunderstand changing requirements",
//     "answer": "3"
//   },
//   "SSD4": {
//     "q_id": "SSD4",
//     "question": "Lack of effective software management methodology",
//     "answer": "3"
//   },
//   "SSD5": {
//     "q_id": "SSD5",
//     "question": "Developing wrong functions and wrong user interface",
//     "answer": "3"
//   },
//   "UIT1": {
//     "q_id": "UIT1",
//     "question": "Insufficient training of end-users",
//     "answer": "3"
//   },
//   "UIT2": {
//     "q_id": "UIT2",
//     "question": "Ineffective communications with users",
//     "answer": "3"
//   },
//   "UIT3": {
//     "q_id": "UIT3",
//     "question": "Lack of full-time commitment of customers to project management and project activities",
//     "answer": "3"
//   },
//   "UIT4": {
//     "q_id": "UIT4",
//     "question": "Lack of sensitivity to user resistance",
//     "answer": "3"
//   },
//   "UIT5": {
//     "q_id": "UIT5",
//     "question": "Fail to get user support",
//     "answer": "3"
//   },
//   "TP1": {
//     "q_id": "TP1",
//     "question": "Inadequate technology infrastructure for supporting project requirement",
//     "answer": "5"
//   },
//   "TP2": {
//     "q_id": "TP2",
//     "question": "Application complexity (technical complexity and links to existing legacy system)",
//     "answer": "5"
//   },
//   "TP3": {
//     "q_id": "TP3",
//     "question": "Incapability of current enterprise technical infrastructure",
//     "answer": "5"
//   },
//   "TP4": {
//     "q_id": "TP4",
//     "question": "Technology newness (need of new hardware and software)",
//     "answer": "5"
//   },
//   "TP5": {
//     "q_id": "TP5",
//     "question": "Strained technical capabilities and failure of technology to meet specifications",
//     "answer": "5"
//   },
//   "VC1": {
//     "q_id": "VC1",
//     "question": "External expertise sources did not provide us prompt services",
//     "answer": "1"
//   },
//   "VC2": {
//     "q_id": "VC2",
//     "question": "External expertise sources are not dependable",
//     "answer": "1"
//   },
//   "VC3": {
//     "q_id": "VC3",
//     "question": "Our external expertise sources did not have up-to-date facilities",
//     "answer": "1"
//   },
//   "VC4": {
//     "q_id": "VC4",
//     "question": "Inadequate technical support by external expertise",
//     "answer": "1"
//   },
//   "VC5": {
//     "q_id": "VC5",
//     "question": "Did not provide quality training and service",
//     "answer": "1"
//   }
// }
};

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = finalQuestion;

    // .map(question =>
    //   this.shuffleArray(question.answers)
    // );

    console.log(finalQuestion);
    this.setState({
      questionObj: shuffledAnswerOptions[0],
      question: shuffledAnswerOptions[0].question,
      answerOptions: shuffledAnswerOptions[0].answers
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    console.log('questionId',this.state.questionId)
    console.log('finalQuestion.length',finalQuestion.length)
    if (this.state.questionId < finalQuestion.length) {
      setTimeout(() => this.setNextQuestion(), 500);
    } else {
      setTimeout(() => this.showResult(), 500);
    }
  }

  setUserAnswer(answer) {
    var qObj = this.state.questionObj;
    delete qObj['answers'];
    qObj['answer'] = answer;

    this.setState((state, props) => ({
      result: {
        ...state.result,
        [qObj.q_id]: qObj
      },
      answer: answer
    }), ()=> {
      console.log('state', this.state);
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      questionObj: finalQuestion[counter],
      question: finalQuestion[counter].question,
      answerOptions: finalQuestion[counter].answers,
      answer: ''
    });
  }

  showResult() {
    this.setState({
      showResult: true
    })
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={finalQuestion.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderIntro() {
    return (<CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <h2 className="question">{'General instructions and information'}</h2>
        <p className="introP"> {
          `Dear Respondents,
          
          This survey is being conducted by Kwang Su Wei, PhD. student at Universiti Putra Malaysia. Please take a few minutes to complete the enclosed questionnaire regarding how you feel about ERP risk factors for assessing the ERP system with others. There are no right or wrong answers, only your opinion matters. The results of the study will improve understanding of the ERP risk factors that contribute to the ERP literature on risk factors in ERP project implementation. Next, a framework will be develop for identify the ERP risks in order to create an useful risks management tool for ERP adoption organization.

          Please do not put your name or any kind of identifying information on the survey. Your identity will be kept confidential and you are responses will remain strictly confidential.

          This project was reviewed and approved by the School of Graduate Studies (SGS), University Putra Malaysia. The SGS can be contacted at (603) 8946-4200/4223/4225 or sgs@putra.upm.edu.my with any questions regarding the rights of research subjects.

          If you have any questions about the survey, please contact me via email: `} 
          <a target="_blank" href='https://mail.google.com/mail/?view=cm&fs=1&to=suwei_kwang@hotmail.com'>suwei_kwang@hotmail.com </a>
          {`and I will do my best to provide necessary clarifications and address your concerns. Thank you for your assistance.`
        }
        </p>
        <div className="introBtnContainer">
          <Button variant="contained" color="primary" onClick={()=> {
            this.setState({
              intro: true
            })
          }}>
            Continue
          </Button>
        </div>
      </div>
    </CSSTransitionGroup>);
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  renderProfile() {
    return (<CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className='question'>
        <h3>{'In this section, we are interested in your background in brief. Please tick your answer and your answers will be kept strictly confidential.'}</h3>
        <FormControl component="respondentfieldset">
          <FormLabel component="respondent">Category of Respondent</FormLabel>
          <RadioGroup aria-label="respondent" name="respondent" value={this.state.QA1} onChange={(e)=> {
            this.setState({
              QA1: e.target.value,
              QA1_OTH: ''
            })
          }}>
            <FormControlLabel value="User" control={<Radio />} label="User" />
            <FormControlLabel value="Consultant" control={<Radio />} label="Consultant" />
            <FormControlLabel value="Vendor" control={<Radio />} label="Vendor" />
            <FormControlLabel value="Maintenance" control={<Radio />} label="Maintenance" />
            <FormControlLabel value="Others" control={<Radio />} label="Others (please specify):" />
            <TextField value={this.state.QA1_OTH} disabled={this.state.QA1 != 'Others'} 
              onChange={(e)=> {
                this.setState({
                  QA1_OTH: e.target.value
                })
              }}
              required/>

          </RadioGroup>
        </FormControl>
        <FormControl component="respondentfieldset">
          <FormLabel component="respondent">Category of Respondent</FormLabel>
          <RadioGroup aria-label="respondent" name="respondent" value={this.state.QA1} onChange={(e)=> {
            this.setState({
              QA1: e.target.value,
              QA1_OTH: ''
            })
          }}>
            <FormControlLabel value="User" control={<Radio />} label="User" />
            <FormControlLabel value="Consultant" control={<Radio />} label="Consultant" />
            <FormControlLabel value="Vendor" control={<Radio />} label="Vendor" />
            <FormControlLabel value="Maintenance" control={<Radio />} label="Maintenance" />
            <FormControlLabel value="Others" control={<Radio />} label="Others (please specify):" />
            <TextField value={this.state.QA1_OTH} disabled={this.state.QA1 != 'Others'} 
              onChange={(e)=> {
                this.setState({
                  QA1_OTH: e.target.value
                })
              }}
              required/>

          </RadioGroup>
        </FormControl>
        <div className="introBtnContainer">
          <Button variant="contained" color="primary" onClick={()=> {
            this.setState({
              intro: true
            })
          }}>
            Continue
          </Button>
        </div>
      </div>
    </CSSTransitionGroup>);
  }
  renderQuestion() {
    return  this.renderQuiz();
  }

  getResult() {
    var {
      result
    } = this.state;
    
    var OFMean = (parseInt(result['OF1'].answer) + parseInt(result['OF2'].answer) + parseInt(result['OF3'].answer) +
                    parseInt(result['OF4'].answer) + parseInt(result['OF5'].answer)) / 5;
    var SMMean = (parseInt(result['SM1'].answer) + parseInt(result['SM2'].answer) + parseInt(result['SM3'].answer) +
                    parseInt(result['SM4'].answer) + parseInt(result['SM5'].answer)) / 5;
    var MSSMean = (parseInt(result['MSS1'].answer) + parseInt(result['MSS2'].answer) + parseInt(result['MSS3'].answer) +
                    parseInt(result['MSS4'].answer) + parseInt(result['MSS5'].answer)) / 5;
    var SSDMean = (parseInt(result['SSD1'].answer) + parseInt(result['SSD2'].answer) + parseInt(result['SSD3'].answer) +
                    parseInt(result['SSD4'].answer) + parseInt(result['SSD5'].answer)) / 5;
    var UITMean = (parseInt(result['UIT1'].answer) + parseInt(result['UIT2'].answer) + parseInt(result['UIT3'].answer) +
                    parseInt(result['UIT4'].answer) + parseInt(result['UIT5'].answer)) / 5;
    var TPMean = (parseInt(result['TP1'].answer) + parseInt(result['TP2'].answer) + parseInt(result['TP3'].answer) +
                    parseInt(result['TP4'].answer) + parseInt(result['TP5'].answer)) / 5;
    var VCMean = (parseInt(result['VC1'].answer) + parseInt(result['VC2'].answer) + parseInt(result['VC3'].answer) +
                    parseInt(result['VC4'].answer) + parseInt(result['VC5'].answer)) / 5;

    console.log({
      OFMean,
      SMMean,
      MSSMean,
      SSDMean,
      UITMean,
      TPMean,
      VCMean,
      highRiskCount: this.getHighRiskCategoryCount([OFMean, SMMean, MSSMean, SSDMean, UITMean, TPMean, VCMean])
    })
    return {
      OFMean,
      SMMean,
      MSSMean,
      SSDMean,
      UITMean,
      TPMean,
      VCMean,
      highRiskCount: this.getHighRiskCategoryCount([OFMean, SMMean, MSSMean, SSDMean, UITMean, TPMean, VCMean])
    }

  }

  getHighRiskCategoryCount(list) {
    var highRiskCount = 0;
    for (var i =0; i < list.length; i++) {
      var mean = list[i];
      if (mean >= 3.67) {
        highRiskCount++;
      }
    }
    return highRiskCount;
  }

  renderProgressBar(mean) {

    if (mean <= 2.33) {
      return (
        <LowLinearProgress
          variant="determinate"
          color="secondary"
          value={mean /5 * 100}
        />
      )
    } else if (mean <= 3.66) {
      return (
        <MediumLinearProgress
          variant="determinate"
          color="secondary"
          value={mean /5 * 100}
        />
      )
    }

    return (
      <HighLinearProgress
        variant="determinate"
        color="secondary"
        value={mean /5 * 100}
      />
    )
  }

  renderResult(classes) {
    var r = this.getResult();
    return (<CSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className='question'>
      <div className='highRiskContainer'>
        <span className={'highRiskSpan'}>{r.highRiskCount + ' / 7'}</span>
      </div>
      <TableContainer component={Paper}>
        <Table  aria-label="caption table">
          <caption className={'caption-result'}>{'My Risk Index\n'+
          'An index color of green is low risk, while red indicates a potential severe risk.'}</caption>
          <TableBody>
              <TableRow key={'OF'}>
                <TableCell scope="row">
                  {'Organizational Fit Risk'}
                </TableCell>
                <TableCell className={'progress-td'} align="left">
                {
                  this.renderProgressBar(r.OFMean )
                }</TableCell>
              </TableRow>

              <TableRow key={'SM'}>
                <TableCell scope="row">
                  {'Skill Mix Risk'}
                </TableCell>
                <TableCell className={'progress-td'} align="left">
                {
                  this.renderProgressBar(r.SMMean )
                }</TableCell>
                </TableRow>

                <TableRow key={'MSS'}>
                  <TableCell scope="row">
                    {'Managerial Risk'}
                  </TableCell>
                  <TableCell className={'progress-td'} align="left">
                  {
                  this.renderProgressBar(r.MSSMean )
                }</TableCell>
                </TableRow>

                <TableRow key={'SSD'}>
                  <TableCell scope="row">
                    {'Software Systems Design Risk'}
                  </TableCell>
                  <TableCell className={'progress-td'} align="left">
                  {
                  this.renderProgressBar(r.SSDMean )
                }</TableCell>
                </TableRow>

                <TableRow key={'UIT'}>
                  <TableCell scope="row">
                    {'User Involvement and Traciking Risk'}
                  </TableCell>
                  <TableCell className={'progress-td'} align="left">
                  {
                  this.renderProgressBar(r.UITMean )
                }</TableCell>
                </TableRow>

                <TableRow key={'TP'}>
                  <TableCell scope="row">
                    {'Technology Planning / Integration Risk'}
                  </TableCell>
                  <TableCell className={'progress-td'} align="left">
                  {
                  this.renderProgressBar(r.TPMean )
                }</TableCell>
                </TableRow>

                <TableRow key={'VC'}>
                  <TableCell scope="row">
                    {'Vendor and Consultant Risk'}
                  </TableCell>
                  <TableCell className={'progress-td'} align="left">
                  {
                  this.renderProgressBar(r.VCMean)
                }</TableCell>
                </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </CSSTransitionGroup>

    );
  }

  render() {
    var {
      intro,
      showResult
    } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Questionnaire</h2>
        </div>
        {
          showResult? this.renderResult() : (intro ? this.renderQuestion() : this.renderIntro())
        }
      </div>
    );
  }
}

export default App;
