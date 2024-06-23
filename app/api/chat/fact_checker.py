"""
@author: Ashlyn Campbell     
"""

from bs4 import BeautifulSoup
import openai
import requests 
import json
import pandas as pd  
import os

''' These functions are called by the Flask code for prompt testing'''

os.chdir('C:/Users/ashly/OneDrive/Documents/Education Material/AIBerkeleyHackathon')

class Accuracy: 
    def __init__(self):
        self.true_positive = 0
        self.false_positive = 0
        self.true_negative = 0
        self.false_negative = 0
        self.miscalculation = 0
  

score = Accuracy() # keep track of the ongoing accuracy

# iteratively run these functions to check if the youdotcom AI is accurate
def getFakePrompt():
    df = pd.read_csv(os.getcwd()+'/hackberkley-2024/archive-1/Fake.csv')
    count = 0
    for index, row in df.iterrows():
        count += 1
        answer = checkInfo(row['text'])
        if answer == 1:
            score.false_positive += 1
        elif answer == 0:
            score.true_negative += 1
        else:
          # error occurred
            score.miscalculation += 1
            
        if count >= 10: 
            break
  
def getTruePrompt():
    df = pd.read_csv(os.getcwd()+'/hackberkley-2024/archive-1/True.csv')
    count = 0
    for index, row in df.iterrows():
        count += 1
        answer = checkInfo(row['text'])
        if answer == 1:
            score.true_positive += 1
        elif answer == 0:
            score.false_negative += 1
        else:
          # error occurred
            score.miscalculation += 1
        if count >= 10: 
            break 
  
# check the True or False information for validity 

def checkInfo(text, source_url=None):
    api_url = "https://chat-api.you.com/research"
          
          
    if source_url: # check the url if it contains an input value
        payload = {
          "query": f"Answer this with True or False ONLY, Is this information real or fake meaning not real {source_url}",
            "chat_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a"
          }
    else:
        payload = {
          "query": f"Answer this with True or False, Is this information real or fake {text}",
            "chat_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a"
          }
        
    headers = {
        "X-API-Key": "90a7919a-440a-4c2a-bdeb-ca967c50dd23<__>1PTsFeETU8N2v5f4qmtDZVGS",
        "Content-Type": "application/json"
      }
    
    response = requests.post(api_url, json=payload, headers=headers)
    if response.status_code == 200:
        data = response.json()
        summary = data.get("answer", "Answer not found")
        print(f"The author of the article is: {summary}")
        summary = summary.lower()
        return 1 if 'true' in summary else 0
    else:
        print("Failed to retrieve the answer")
        return -1 # test did not work accurately


# Provide details about the author of the articles credibility
def provideAuthorDetails(name):
    df = pd.read_csv('C:/Users/ashly/OneDrive/Documents/Education Material/AIBerkeleyHackathon/hackberkley-2024/archive/fake.csv')
    count = 0
    for index, row in df.iterrows():
        count += 1
        
        
        if count >= 10:
            break
    # return creditAuthor(name)

def creditAuthor(name):
    api_url = "https://chat-api.you.com/research"
        
    payload = {
        "query": f"Write a short summary about the background of the author of this article: {name}. Show their credibility in this short summary.",
        "chat_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a"
      }

    headers = {
        "X-API-Key": "90a7919a-440a-4c2a-bdeb-ca967c50dd23<__>1PTsFeETU8N2v5f4qmtDZVGS",
        "Content-Type": "application/json"
      }

    response = requests.post(api_url, json=payload, headers=headers)

    if response.status_code == 200:
        data = response.json()
        summary = data.get("answer", "Author not found")
        print(f"The author of the article is: {summary}")
    else:
        print("Failed to retrieve the author information")
    
    return summary
        

cm = {
      "true_positive": score.true_positive,
      "false_positive":score.false_positive,
      "true_negative": score.true_negative,
      "false_negative":score.false_negative,
      "miscalculation":score.miscalculation
      }

accuracy_calculation = json.dumps(cm)
file = open('accuracy_calculation.json', 'w')
file.write(accuracy_calculation)
file.close()