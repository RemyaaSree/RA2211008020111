# Develop Average Calculator HTTP Microservice

A FastAPI-based microservice that calculates averages of different types of numbers (prime, Fibonacci, even, and random) using a sliding window approach.

## Features

- REST API endpoint for different number types
- Sliding window implementation with configurable size
- Automatic handling of timeouts and errors
- Unique number storage with window size limits
- Real-time average calculation
- Asynchronous operations for better performance

## Prerequisites

- Python 3.7+
- pip (Python package installer)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Service

Start the server using:
```bash
python main.py
```

The service will run on `http://localhost:9876`

## API Endpoints

### GET /numbers/{number_type}

Fetches numbers of the specified type and calculates their average using a sliding window approach.

#### Supported number types:
- `p`: Prime numbers
- `f`: Fibonacci numbers
- `e`: Even numbers
- `r`: Random numbers

#### Example Request:
```bash
curl http://localhost:9876/numbers/e
```

#### Example Response:
```json
{
    "windowPrevState": [],
    "windowCurrState": [2, 4, 6, 8],
    "numbers": [2, 4, 6, 8],
    "avg": 5.00
}
```

## Configuration

The service uses the following default configurations:
- Window Size: 10 numbers
- Timeout: 500ms
- Port: 9876

## Features

1. **Sliding Window**: Maintains a window of the most recent unique numbers
2. **Timeout Handling**: Automatically handles requests that take longer than 500ms
3. **Error Handling**: Gracefully handles API errors and timeouts
4. **Unique Numbers**: Stores only unique numbers in the window
5. **Real-time Average**: Calculates average based on current window state

## Test Server APIs

The service uses the following test server endpoints:
- Prime Numbers: `http://20.244.56.144/test/primes`
- Fibonacci Numbers: `http://20.244.56.144/test/fibo`
- Even Numbers: `http://20.244.56.144/test/even`
- Random Numbers: `http://20.244.56.144/test/rand`

## Error Handling

- Invalid number type: Returns 400 Bad Request
- Timeout: Returns empty numbers array
- Server errors: Returns empty numbers array

## Performance Considerations

- Asynchronous HTTP requests for better performance
- 500ms timeout for external API calls
- Efficient data structures for number storage
- Quick response times maintained through optimized operations 
