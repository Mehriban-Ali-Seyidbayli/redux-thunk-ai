import axios from "axios";
import { ActionTypes } from "../constants/actionType";

export const getDataStart = () => ({
    type: ActionTypes.GET_DATA_START,
    payload: true,

});

export const getAnswer = (prompt) => async (dispatch) => {

    const options = {
        method: 'POST',
        url: 'https://open-ai21.p.rapidapi.com/conversationllama',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '370cae1365msh6cd6ad328d93bdcp193545jsn35ebee6c9df4',
            'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
        },
        data: {
            messages: [
                {
                    role: 'user',
                    content: `${prompt}`
                }
            ],
            web_access: false
        }
    };


    // const options = {
    //     method: 'POST',
    //     url: 'https://chatgpt-openai.p.rapidapi.com/chat-completion',
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-RapidAPI-Key': '370cae1365msh6cd6ad328d93bdcp193545jsn35ebee6c9df4',
    //         'X-RapidAPI-Host': 'chatgpt-openai.p.rapidapi.com'
    //     },
    //     data: {
    //         messages: [
    //             {
    //                 role: 'user',
    //                 content: `${prompt}`
    //             },

    //         ],
    //     }
    // };

    const res = await axios.request(options);

    dispatch({
        type: ActionTypes.GET_ANSWER,
        payload: { prompt, answer: res.data.LLAMA }
    })
}