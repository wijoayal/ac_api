from fastapi import FastAPI, Path
from fastapi_utils.tasks import repeat_every
from app.db import mongodb
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
import random



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


@app.on_event("startup")
@repeat_every(seconds=5)
async def time_data():
    now = datetime.now()
    temp = random.randint(32,34)
    hum = random.randint(73,75)
    ac_id = 'ac_'+str(random.randint(1,10))
    rand = random.randint(0, 1)
    is_on, turnoff = True, False
    if rand == 0: 
        is_on = True
        turnoff = False
    else:
        is_on = False
        turnoff = True

    inserted = mongodb.collection_history.insert_one(
        {
        'id': 'ac_1',
        'timestamp': now,
        'temp': temp,
        'hum': hum,
        'is_on': is_on,
        'turn_off': turnoff,
        }
    )
    print('done')
    print(inserted.inserted_id)
