import re

# Write a simple function (less than 160 characters) that returns a Boolean indicating whether or not a string is a palindrome.
def check_word(word):
    '''
    :param word: Str
    :return: Boolean True if the word is palindrome False if not
    '''
    word_lowercase = word.lower()
    word_sanitized = re.sub('[\W\s]',"", word_lowercase)
    word_reverse = word_sanitized[::-1]
    return True if word_sanitized == word_reverse else False  # Press

f = open("palindrome_valids_words.txt", "r")
for word in f:
    assert check_word(word) == True

f = open("palindrome_invalid_words.txt", "r")
for word in f:
    assert check_word(word) == False





