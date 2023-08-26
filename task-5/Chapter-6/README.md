1. Escape characters are special symbols used in strings to represent characters that are difficult to input directly into the string.

2. \n represent new line. \t represent tab space.

3. To include a backslash \ character in a string, you need to use a double backslash \\.

4. Beacause we used double quotes at the start and end of the string, so it isn't a problem to used single quotes inside.

5. by using multiline string, we can acheive new lines without \n.

6.  'Hello, world!'[1] evaluates to 'e'
    'Hello, world!'[0:5] evaluates to 'hello'
    'Hello, world!'[:5] evaluates to 'hello'
    'Hello, world!'[3:] evaluates to 'lo, world!'

7.  'Hello'.upper() evaluates to 'HELLO'
    'Hello'.upper().isupper() evaluates to True
    'Hello'.upper().lower() evaluates to 'hello'

8. 'Remember, remember, the fifth of November.'.split() evaluates to ['Remember,', 'remember,', 'the', 'fifth', 'of', 'November.']
    '-'.join('There can be only one.'.split()) evaluates to 'There-can-be-only-one.'

9. rjust(), ljust(), and center() methods can be used respectively.

10. lstrip() and rstrip() methods can be used respectively.