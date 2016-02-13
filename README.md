# JS ES6 Solutions to CS Questions 

Solutions in ES6 to common interview questions for CS positions. 

[Reddit List of CS Questions](https://www.reddit.com/r/cscareerquestions/comments/20ahfq/heres_a_pretty_big_list_of_programming_interview/)


## Most Frequent 
TBD

## nth Fibonacci 
Various solutions to generate the nth Fibonacci number. 

**Iterative** is *significantly faster* for the node engine. Function calls require state and preservation and restoration while iteration jumps around in one function. 

### Compare Test Results 
Test results from **Node V5.0.0**

```
Compute n = 0 to 50
Recursive approach took 554220ms
Iterative approach took 2ms
Difference (Rec - Intr) =  554218ms
```