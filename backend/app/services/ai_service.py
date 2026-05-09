import requests


async def generate_response(prompt: str):

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "tinyllama",
            "prompt": f"You are an AI software engineering assistant.\n\n{prompt}",
            "stream": False
        }
    )

    data = response.json()

    return data["response"]