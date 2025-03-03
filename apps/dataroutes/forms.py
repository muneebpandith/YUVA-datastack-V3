from flask_wtf import FlaskForm
from wtforms import StringField, FileField, PasswordField, DateField, TextAreaField
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
    basic_info        = TextAreaField("Basic Info", validators=[Optional()])
    detailed_info     = TextAreaField("Detailed Info", validators=[Optional()])
    provider          = StringField("Provider", validators=[Optional()])
    thumbnail         = StringField("Thumbnail URL", validators=[Optional()])
    url               = StringField("Datastack URL", validators=[Optional()])
    metadata_url      = StringField("Metadata URL", validators=[Optional()])
    version           = StringField("Version", validators=[Optional()])
    date_published    = DateField("Date Published", format='%Y-%m-%d', validators=[Optional()])
    last_updated      = DateField("Last Updated", format='%Y-%m-%d', validators=[Optional()])
    sample_data_url   = StringField("Sample Data URL", validators=[Optional()])
    license_url       = StringField("License URL", validators=[Optional()])
    cost_of_service   = StringField("Cost of Service", validators=[Optional()])

    keywords           = TextAreaField("Keywords (comma-separated)", validators=[Optional()])
    data_fields        = TextAreaField("Data Fields (JSON format)", validators=[Optional()])
    subscription_model = TextAreaField("Subscription Model (JSON format)", validators=[Optional()])
    approval_based_model = TextAreaField("Approval Based Model (JSON format)", validators=[Optional()])
