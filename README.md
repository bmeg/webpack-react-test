# webpack-react-test

This reproduces a possible issue or bug (or dumb mistake I am making, who knows?) when importing a react component that uses `refs` from a webpack bundle.

## the idea

So, this repo has two branches, `lib` and `app`. `lib` contains a single react component, and `app` depends on `lib`.

Everything is already built, so to reproduce the problem you can just visit the `index.html` that lives in lib (which works) and then visit the `index.html` that lives in `app` (which fails due to the react owner error).

Yet! The code in `app` literally just imports the exact code from `lib` that is working in `lib`. What is the problem here? Did a hidden second conflicting version of React get into this oversimplified repo?? Maybe! Otherwise, what is wrong with the way I am using refs?

Any help welcome, thanks!