from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Length, Email, EqualTo

# Setup a a function to handle registration of a user
class RegistrationForm(FlaskForm):
    # Username field
    username = StringField('Username', 
                         validators=[DataRequired(), Length(min=2, max=20)])
    # Email Field
    email = StringField('Email', 
                        validators=[DataRequired(), Email()])
    # Password field
    password = PasswordField('Password',
                            validators=[DataRequired])
    # Password confirmation field
    passwordConfirmation = PasswordField('Confirm Password',
                            validators=[DataRequired(), EqualTo('password')])
            