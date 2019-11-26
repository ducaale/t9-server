# T9-server

This is an express api that implements T9 algorithm.

## Requirements
- node v10 or greater

## Installing
1. clone the project
2. navigate to the root directory of the project
3. run `npm install`

## Running
run `npm start`. the server will start at port 3001

## Using
`curl 'http://localhost:3001/?input=3'` where input is sequence of numbers in the range 2-9.
the server will respond with a list of words that correspond to [T9 output](https://en.wikipedia.org/wiki/T9_(predictive_text)).