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
