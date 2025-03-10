from flask_wtf import FlaskForm
from wtforms import StringField, FileField, PasswordField, DateField, TextAreaField, SelectField
from wtforms.validators import DataRequired, Email, Length, Optional


# Subscription Request
class CreateSubscriptionRequestForm(FlaskForm):
    data_requested_id = StringField('Datastack ID', id='datastack_id', validators=[DataRequired(), Length(max=64)])
    identity_document = FileField('Identity document', id='identity_document', validators=[DataRequired()])
    authority_document = FileField('Authority document', id='authority_document', validators=[DataRequired()])
    purpose = TextAreaField('Purpose', id='purpose', validators=[DataRequired()])



class ApprovalRejectionForm(FlaskForm):
    remarks = TextAreaField('Remarks', id='req_remarks', name="req_remarks", validators=[DataRequired()])




class DatastackForm(FlaskForm):
    datastack_name    = StringField("Datastack Name", validators=[DataRequired()])
    api_url           = StringField("API URL", validators=[Optional()])
    basic_info        = TextAreaField("Basic Info", validators=[DataRequired()])
    detailed_info     = TextAreaField("Detailed Info", validators=[DataRequired()])
    provider          = StringField("Provider", validators=[DataRequired()])
    thumbnail         = FileField('Thumbnail', id='thumbnail', validators=[DataRequired()])
    url               = StringField("Datastack URL", validators=[DataRequired()])
    metadata_url      = StringField("Metadata URL", validators=[Optional()])
    version           = StringField("Version", validators=[Optional()])
    date_published    = DateField("Date Published", format='%Y-%m-%d', validators=[Optional()])
    last_updated      = DateField("Last Updated", format='%Y-%m-%d', validators=[Optional()])
    sample_data_url   = StringField("Sample Data URL", validators=[Optional()])
    license_url       = StringField("License URL", validators=[Optional()])
    cost_of_service   = StringField("Cost of Service", validators=[Optional()])
    keywords           = TextAreaField("Keywords (comma-separated)", validators=[DataRequired()])
    data_fields        = TextAreaField("Data Fields (JSON format)", validators=[DataRequired()])
    subscription_model = SelectField("Subscription Model (JSON format)",  validators=[DataRequired()], choices=[('free', 'Free'), ('paid', 'Paid')])
    approval_based_model = SelectField("Approval Based Model (JSON format)", validators=[DataRequired()], choices=[('yes', 'Yes'), ('no', 'No')])
