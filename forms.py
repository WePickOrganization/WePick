from flask_wtf import FlaskForm
from wtforms import StringField

class RegistrationForm(FlaskForm):
    username = StringField('Username')