import { listMotorcycles } from "@/utils/db";

const URL = "https://motorkekal.com";
 
export default async function sitemap() {
  const motorcycleData = await listMotorcycles()
  
  const motorcycles = motorcycleData.map(({ id }) => ({
    url: `${URL}/listing-single-v1/${id}`,
    lastModified: new Date().toISOString(),
  }));
 
  const routes = ["", "/listing", "/contact", "/service", "/about-us"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes, ...motorcycles];
}