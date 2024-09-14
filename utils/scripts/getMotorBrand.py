import time
from selenium import webdriver
from selenium.webdriver.common.by import By

def open_browser():
    chromedriver_path = '/opt/homebrew/bin/chromedriver'
    driver = webdriver.Chrome() 
    driver.maximize_window()
    return driver

# Step 1: Navigate to the page with the motorcycle brands
url = 'https://www.zigwheels.my/new-motorcycles'

def get_urls(STOP_IDX):
    driver = open_browser()
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

def get_models(STOP_IDX):
    urls = get_urls(STOP_IDX)
    print(urls)

    results = []
    for url in urls:
        driver = open_browser()
        driver.get(url)
        time.sleep(3)  # Wait for the page to load

        # List to store the individual motorcycle page links
        motorcycle_links = []
        links = driver.find_elements(By.CSS_SELECTOR, 'a.vh-name')
        for link in links:
            href = link.get_attribute('href')
            motorcycle_links.append(href)
        
        results.extend(motorcycle_links)
        # Close the browser after collecting links
        driver.quit()
    
    return results


if __name__ == "__main__":
    brand_links = get_models(1)
    print(brand_links)