from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import requests

url = "https://api.ydc-index.io/rag"

querystring = {"query":"hello world"}

headers = {"X-API-Key": "2614011e-656d-4880-8b98-e49f682daac5<__>1PTsFeETU8N2v5f4qmtDZVGS"}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get('/')
def hello_world():
    params = {
        "query": body.question,
        "chat_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a"
    }

    url = "https://chat-api.you.com/smart"

    headers = {
        "X-API-Key": "90a7919a-440a-4c2a-bdeb-ca967c50dd23<__>1PTsFeETU8N2v5f4qmtDZVGS",
        "Content-Type": "application/json"
    }

    response = requests.post(url, json=params, headers=headers)

    return {"data": response.json()["answer"]}

