// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import {React, useState, useEffect} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ofaDb, { dbName } from '../js/fireStore';
import { addDoc, collection } from 'firebase/firestore';
import PopUp from './PopUp';

export const NoticeForm = () => {

    const [state, handleSubmit, reset] = useForm("xqadezla");
    const [inputs, setInputs] = useState({ email: "", name: "", message: "" });
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpMsg, setPopUpMsg] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect( () => {
        if (state.succeeded) {
            setIsSuccess(true);
            setShowPopUp(true);
            saveToFirestore(inputs);
            setPopUpMsg("Notice received!");
            setInputs({ email: "", name: "", message: "" });
            reset();

        } else if (state.errors && state.errors.length > 0) {
            setPopUpMsg("Notice not sent!");
            setIsSuccess(false);
            setShowPopUp(true);
        }
    }, [state.succeeded, state.errors]);

    return (

        <>
            {showPopUp && (
                <PopUp
                    message={popUpMsg}
                    isSuccess={isSuccess}
                    onClose={() => setShowPopUp(false)}
                />
            )}

            <form onSubmit={handleSubmit} className="footer-form">
                <label htmlFor="email">
                Email
                </label>
                <input
                id="email"
                type="email" 
                name="email"
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                required
                />
                <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                />
                <label htmlFor="name">
                Name
                </label>
                <input
                id="name"
                type="text"
                name="name"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                required
                />
                <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                />
                <label htmlFor="message">
                Message
                </label>
                <textarea
                id="message"
                name="message"
                value={inputs.message}
                onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
                required
                />
                <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                Send now
                </button>
            </form>
        </>
);
}

async function saveToFirestore(inputs) {

    try {
        
        const docRef = await addDoc(collection(ofaDb, dbName), {
            email: inputs.email,
            name: inputs.name,
            message: inputs.message
        });
    } catch (error) {
        console.error("Error adding document: ", error);
    }

}