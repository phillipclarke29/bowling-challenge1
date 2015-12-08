
##Bowling Challenge
=================

This is week 6's weekend challenge.  A full list of instructions is found below.

#User Story

    As a user I want to be able to score my game of bowling I want to:-
    - enter the number of pins I have knocked down after each roll
    - know my score at any point in the game
    - record strikes and spares
    - get a final score

#How to score a game

To run the game in the console please use the following commands:-

Go to the root folder in the command line and type open index.html.  Open up the console and use the following commands.

game = new Game
game.roll(score)
game.rolls (lists all balls rolled)
game.<underscore>totalGameScore to calculate the score at any time in the game
game.<underscore>lastroll(score) to enter the bonus frame rolls in the event of a strike in the 10th frame
game.<underscore>grandtotal

#Tests

The game has a full set of passing tests using Jasmine.  To run the tests go to the command line and type open SpecRunner.html.

#Approach

We have used a single class of Game to record the rolls, frames, strikes, spares and the overall score.
Individual rolls are recorded in an array.  

For the first 10 frames, when the scores are calculated, we checked all even items for a strike using findStrikes (i % 2 == 0) and then add the score of the next frame - so this.rolls[i+2] and this.rolls[i+3] to a bonus.  We also check, using findTwoStrikes whether after a strike the subsequent first roll is a strike and we change the score of the first strike to 20.  PLEASE NOTE - This means that we need to check for both strikes of value 10 and 20 in findStrikes.

For the spares, we check the odd items in findSpares using (i % 2 != 0) and then add the total of the first roll in the next frame to the bonus.

We are hoping to adjust the display at the front end to change the strikes with a value of 20 back to 10 for the purposes of consistency.  We also plan to use javascript to enter the Zeros after a strike has been recorded.

If a strike is recorded in the 10th frame two extra rolls can be recorded.  The scores for these two extra rolls are added to the overall total to deliver a grand total.

#Possible further steps

Although it is not specified it would be desirable to create an HTML based front end.

We would also like to keep a running total of scores on a database



#Original Challenge

    Test time: Friday, the entire day and the entire of lab week if you need it.
    Feel free to use Google, your notes, and your books.

##Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Filling out your learning plan self review for the week: https://github.com/makersacademy/learning_plan_september2015 (if you haven't already) - note that next week is lab week, so please include information about the projects you plan to work on
* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.


### Optional Extra

Create a nice interactive animated interface with jQuery.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

CI
--

If you don't follow the usual Jasmine convention of having your tests in `spec` and your code in `src`, or you've built your code into a little app, CI will probably fail for you as we are doing *sneaky things*&trade; to make your tests run. However, there is a simple fix:

1. Open up your `.travis.yml`
2. On line 8, you will see where it looks for your code (`'src/**/*.js'`) and your tests (`'spec/**/*.js'`)
3. Adjust these to point to the correct directories
4. Done.
