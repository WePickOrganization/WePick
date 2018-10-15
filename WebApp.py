from flask import Flask, render_template, url_for
from forms import RegistrationForm, LoginForm

app = Flask(__name__)


# Setup secret key
app.config['SECRET_KEY'] = 'b4b450726dcee0886de6b5f659aa9959'

# Dictonary
posts = [
    {
        'author': 'Edward Eldridge',
        'title': 'Eddies Project',
        'content': 'First post content',
        'date_posted': 'October 4, 2018'
    },
    {
        'author': 'Keith Higgins',
        'title': 'Keiths Project',
        'content': 'Second post content',
        'date_posted': 'October 4, 2018'
    },
    {
        'author': 'Danielis Joniškis',
        'title': 'Danielis Project',
        'content': 'Third post content',
        'date_posted': 'October 4, 2018'
    }

]

# Home page
@app.route("/")
@app.route("/home")
def home():
    # Return our home.html file from our 'templates' folder
    return render_template('home.html', posts=posts)

# About page
@app.route("/about")
def about():
    # Return our about.html file from our 'templates' folder
    # Pass in title to our if statement declared in HTML
    return render_template('about.html', title='About')

# Registration page
@app.route("/register")
def register():
    # Return our about.html file from our 'templates' folder
    # Pass in title to our if statement declared in HTML
    form = RegistrationForm()
    return render_template('register.html', title='Register', form=form)

# Login page
@app.route("/login")
def login():
    # Return our about.html file from our 'templates' folder
    # Pass in title to our if statement declared in HTML
    form = LoginForm()
    return render_template('login.html', title='Login', form=form)

# Run Flask by running the Python file
if __name__ == '__main__':
    app.run(debug=True)