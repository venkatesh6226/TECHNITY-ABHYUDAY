1. Two values of boolean datatype are 'True' and 'False'. While writing them T and F should be in uppercase and the rest of word should be in lowercase.

2. and, or and not are three boolean operators.

3. |    A    |    B    |  A and B  |
   | ------- | ------- | --------- |
   |  False  |  False  |   False   |
   |  False  |  True   |   False   |
   |  True   |  False  |   False   |
   |  True   |  True   |   True    |

   |    A    |    B    |  A or B  |
   | ------- | ------- | -------- |
   |  False  |  False  |  False   |
   |  False  |  True   |   True   |
   |  True   |  False  |   True   |
   |  True   |  True   |   True   |

   |    A    |  Not A  |
   | ------- | ------- |
   |  True   |  False  |
   |  False  |  True   |

4.  i. False
    ii. False
    iii. True
    iv. False
    v. False
    vi. True

5.  '==' Equal to
    '!=' Not equal to
    '<' Less than
    '>' Greater than
    '<=' Less than or equal to
    '>=' Greater than or equal to

6. Equal to(==) operator compares two values and evaluate to a boolean value, whereas assignment operator(=) stores a value in a variable.

7. A condition is an expression used in control flow statements which evaluates to a boolean value. Based on the boolean value it executes or skips the control flow block.

8.  Block 1:
        print('eggs')
        if spam > 5:
            print('bacon')
        else:
            print('ham')
        print('spam')
    
    Block 2:
         print('bacon')

    Block 3:
        print('ham')

9.  if spam == '1':
        print('Hello')
    elif spam == '2':
        print('Howdy')
    else:
        print('Greetings!')

10. CTRL+C can be used to stop a program.

11. The 'break' statement is used to prematurely exit a loop. When a break statement is encountered within a loop, the loop is immediately terminated. The 'continue' statement is used to skip the current iteration of a loop and move to the next iteration. When a continue statement is encountered, the rest of the loop's code for the current iteration is skipped, and the loop proceeds with the next iteration

12. They all do the same thing. range(10) tells that the total no.of iterations are 10(0 to 9) with default start point(0) and with a default increase of 1 per iteration. range(0,10) tells that start point is 0, total no.of iterations are 10(0 to 9) with a default increase of 1 per iteration. range(0,10,1) tells that start point is 0, total iteration are 10(0 to 9), increase of 1 per iteration.

13. #Using for loop
        for i in range(1, 11):
            print(i)

    #using while loop
        i = 1
        while i <= 10:
            print(i)
            i = i + 1

14. spam.bacon()