import React, { useEffect } from "react";
const prism = require("prismjs")
require('prismjs/components/prism-python');
import "prismjs/themes/prism-tomorrow.css";

const Code: React.FC<{code: string; language: string}> = ({ code, language }) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <h2> Code Syntax Block {language}</h2>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

export default Code;