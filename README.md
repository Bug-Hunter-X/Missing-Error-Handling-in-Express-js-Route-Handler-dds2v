# Express.js Route Handler Error Handling Bug

This repository demonstrates a common bug in Express.js route handlers: missing error handling for invalid input.  The `bug.js` file contains the buggy code, which fails to handle cases where the user ID is not a valid number. The `bugSolution.js` provides the corrected version with proper error handling.

## Bug Description

The `bug.js` code attempts to find a user by ID.  However, it doesn't check if the `req.params.id` is a valid number before parsing it. If it's not, `parseInt` will return `NaN`, leading to the `user` variable being `undefined`. The code then attempts to send the `user` object as a response, which causes the application to behave unexpectedly or even crash. 

## Solution

The `bugSolution.js` file fixes this by adding a check to ensure the `userId` is a valid number before attempting to find the user.  It also includes a proper error response (HTTP 404) when the user is not found.