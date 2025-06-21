from ollama import chat
import json

def recipe(dish: str):
    stream = chat(
        model='phi3:mini',  # or just 'phi3'
        format='json',
        stream=True,
        messages=[
            {
                'role': 'user',
                'content': f'''
                Generate a JSON object with ingredients and a short recipe for "{dish}". Format:

{{
  "ingredients": [...],
  "recipe": [...]
}}
                '''
            }
        ]
    )

    full_response = ''
    for chunk in stream:
        content = chunk['message'].get('content', '')
        full_response += content
        print(content, end='', flush=True)  # Optional: print as it streams

    try:
        return json.loads(full_response)
    except json.JSONDecodeError as e:
        print("\n\n[ERROR] Invalid JSON returned:", e)
        return {}

if __name__ == '__main__':
    result = recipe('pulao')
    print("\n\nParsed JSON Result:\n", result)
