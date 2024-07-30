from flask import Flask, request, jsonify
from main import summarize_text
import os

os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

import keras

app = Flask(__name__) #names flask as app *always do this when setting up flask

#post is for submitting DATA and get is for retrieving data
@app.route('/summarize', methods=['POST']) #tells flask what function to run when a specific URL is accessed
def summarize():
    text = request.json['text'] #gets the json data sent in the request bot, assigning text to the inputted text
    summary = summarize_text(text) #summarize using our main function
    return jsonify({'summary': summary}) #converts whatever is in summary into JSON, {'s': s} is a python dict thats behing conv

if __name__ == '__main__': #runs
    app.run(debug=True)