1. The re.compile() function creates Regex objects.

2. In regex patterns, backslashes are used to escape special characters and create sequences that have special meanings. so raw strings are used so that backslashes will not be escaped.

3. search() method returns Match objects.

4. group() method returns strings of the matched text.

5. Group 0 covers entire Match, group 1 covers the first set of parentheses, and group 2 covers the second set of parentheses.

6. Periods and parentheses can be escaped with a backslash before them \., \(, and \).

7. If the regex has no groups, a list of strings is returned. If the regex has groups, a list of tuples of strings is returned.

8. The | character signifies matching “either, or” between two groups.

9. The ? character can be used to signify non-greedy matching.

10. + matches one or more. * matches zero or more.

11. {3} matches exactly three instances of the preceding group. The {3,5} matches between three and five instances.

12. The \d, \w, and \s shorthand character classes match a single digit, word, or space character, respectively.

13. The \D, \W, and \S shorthand character classes match a single character that is not a digit, word, or space character, respectively.

14. '.*' is a greedy quantifier, '.*?' is a non greedy quantifier

15. [0-9a-z] or [a-z0-9]

16. Passing re.I or re.IGNORECASE as the second argument to re.compile() will make the matching case insensitive.

17. The . character normally matches any character except the newline character. If re.DOTALL is passed as the second argument to re.compile(), then the dot will also match newline characters.

18. 'X drummers, X pipers, five rings, X hens'

19. The re.VERBOSE argument allows you to add whitespace and comments to the string passed to re.compile().

20. re.compile(r'^\d{1,3}(,\d{3})*$')

21. re.compile(r'[A-Z][a-z]*\sWatanabe')

22. re.compile(r'(Alice|Bob|Carol)\s(eats|pets|throws)\s(apples|cats|baseballs)\.', re.IGNORECASE)