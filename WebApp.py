from flask import Flask
app = Flask(__name__)

# Home page
@app.route("/")
@app.route("/home")
def home():
    return "<h1>Home Page.</h1>"

# About page
@app.route("/about")
def about():
    return "<h1>About page</h1>"

# Run Flask by running the Python file
if __name__ == '__main__':
    app.run(debug=True)