import google.generativeai as genai
import os


# Chat history storage
chat_history = []

# Function to generate a response
def generate_response(prompt):
    try:
        # Combine chat history with the current prompt
        history_as_context = "\n".join(chat_history[-6:])  # Limit to last 5 messages 
        full_prompt = f"{history_as_context}\nYou: {prompt}"

        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(full_prompt)

        return response.text
    except Exception as e:
        print(f"An error occurred while generating the response: {e}")
        return None

# Chatbot function to start the conversation
def chat_bot():
    """
    Starts the chatbot conversation.
    """
    print("Gemini Chatbot: Hello! How can I assist you today?")
    
    while True:
        user_input = input("You: ")
        chat_history.append(f"You: {user_input}")  # Save user message in history
        
        if user_input.lower() == "exit":
            print("Gemini Chatbot: Goodbye!")
            break
        
        # Generate response from the AI model
        response = generate_response(user_input)
        if response:  # Check if a response was successfully generated
            print(f"Chatbot: {response}")
            chat_history.append(f"Chatbot: {response}")  # Save bot response in history
        else:
            print("Chatbot: Sorry, I couldn't generate a response.")

# Entry point of the script
if __name__ == "__main__":
    try:
        # API key from environment variables
        api_key = os.environ.get('GOOGLE_API_KEY')
        if not api_key:
            raise ValueError("API key not found. Please set the 'GOOGLE_API_KEY' environment variable.")
        
        # Configure the generative AI API with the API key
        genai.configure(api_key=api_key)
        
        # Start the chatbot
        chat_bot()
        
    except Exception as e:
        print(f"An error occurred: {e}")

