import time
import pandas as pd

from getMotorBrand import get_urls
from getMotorCycleData import get_motorcycle_data
from uploadFirebase import upload_file

STOP_IDX = -1
# URL of the motorcycle listing page
urls = get_urls(STOP_IDX)
excel_data = []
for idx, url in enumerate(urls):
    print(f'----- Scraping {url} start -----')
    # get motorcycle data for this brand
    current_motorcycle_data = get_motorcycle_data(url, STOP_IDX)
    excel_data.extend(current_motorcycle_data)
    print(f'----- Scraping {url} end -----')

print(excel_data)

# Convert the scraped data to a DataFrame and save as excel
current_time_epoch = int(time.time())
excel_filename = f'{current_time_epoch}.xlsx'
df = pd.DataFrame(excel_data)
df.to_excel(excel_filename, index=False)

print("Data has been saved to ", excel_filename)
upload_file(excel_filename)
