import time
from selenium import webdriver
from selenium.webdriver.common.by import By

# Initialize the Selenium WebDriver (using Chrome in this case)
chromedriver_path = '/opt/homebrew/bin/chromedriver'
driver = webdriver.Chrome()  # Adjust the path to your chromedriver
driver.maximize_window()

# Step 1: Navigate to the page with the motorcycle brands
url = 'https://www.zigwheels.my/new-motorcycles'

def get_urls(STOP_IDX):
    driver.get(url)

    # Step 2: Locate the brand list using the selector for the <ul> element
    brands_list = driver.find_elements(By.CSS_SELECTOR, 'ul.brand-card.m-lg-t.height-hidden li a')

    # Step 3: Extract hrefs from each brand
    brand_links = []
    for i, brand in enumerate(brands_list):
        if STOP_IDX != -1 and i == STOP_IDX:
            break
        href = brand.get_attribute('href')
        brand_links.append(href)

    # Close the browser after scraping
    driver.quit()

    return brand_links