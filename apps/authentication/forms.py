from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, DateField, TextAreaField, SelectField
from wtforms.validators import DataRequired, Email, Length, Optional

# login and registration


class LoginForm(FlaskForm):
    username = StringField('Username',
                         id='username_login',
                         validators=[DataRequired()])
    password = PasswordField('Password',
                             id='pwd_login',
                             validators=[DataRequired()])


class CreateAccountForm(FlaskForm):
    first_name = StringField('First Name', id='first_name', validators=[DataRequired(), Length(max=64)])
    last_name = StringField('Last Name', id='last_name', validators=[DataRequired(), Length(max=64)])
    date_of_birth = DateField('Date of Birth', id='date_of_birth', format='%Y-%m-%d', validators=[DataRequired()])
    username = StringField('Username', id='username', validators=[DataRequired(), Length(max=64)])
    email = StringField('Email', id='email', validators=[DataRequired(), Email(), Length(max=64)])
    phone = StringField('Phone', id='phone', validators=[DataRequired(), Length(max=10)])
    password = PasswordField('Password', id='password', validators=[DataRequired(), Length(min=6)])
    type_of_organization = SelectField("Type of Organization", id="type_of_organization", validators=[DataRequired(), Length(max=128)], choices=[('Government', 'Government'), ('Academic Institutes', 'Academic Institutes'), ('R&D', 'R&D'), ('Individuals', 'Individuals')])
    name_of_organization = StringField('Name of Organization', id='name_of_organization', validators=[Optional(), Length(max=128)])
    country = SelectField("Country", id="country", validators=[DataRequired(), Length(max=64)], choices=[('India', 'India')])
    address = TextAreaField('Address', id='address', validators=[DataRequired()])
    state = SelectField("State", id="state", validators=[DataRequired(), Length(max=64)], choices=[('J&K', 'J&K')])    
    city_town = StringField('City/Town', id='city_town', validators=[DataRequired(), Length(max=64)])
    pincode = StringField('Pincode', id='pincode', validators=[DataRequired(), Length(max=20)])



class EditAccountForm(FlaskForm):
    first_name = StringField('First Name', id='first_name', validators=[DataRequired(), Length(max=64)])
    last_name = StringField('Last Name', id='last_name', validators=[DataRequired(), Length(max=64)])
    date_of_birth = DateField('Date of Birth', id='date_of_birth', format='%Y-%m-%d', validators=[DataRequired()])
    username = StringField('Username', id='username', validators=[DataRequired(), Length(max=64)])
    email = StringField('Email', id='email', validators=[DataRequired(), Email(), Length(max=64)])
    phone = StringField('Phone', id='phone', validators=[DataRequired(), Length(max=10)])
    password = PasswordField('Password', id='password', validators=[DataRequired(), Length(min=6)])
    type_of_organization = SelectField("Type of Organization", id="type_of_organization", validators=[DataRequired(), Length(max=128)], choices=[('Government', 'Government'), ('Academic Institutes', 'Academic Institutes'), ('R&D', 'R&D'), ('Individuals', 'Individuals')])
    name_of_organization = StringField('Name of Organization', id='name_of_organization', validators=[Optional(), Length(max=128)])
    country = SelectField("Country", id="country", validators=[DataRequired(), Length(max=64)], choices=[('India', 'India')])
    address = TextAreaField('Address', id='address', validators=[DataRequired()])
    state = SelectField("State", id="state", validators=[DataRequired(), Length(max=64)], choices=[('J&K', 'J&K')])    
    city_town = StringField('City/Town', id='city_town', validators=[DataRequired(), Length(max=64)])
    pincode = StringField('Pincode', id='pincode', validators=[DataRequired(), Length(max=20)])
