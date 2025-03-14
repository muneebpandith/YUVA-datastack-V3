
import os
from flask import Flask, render_template, jsonify
from flask_migrate import Migrate
from flask_minify  import Minify
from sys import exit


from apps.config import config_dict
from apps import create_app, db


# WARNING: Don't run with debug turned on in production!
DEBUG = (os.getenv('DEBUG', 'False') == 'True')

# The configuration
get_config_mode = 'Debug' if DEBUG else 'Production'

try:
    # Load the configuration using the default values
    app_config = config_dict[get_config_mode.capitalize()]

except KeyError:
    exit('Error: Invalid <config_mode>. Expected values [Debug, Production] ')



#app = Flask(__name__)
app = create_app(app_config)
Migrate(app, db)

print('*** Debug is :', DEBUG)
if not DEBUG:
    #print("777")
    Minify(app=app, html=True, js=True, cssless=True)


    app.logger.info('DEBUG            = ' + str(DEBUG)             )
    app.logger.info('Page Compression = ' + 'FALSE' if DEBUG else 'TRUE' )
    app.logger.info('DBMS             = ' + app_config.SQLALCHEMY_DATABASE_URI)
    app.logger.info('ASSETS_ROOT      = ' + app_config.ASSETS_ROOT )



#Chart.generate_line_chart()




if __name__ == "__main__":
    app.run("0.0.0.0", port=8080, debug=True)
