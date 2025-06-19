import flask
import json
from recipe_ing import recipe

app = flask.Flask('test')

@app.route('/')
def show_recipe():
    result = recipe('daal chawal')
    return result

if __name__ == '__main__':
    app.run(debug=True)