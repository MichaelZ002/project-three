import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function TextArea() {
  return (
    <TextareaAutosize
      rowsMin={10}
      aria-label="minimum height"
      placeholder="Type here"
    />
  );
}
