from transformers import pipeline
import os
#import openai3.5

#file_no = 1for loop to list files in /texts dir (print(str(file_no) + "- " + filename)) file_no +=1
#print list here
#selected_file = int(input), then ask the user which one they want to select (if selected_file == 1: assign text to path)
#then assign path to path_to_file
path_to_file = "texts/DormvsApartment.txt"

def get_book_text(path):
    with open(path, 'r') as f:
        return f.read()
    
def chunk_text(text, max_length=1024):
    return [text[i:i+max_length] for i in range(0, len(text), max_length)]
    
# text = get_book_text(path_to_file)

# print("--- Begin report of texts ---\n")
def summarize_text(text):
    chunks = chunk_text(text)
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn", min_length = 5, max_length = 20)
    summaries = [summarizer(chunk)[0]['summary_text'] for chunk in chunks]
    model_text = " ".join(summaries)
    return model_text

# summaries = [summarizer(chunk)[0]['summary_text'] for chunk in chunks]
# model_text = " ".join(summaries)
#instead of printing, assign model_text to a variable named ai
#ai = model_text
#def goes here to input in gpt and return the grammar checked text 
# print(model_text)
# print("\n--- End report ---")


'''
Next Features to implement 
    - grammer checker ; add openai 3.5 model and assign the model_text to a variable to have open ai quick check grammar and spit it back out under "Begin Reports of texts"
    - text selector ; choose what texts from the texts/ to choose from
    - clean up output ; make the printed output less janky
    - slow down output ; provide sleep() functions to slow down the output
    - add exceptions ; especially for max length text provided and others like network error


'''



 