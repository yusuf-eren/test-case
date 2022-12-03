# Test Case

# How to install?

### In the main directory run;

```
npm install
```
### Then run;
```
npm run install:all
```

# How to start?

### Start app with one command in local;

```
npm run start
```
### Now you can go to ```http://localhost:3000``` and use the app
## Optional: Docker
```
npm run dockerize
```

### Run your app on Docker
```
npm run docker
```
### You can go to ```http://localhost:3000``` to view the application

# My Approach
Just letting you know before starting; I code server side applications for my whole career so the client may look a little bit complex but I did my best :)
## Problems
### 1. Pagination with API
In this problem, I used a basic math calculation. When we have page 1 we should make 2 api call and the page of the calls should increase correctly. So I get the page and multiplied it with 2 then subtracted from 1. So the operation looks like this;
```
Client | API
page=1 | (1 * 2 - 1) and (1 * 2) = 1,2
page=2 | (2 * 2 - 1) and (2 * 2) = 3,4
page=3 | (3 * 2 - 1) and (3 * 2) = 5,6
```
I coded this algorithm with reusability in mind. So If we want to go to next pages we can use the same algorithm for all scenarios.

### 2. Debounce On Client Side
I tried many solutions maybe more than 1 hour and found one explanation for the problem and solution. Here it is; https://www.youtube.com/watch?v=PySFIsgXNZ0
Note: I didn't copied from it. I just took the idea of the solution.


### There were no more important problems for me. I solved all other problems effortlessly.

# Questions
1. Currently I spent about 6 hours.
2. It is already ready to production. Just little configurations can be added.

# Final Words
### It was fun to solve this problem for me, but I think the server-side difficulty of the problem can be increased. Because there was no complex data management.