from fastapi import FastAPI, HTTPException
from typing import List, Dict
import httpx
import asyncio
from collections import deque
from pydantic import BaseModel

app = FastAPI()

# Constants
WINDOW_SIZE = 10
TIMEOUT = 0.5  # 500ms timeout
BASE_URL = "http://20.244.56.144/test"

# Data structures to store numbers for each type
number_storage: Dict[str, deque] = {
    'p': deque(maxlen=WINDOW_SIZE),  # prime
    'f': deque(maxlen=WINDOW_SIZE),  # fibonacci
    'e': deque(maxlen=WINDOW_SIZE),  # even
    'r': deque(maxlen=WINDOW_SIZE)   # random
}

class NumberResponse(BaseModel):
    numbers: List[int]

async def fetch_numbers(number_type: str) -> List[int]:
    """Fetch numbers from the test server with timeout."""
    url = f"{BASE_URL}/{number_type}"
    try:
        async with httpx.AsyncClient() as client:
            response = await asyncio.wait_for(
                client.get(url),
                timeout=TIMEOUT
            )
            response.raise_for_status()
            data = response.json()
            return data.get("numbers", [])
    except Exception as e:
        print(f"Error fetching numbers: {e}")
        return []

@app.get("/numbers/{number_type}")
async def get_numbers(number_type: str):
    if number_type not in number_storage:
        raise HTTPException(status_code=400, detail="Invalid number type")
    
    # Store previous state
    prev_state = list(number_storage[number_type])
    
    # Fetch new numbers
    new_numbers = await fetch_numbers(number_type)
    
    # Update storage with new numbers
    for num in new_numbers:
        if num not in number_storage[number_type]:
            number_storage[number_type].append(num)
    
    # Get current state
    curr_state = list(number_storage[number_type])
    
    # Calculate average
    avg = sum(curr_state) / len(curr_state) if curr_state else 0
    
    return {
        "windowPrevState": prev_state,
        "windowCurrState": curr_state,
        "numbers": new_numbers,
        "avg": round(avg, 2)
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=9876)
