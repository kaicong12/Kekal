import time
import json
import threading

from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup


# Define timeout in seconds (5 minutes = 300 seconds)
TIMEOUT = 300
def open_browser():
    chromedriver_path = '/opt/homebrew/bin/chromedriver'
    driver = webdriver.Chrome() 
    driver.maximize_window()
    return driver


def scrape_motorcycle_data(driver, link, current_model, motorcycle_data):
    """Function to scrape data for one motorcycle"""
    try:
        # Navigate to the individual motorcycle page
        driver.get(link)
        time.sleep(2)  # Wait for the page to load

        motorcycle_soup = BeautifulSoup(driver.page_source, 'html.parser')
        name = motorcycle_soup.select_one('body > div.p-rel.o-hidden > div > div > div.overview-info-right > section > h1').text.strip()
        price = motorcycle_soup.select_one('span.f-16.f-bold.vh-price').text.strip()
        description = motorcycle_soup.select_one('body > main > div > div.col-2 > div.read-more-less.m-lg-b > p').text.strip()

        print(name, price, description, 'this is name price and desc')

        carousel_images = []
        try:
            tab_to_image_tab = driver.find_element(By.CSS_SELECTOR, 'body > div.p-rel.o-hidden > div > div > div.bg-white.model-image-carousel > ul > li:nth-child(1) > a')
            image_gallery_url = tab_to_image_tab.get_attribute('href')
            specs_a_tag = driver.find_element(By.CSS_SELECTOR, 'body > nav > div > div > ul > li:nth-child(7) > a')
            specs_url = specs_a_tag.get_attribute('href')

            # first collect all the images from the gallery
            driver.get(image_gallery_url) 
            time.sleep(2)

            for _ in range(10):
                # Scroll down in small increment to load lazy-loaded images
                driver.execute_script("window.scrollBy(0, 1000);")
                time.sleep(2);
            
            # Collect all the images from the figure tags
            image_elements = driver.find_elements(By.CSS_SELECTOR, '#exterior > div.m-md-t > figure > img')
            for img in image_elements:
                img_url = img.get_attribute('src')
                carousel_images.append(img_url)

        except Exception as e:
            print(f"Error retrieving images for {name}: {e}")

        if not carousel_images:
            return

        # Close the browser after scraping images
        driver.quit()
            
        # Open a new browser session for scraping specifications
        driver = open_browser()

        # 2. Collect specs after collecting images
        driver.get(specs_url) 
        time.sleep(2)

        specs_soup = BeautifulSoup(driver.page_source, 'html.parser')
        specs_list = specs_soup.find('ul', class_='list-feature active')

        # Store the specifications in a dictionary
        specs = {}
        for li in specs_list.find_all('li'):
            key = li.find('span').text.strip()
            value = li.find('span', class_='f-bold t-right').text.strip()
            specs[key] = value


        motorcycle_data.append({
            'Name': name,
            'Brand': current_model,
            'Price': price,
            'Description': description,
            'Specifications': json.dumps(specs),
            'Images': json.dumps(carousel_images)
        })

    except Exception as e:
        print(f"Error processing {link}: {e}")
        return  # Move to the next motorcycle if any error occurs
    finally:
        # Close the browser after scraping
        driver.quit()


def get_motorcycle_data(url, stop_idx):
    driver = open_browser()
    driver.get(url)
    time.sleep(3)  # Wait for the page to load

    # List to store the individual motorcycle page links
    motorcycle_links = []
    links = driver.find_elements(By.CSS_SELECTOR, 'a.vh-name')
    for link in links:
        href = link.get_attribute('href')
        motorcycle_links.append(href)
    
    # Close the browser after collecting links
    driver.quit()

    motorcycle_data = []
    current_model = url.split('/')[-1].capitalize()
    for idx, link in enumerate(motorcycle_links):
        if stop_idx != -1 and idx == stop_idx:
            break

        # Open a new browser for each motorcycle link
        driver = open_browser()

        # Run the scraping in a separate thread
        scrape_thread = threading.Thread(target=scrape_motorcycle_data, args=(driver, link, current_model, motorcycle_data))
        scrape_thread.start()

        # Wait for the thread to finish, with a maximum timeout of 5 minutes (300 seconds)
        scrape_thread.join(TIMEOUT)

         # If the thread is still alive after the timeout, skip to the next motorcycle
        if scrape_thread.is_alive():
            print(f"Timeout occurred for motorcycle {link}, skipping to the next.")
            driver.quit()  # Ensure the browser is closed
            continue
        

    return motorcycle_data
