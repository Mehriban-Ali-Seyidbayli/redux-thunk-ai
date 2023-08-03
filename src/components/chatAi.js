import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../redux/constants/actionType";
import { getAnswer, getDataStart } from "../redux/actions/chatActions";
import { useState } from "react";

const ChatAi = () => {

    const [prompt, setPrompt] = useState("");

    const dispatch = useDispatch();
    const state = useSelector((state) => state.chatState);

    const handleSubmit = () => {

        dispatch(getDataStart());

        dispatch(getAnswer(prompt));

        setPrompt("");
    };

    console.log(state);

    const handleChange = (e) => {
        setPrompt(e.target.value)
    }


    console.log(state);

    return (
        <div className="chat">
            <div className="list">
                {
                    state.data.map((message) => (
                        <>
                            <p className="prompt">{message.prompt}</p>
                            <p className="answer">{message.answer}</p>
                        </>
                    ))
                }

                {
                    state.isLoading && "Loading..."
                }

            </div>
            <div className="form">
                <input value={prompt} onChange={handleChange} type="text" />
                <button onClick={handleSubmit}>Send</button>
            </div>
        </div>
    )
}

export default ChatAi;