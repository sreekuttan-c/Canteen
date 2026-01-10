from fastapi import FastAPI
from pydantic import BaseModel
import math

app = FastAPI()

class MathInput(BaseModel):
    activeOrders: int
    avgPrepTime: int

@app.post("/math")
def calculate(data: MathInput):
    # Ramanujan-inspired approximation for total wait time
    wait_time = data.avgPrepTime * math.sqrt(data.activeOrders * (data.activeOrders + 1) / 2)

    # Categorize crowd level
    if wait_time < 30:
        level = "LOW"
    elif wait_time < 60:
        level = "MEDIUM"
    else:
        level = "HIGH"

    return {
        "waitTime": round(wait_time, 2),
        "crowdLevel": level
    }
