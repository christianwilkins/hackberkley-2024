from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import requests
from pydantic import BaseModel

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

class Query(BaseModel):
    question: str

@app.get('/')
def hello(body: Query):
    return {"message": body.question}

@app.post('/')
def hello_world(body: Query):
    #url = "https://api.ydc-index.io/rag"
    #url = "https://chat-api.you.com/research"
    params = {
        "query": f"Can you answer this in only True or False and less tha 50 words: {body.question}",
        "chat_id": "3c90c3cc-0d44-4b50-8888-8dd25736052a"
    }
    
    url = "https://chat-api.you.com/smart"

    headers = {
        "X-API-Key": "90a7919a-440a-4c2a-bdeb-ca967c50dd23<__>1PTsFeETU8N2v5f4qmtDZVGS",
        "Content-Type": "application/json"
    }

    response = requests.post(url, json=params, headers=headers)
    return response.json()