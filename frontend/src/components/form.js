import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitQuestion } from '../actions/question_actions';
const Form = ({submitQuestion}) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [repo , setRepo] = useState('');
    const [live, setLive] = useState('');
    // const [answered, setAnswered] = useState(false);
    return(
        <div>
            <form>
                <input type='text' value={name} placeholder='name' onChange={() => setName()}/>
                <input type='text' value={text} placeholder='question?' onChange={() => setText()}/>
                <input type='text' value={repo} placeholder='Repo?' onChange={() => setRepo()}/>
                <input type='text' value={live} placeholder='Live Link?' onChange={() => setLive()}/>
                <input type='submit' />
            </form>
         
        </div>
    )
}

const mdp = dispatch => ({
    submitQuestion: question => dispatch(submitQuestion(question))
})

export default connect(null, mdp)(Form);