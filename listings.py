from ollama import chat
from ollama import ChatResponse
import json
import requests
from urllib.parse import quote

from recipe_ing import recipe

params = {
    "apikey": "ccc52268483011bdb5f33783f026b6b212332aa9",
}

def exist_check(x):
    return x if x else None


def recipe_listings(dish : str):
    rec = recipe(dish=dish)
    for ingredient in rec['ingredients']:
        ingredient : dict
        # ingredient : dict with item and quantity
        api_endpoint = f"https://ecommerce.api.zenrows.com/v1/targets/walmart/discovery/{quote(ingredient['name'])}"
        response = requests.get(api_endpoint,params)
        # print(response.text)~
        data : dict= json.JSONDecoder().decode(response.text)
        ingredient['listings'] = []
        for product in data['products_list']:
            # print(product.keys())
            listing = {
                'product_url' : product['product_url'] if 'product_url' in product else None,
                'price' : product['product_price'] if 'product_price' in product else None,
                'currency_symbol' : product["price_currency_symbol"] if 'price_currency_symbol' in product else None,
                'image_url' : product['product_image'] if 'product_image' in product else None,
                'rating' : product['rating_score'] if 'rating_score' in product else None
            }
            ingredient['listings'].append(listing)
            if len(ingredient['listings']) >= 3:
                break
    
    return rec

    

if __name__ == '__main__':
    print(recipe_listings('grilled cheese sandwich'))