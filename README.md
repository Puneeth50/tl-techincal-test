# Cards Application

## Problem statement

A bank has launched 3 new credit card products, C1, C2 and C3. They have built a web app to check the eligibility of the person applying. The app works by the user entering and submitting their name, email and address. The server then responds with the credit cards that person is eligible for.

Before they deploy this web app to production they need to ensure the quality of it and data integrity.

## Exercise Overview

Write end-to-end tests for the user journey of applying for a credit card

1. Entering name, email and address
2. Submitting the form with a range of different values
3. The expected response based on the names Boris, Angela and Theresa

## How to submit the exercise

1. Clone the repo locally.
2. Complete the exercise.
3. Upload your completed project to your GitHub, and then paste a link to the repository below in the form along with any comments you have about your solution.

## How to Run

Open the project with IntelliJ, Eclipse, VS Code or any other IDE of your choice

1. Go to terminal.
2. `npm install` -- to install the app
3. `npm start` -- to run the app
4. Open a new terminal window/tab and run `npm test` to launch TestCafe and execute all tests in `/testcafe/tests.ts`

## Task

1. In `/testcafe/test.ts`, write all your end-to-end tests with clear descriptions

## Considerations (only for Solution Design section)

1. The bank would like end-to-end tests to be executed each time before a deployment
2. The bank would like to test the security of their application to ensure sensitive data cannot be compromised
3. The bank would like to devise a test strategy for introducing new features to the web app
