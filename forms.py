from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField
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
    # Submit button
    submit = SubmitField('Sign Up!')

# Setup a a function to handle login of a user
class LoginForm(FlaskForm):
    # Username field
    username = StringField('Username', 
                         validators=[DataRequired(), Length(min=2, max=20)])
    # Password field
    password = PasswordField('Password', validators=[DataRequired])
    # Prompt for remember login status
    remember = BooleanField('Remember me')
    # Login button
    submit = SubmitField('Log in')
            