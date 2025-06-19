from ollama import chat
from ollama import ChatResponse
import json


def recipe(dish : str):
    response: ChatResponse = chat(model='gemma3', format='json',messages=[
  {
    'role': 'user',
    'content': f'''
    Generate a JSON object with ingredients and a short recipe for "{dish}". Format:

{{
  "ingredients": [...],
  "recipe": [...]
}}
''',
  },
])
    return json.JSONDecoder().decode(response.message.content)
    