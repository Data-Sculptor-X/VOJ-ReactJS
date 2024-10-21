### Description

- This PR does the following:
  - Adds ...
    Chatbot.py 

- Issue Number - #43 

### Changes

- Added a new feature to python-bot folder:  Chatbot.py is a Gemini API based AI chatbot which keeps the chat history until the "exit" prompt is given. It uses "gemini-1.5-flash" model to generate responses for the given prompt.


### Testing Instructions
Detailed instructions on how to test the changes. Include any setup needed and specific test cases.
1. Pull this branch.
2. Start the python-bot folder in your local system.
3. Run `pip install google.generativeai ` to install dependencies.
4. Go to "https://ai.google.dev/" to get your own API key. 
5. Go to your system environmental variables and set the variable "GOOGLE_API_KEY" as your key.
6. Make sure your system is online (Connected to internet).
7. Run chatbot.py 
8. Do the chating as required
9. Give the "exit" prompt to end the program. 


### Checklist
Make sure to check off all the items before submitting. Mark with [x] if done.
- [x] I have performed a self-review of my code
- [x] I have commented my code, particularly in hard-to-understand areas
- [x] My changes generate no new warnings
- [x] I am working on this issue under GSSOC-Extended
