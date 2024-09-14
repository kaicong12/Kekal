import json
from datetime import datetime

from google.cloud import storage as gStorage
from google.oauth2 import service_account
import firebase_admin
from firebase_admin import credentials, firestore

# Step 1: Initialize Firebase app with the credentials
firebase_credentials_path = '/Users/kctey/Kekal/keys/motorkekal-18db6-firebase-adminsdk-xuq7j-36fad52c55.json'  # Replace with your Firebase JSON credentials
google_credential_path = '/Users/kctey/Kekal/keys/motorkekal-18db6-31a99cf31bfa-google.json'
cred = credentials.Certificate(firebase_credentials_path)
firebase_admin.initialize_app(cred)

db = firestore.client()

# Enable Cloud Storage
with open(google_credential_path) as source:
    info = json.load(source)

project_id = 'motorkekal-18db6'
storage_credentials = service_account.Credentials.from_service_account_info(info)
storage_client = gStorage.Client(project=project_id, credentials=storage_credentials)
bucket = storage_client.get_bucket('motorkekal-18db6.appspot.com')


def upload_file(filename):
    blob = bucket.blob(f'productSyncFiles/{filename}')
    blob.upload_from_filename(filename)
    
    # Step 6: Get the public URL of the uploaded file
    file_url = blob.public_url

    # Step 7: Create an entry in Firestore under the "productSyncFiles" collection
    firestore_entry = {
        'fileUrl': file_url,
        'createdAt': datetime.now(),  # Current timestamp
        'isProcessed': False,  # Default value is False, assuming the file isn't processed yet
        'error': None  # Default value is None, assuming no errors at this stage
    }

    # Add a new document in Firestore
    db.collection('productSyncFiles').add(firestore_entry)

    # Optional: Clean up local files if needed
    # os.remove(filename)

    print('Excel file uploaded to Firebase Storage and Firestore entry created!')
