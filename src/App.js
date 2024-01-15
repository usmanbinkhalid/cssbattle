import Editor from "@monaco-editor/react";
import "./App.css";
import { useState } from "react";
import {default_code_value} from "./Constants"

function App() {
    const [number_of_chars, setCharacterCount] = useState(
        default_code_value.length
    );
    const [code_text, set_code_text] = useState(default_code_value);
    function handleChange(e) {
        set_code_text(e);
        setCharacterCount(e.length);
    }
    return (
        <div className="source">
        <header><h1>CSS Battle</h1></header>
        <div className="container">
            <div className="editorwindow__parent">
                <div className="editorwindow__header">
                    {number_of_chars} characters
                </div>
                <div className="editor__playground">
                    <Editor
                        className="editor__component"
                        defaultLanguage="html"
                        value={code_text}
                        theme="vs-dark"
                        width="100%"
                        height="100%"
                        onChange={handleChange}
                                               
                    />
                </div>
                <div className="editor__actions">
                    <button>SUBMIT</button>
                </div>
            </div>
            <div className="outputwindow__parent">
                <div className="outputwindow__user">
                    <div className="textfor__user">Code Output</div>
                    <iframe
                        className="preview"
                        src={"data:text/html," + encodeURIComponent(code_text)}
                    />
                </div>
                <div className="outputwindow__computer">
                    <div className="textfor__computer">
                        Recreate this target
                    </div>
                    <div className="target__preview">
                    this is test image
                      </div> 
                </div>
            </div>
        </div>
        <footer><h1>FOOTER</h1></footer>
        </div>
    );
}

export default App;
