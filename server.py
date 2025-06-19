import flask
import json
from recipe_ing import recipe
from listings import recipe_listings

app = flask.Flask('test')

@app.route('/api/recipe/<dish>',methods =['GET'])
def show_recipe(dish):
    result = recipe(dish)
    return result


@app.route('/api/recipe_links/<dish>',methods =['GET'])
def recipe_links(dish):
    result = recipe_listings(dish)

    return result

if __name__ == '__main__':
    app.run(debug=True)