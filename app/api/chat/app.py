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
    url = "https://chat-api.you.com/smart"

    payload = {"query": "test"}
    headers = {
        "X-API-Key": "90a7919a-440a-4c2a-bdeb-ca967c50dd23<__>1PTsFeETU8N2v5f4qmtDZVGS",
        "Content-Type": "application/json"
    }

    response = requests.request("POST", url, json=payload, headers=headers)

    print(response.text)
    return response.text

