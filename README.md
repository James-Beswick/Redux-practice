# Redux-practice

In this project I created with create-react-app I am getting to grips with the basic concepts of redux and version control with git. It is based upon the udemy course I am currently partaking in 'The Complete React Guide'.

Technology Used:
1) React
2) CSS modules
3) Redux Toolkit
4) Small Firebase backend

Ideas to remember:
1) You can write code that mutates the state in the reducers using useSlice. This is because @reduxjs/toolkit will use 'imer?' to make a new state snapshot with the info you provide in an imutable way.
2) Never put side effects into a store slice when using redux, unless you create a separate action creator thunk. ie http POST/GET/PUT requests.
