from werkzeug.utils import secure_filename
import os
from apps.config import Config
import filetype
import time
import random

class UploaderDownloader:

    def __init__(self):
        self.c = Config()
        self.saving_path = '.'+self.c.UPLOADS_ROOT
        self.saving_path_assets = self.c.ASSETS_ROOT
        self.code_root = self.c.CODE_ROOT

        #print('THUMBNAIL SAVING AT', "."+self.code_root+self.saving_path_assets+"/images/")
        if not os.path.exists(self.saving_path ):
            os.makedirs(self.saving_path )

    def upload(self, fn = "dummy.pdf", df = ""):
        try:
            df.save(self.saving_path+"/"+fn)
            #print('SAVING IN',self.saving_path+"/"+fn )
            return "0", fn
        except Exception as e:
            return "1", e

    def upload_thumbnail(self, fn = "dummy.png", df = ""):
        try:
            df.save("."+self.code_root+self.saving_path_assets+"/images/"+fn)
            #print('SAVING IN',self.saving_path+"/"+fn )
            return "0", self.saving_path_assets+"/images/"+fn
        except Exception as e:
            return "1", e

    def file_size_valid(self, df):
        if df.content_length > int(self.c.MAX_UPLOAD_SIZE):
            return False
        else:
            return True

    def file_type_valid(self, df, validated_filetypes=[]):
        file_bytes = df.read(2048)
        df.seek(0)  # Reset file pointer for saving     
        kind = filetype.guess(file_bytes)
        if not kind:
            return False
        elif not kind.mime in validated_filetypes:
            return False
        return True    
    
    def check_pdf_exists(self, fn):
        try:
            if fn in list(os.listdir(self.saving_path)):
                return True
            else:
                return False
        except Exception as e:
            return False

 
    def return_static_saving_path(self):
        print('sendiong',os.path.abspath(self.saving_path) )
        return str(os.path.abspath(self.saving_path))


