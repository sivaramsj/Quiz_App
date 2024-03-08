import React, { useRef, useState } from 'react'
import {data} from '../assets/data'
import './Quiz.css'



const Quiz = () => {
    const [index,setIndex]=useState(0);
    const [question,setQuestion]=useState(data[index]);
    const [lock,setLock]=useState(false);
    const [score,setScore]=useState(0);
    const [quizEnd,setQuizEnd]=useState(false);

    const option1=useRef(null);
    const option2=useRef(null);
    const option3=useRef(null);
    const option4=useRef(null);

    const option_array=[option1,option2,option3,option4]


    const checkAnswer=(e,ans)=>{
        if(lock===false){
            if(question.ans === ans){
                e.target.classList.add('correct');
                let new_score=score+1;
                setScore(new_score);
                // console.log(new_score);
                setLock(true);                
            }
            else{
                e.target.classList.add('wrong');
                setLock(true);
                option_array[question.ans-1].current.classList.add('correct');
            }
        }
    }


    const handleNext=()=>{
        if(lock === true){
            let nextIndex=index+1;
            setIndex(nextIndex);
            setQuestion(data[nextIndex]);
            setLock(false);
            option_array.map((option)=>{
                option.current.classList.remove('correct','wrong');
            });
            // console.log(nextIndex,data.length);
            if(nextIndex >= data.length){
                setQuizEnd(true);
            } 
        }
    }

    const handleReset=()=>{
        setIndex(0);
        setQuestion(data[0]);
        setLock(false);
        setScore(0);
        setQuizEnd(false);
    }

    return (
        
        <div className='container'>
            <h1>{quizEnd?"Score Card":"Quiz App"}</h1>
            <hr />
           { quizEnd ? 
            <div className='score-value'>
                <h1>You Scored {score} out of {data.length}</h1>
                <button onClick={handleReset}>Reset</button>
            </div>
           :<>
            <p>{index+1}. {question.question}</p>
            <ul>
                <li ref={option1} onClick={(e)=>{checkAnswer(e,1)}}>{question.option1}</li>
                <li ref={option2} onClick={(e)=>{checkAnswer(e,2)}}>{question.option2}</li>
                <li ref={option3} onClick={(e)=>{checkAnswer(e,3)}}>{question.option3}</li>
                <li ref={option4} onClick={(e)=>{checkAnswer(e,4)}}>{question.option4}</li>
            </ul>
            <button onClick={handleNext}>Next</button>
            <div className='index'> {index+1} out of {data.length} Questions</div>
           </>}
           
        </div>
    )
}

export default Quiz