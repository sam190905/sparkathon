import flask
from flask_cors import CORS
import json
from flask_cors import CORS  
from recipe_ing import recipe
from listings import recipe_listings
from urllib.parse import unquote
from time import time
import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

db = myclient["spark"]

col = db["dish"]


app = flask.Flask('test')
CORS(app,allow_headers='*')

@app.route('/api/recipe/<dish>',methods =['GET'])
def show_recipe(dish):
    result = recipe(dish)
    return result


@app.route('/api/recipe_listings/<dish>',methods =['GET'])
def recipe_links(dish):
    print(time())
    query = list(col.find({'dish' : dish}))
    
    if len(query):
        return query['json']
    result = recipe_listings(unquote(dish))
    print(time())
    col.insert_one(
        {
            'dish' : dish,
            'json' : result
        }
    )
    return result

if __name__ == '__main__':
    app.run(debug=True , use_reloader = False)