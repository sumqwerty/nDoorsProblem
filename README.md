# nDoorsProblem

## Problem 
There are N doors in a row, numbered from 1 to N. Initially all are closed. Then you make N passes by N doors. In first pass you toggle (open the door if it is closed and close it if it is opened) all the doors starting from the first door. In the second pass you toggle every door whose number is a multiple of 2 (2, 4, 6, 8, 10…). In 3rd pass you toggle doors whose number is multiple of 3 (3, 6, 9, ..) and so on.. In the i‘th pass you toggle all the doors which are multiple of i.
What will be the state of k‘th door after all the passes? How many doors will be open in the end?

## Solution
This problem can be solved mainly by 2 methods. 
1. First the mathematical one, which states that for N doors, the number of doors that'll be in the open state in the Nth pass will equal to the number of perfect squares that exist up to N. (Detailed explanation  [here](https://www.ritambhara.in/n-doors-puzzle/))
2. I used a brute force approach. Suppose there are 5 doors, for solving this take a 2d matrix of size 5x5. Now each i'th subarray in the matrix will represent the state of the doors after i'th pass. For instance, initially our matrix will be\
                                                            [\
                                                   i1         [0,0,0,0,0],\
                                                   i2         [0,0,0,0,0],\
                                                   i3         [0,0,0,0,0],\
                                                   i4         [0,0,0,0,0],\
                                                   i5         [0,0,0,0,0],\
                                                            ]\
                                                            
The Zeros represent that all doors are close, so after the 1st(i1) traversal, all the doors that are previously closed will be opened and our matrix will become\
                                                            [\
                                                   i1         [1,1,1,1,1],\
                                                   i2         [0,0,0,0,0],\
                                                   i3         [0,0,0,0,0],\
                                                   i4         [0,0,0,0,0],\
                                                   i5         [0,0,0,0,0],\
                                                            ]\
                                                            
Similarly after 2nd(i2) traversal our matrix will be\
                                                            [\
                                                   i1         [1,1,1,1,1],\
                                                   i2         [1,0,1,0,1],\
                                                   i3         [0,0,0,0,0],\
                                                   i4         [0,0,0,0,0],\
                                                   i5         [0,0,0,0,0],\
                                                            ]\

After the 2nd(i2)traversal, in the array above door number 1,3,5 remain unaffected, hence you see 1 on 1st, 3rd and 5th position in i2, but door number 2 & 4 were toggled hence became 0.\

Now we repeate this process until we have traversed the whole matrix\
                                                            [\
                                                   i1         [1,1,1,1,1],\
                                                   i2         [1,0,1,0,1],\
                                                   i3         [1,0,0,0,1],\
                                                   i4         [1,0,0,1,1],\
                                                   i5         [1,0,0,1,0],\
                                                            ]\
So for N=5, 2 doors will be remain open in the end(door 1 and 4 in i5).

## Visualizing this array

### 1. After this array is generated, each element is mapped to a rectangle on the screen, if the door is open then display a white rectangle and if the doors is closed display a black one. Doing this, the following pattern will be generated
![nbase5](https://github.com/sumqwerty/nDoorsProblem/blob/main/imgs/n5base.png)


### 2. Scaling it up by taking N=200, we will get
![nbase200](https://github.com/sumqwerty/nDoorsProblem/blob/main/imgs/n200base.png)


### 3. Now we transalte this pattern to the center of the display window, and mirror it to fill all the 4 quadrants of the window
![tanslated](https://github.com/sumqwerty/nDoorsProblem/blob/main/imgs/translated.png)
&nbsp;&nbsp;![filled](https://github.com/sumqwerty/nDoorsProblem/blob/main/imgs/filled.png)


### 4. After modifying the dipslay function to add some edge cases to clear the noisy vertical lines we get the following output which looks like a passage with walls on either sides going into the screen
![finalwb](https://github.com/sumqwerty/nDoorsProblem/blob/main/imgs/finalwb.png)


### 5. Finally filling in the colors and adding a static sprite, gives this a retro 3d game era look,
![final](https://github.com/sumqwerty/nDoorsProblem/blob/main/imgs/final.png)
