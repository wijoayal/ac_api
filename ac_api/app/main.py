from fastapi import FastAPI, Path
from fastapi_utils.tasks import repeat_every
from app.db import mongodb
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/task/{ac_id}")
async def ac_stats(payload, ac_id):
    if payload == 'off':
        mongodb.collection_stats.update_one(
            {'id': ac_id},
            {'$set': {
                'turn_off': True
            }}
        )
        task = 'ac turned off'
    else:
        mongodb.collection_stats.update_one(
            {'id': ac_id},
            {'$set': {
                'turn_off': False
            }}
        )
        task = 'ac turned on'
    return {ac_id:task}

@app.get("/ac_stats/{ac_id}")
async def ac_stats(ac_id):
    ac_stat = mongodb.collection_stats.find({'id': ac_id})
    for item in ac_stat: doc = item

    return {'doc':doc}


@app.post("/ac_stats/{ac_id}")
async def ac_stats(payload, ac_id):

    mongodb.collection_stats.update_one(
        {'id': ac_id},
        {'$set': {
            'date': datetime.now(),
            'temp': payload.split(',')[0].strip(),
            'hum': payload.split(',')[1].strip(),
        }}, upsert=True
    )
    task = 'ac updated'
    return {ac_id: task}
