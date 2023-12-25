import React from 'react'
import './Html.css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css'
// import 'codemirror/mode/xml/xml'


const HTML = () => {
  return (
    <div className='html'>
      <div className="head">
        <i class="fa-brands fa-html5"></i>
        <i class="fa-solid fa-copy" title='Click for copy'></i>
      </div>
      <iframe className="codes">
      </iframe>
    </div>
  )
}

export default HTML