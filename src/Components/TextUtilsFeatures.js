import React from 'react';
import { useState } from 'react';


export default function TextUtilsFeatures() {

    const [Text, setText] = useState('');
    const [isVisible, setIsVisible] = useState(false); 

    const convertToUppercase = (e) => {
        e.preventDefault();
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const count = (e) => {
        e.preventDefault();
        setIsVisible(!isVisible);
    }
    const clear = (e) => {
        e.preventDefault();
        setIsVisible(!isVisible);
        setText('');
    }


    let customHeight = {
        height: '40vh', // Adjust height
    };



    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputTextArea" className="form-label">
                        Enter Your Text Here
                    </label>

                    <textarea
                        className="form-control"
                        id="exampleInputTextArea"
                        style={customHeight}
                        placeholder="Type your text here..."
                        value={Text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                </div>


                <button className="btn btn-primary btn-sm m-2" onClick={(e) => { convertToUppercase(e) }}>Uppercase</button>
                <button className="btn btn-primary btn-sm m-2" onClick={(e) => { count(e) }}>Summary</button>
                <button className="btn btn-primary btn-sm m-2" onClick={(e) => { clear(e) }}>Clear</button>
                
            </form>

            {isVisible && (
                <div className='count' >
                    <h2>Your Text Summary</h2>
                    <p>{Text.split(" ").length} Words & {Text.length} Characters</p>
                </div>
            )}
        </div>
    );
}
