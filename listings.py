from ollama import chat
from ollama import ChatResponse
import json
import requests
from urllib.parse import quote

params = {
    "apikey": "ccc52268483011bdb5f33783f026b6b212332aa9",
}


def recipe_listings(dish : str):
    response: ChatResponse = chat(model='phi3', format='json',messages=[
  {
    'role': 'user',
    'content': f'{dish}'
  },
])
    rec = json.JSONDecoder().decode(response.message.content)

    for ingredient in rec['ingredients']:
        ingredient : dict
        # ingredient : dict with item and quantity
        api_endpoint = f"https://ecommerce.api.zenrows.com/v1/targets/walmart/discovery/{quote(ingredient['name'])}"
        response = requests.get(api_endpoint,params)
        # print(response.text)
        data : dict= json.JSONDecoder().decode(response.text)
        ingredient['links'] = []
        for product in data['products_list']:
            # print(product)
            ingredient['links'].append(product['product_url'])
            if len(ingredient['links']) >= 3:
                break
    
    return rec

    

if __name__ == '__main__':
    print(recipe_listings('grilled cheese sandwich'))