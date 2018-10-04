from flask import Flask, render_template
app = Flask(__name__)

# Home page
@app.route("/")
@app.route("/home")
def home():
    # Return our home.html file from our 'templates' folder
    return render_template('home.html')

# About page
@app.route("/about")
def about():
    return render_template('about.html')

# Run Flask by running the Python file
if __name__ == '__main__':
    app.run(debug=True)