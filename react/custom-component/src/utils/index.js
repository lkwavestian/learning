import React from 'react'
import { LoremIpsum } from 'lorem-ipsum'

export const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
})

export const DemoBlock = ({ title, children }) => (
  <div style={{ padding: 16 }}>
    <h3>{title}</h3>
    {children}
  </div>
);

export const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;

export const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))

let count = 0

export async function mockRequest() {
  if (count >= 5) {
    return []
  }
  await sleep(2000)
  count++
  return [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
  ]
}

export const fileSize = (size) => {
    let number = size;
    let unit = 'bype';
    if (number >= 1024 ** 3) {
      number = number / 1024 ** 3;
      unit = 'G';
    } else if (number >= 1024 ** 2) {
      number = number / 1024 ** 2;
      unit = 'M';
    } else if (number >= 1024) {
      number = number / 1024;
      unit = 'KB';
    }
    number = number.toFixed(2);
    return +number + unit;
  };
  
  export const extname = (name) => {
    const i = name.lastIndexOf('.');
    if (i >= 0) {
      return name.substring(i).toLowerCase();
    }
    return '';
  };
  