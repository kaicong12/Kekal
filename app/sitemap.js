import { listMotorcycles } from "@/utils/db";

const URL = "https://motorkekal.com";
 
export default async function sitemap() {
  const motorcycles = listMotorcycles.map(({ id }) => ({
    url: `${URL}/listing-single-v1/${id}`,
    lastModified: new Date().toISOString(),
  }));
 
  const routes = ["", "/listing", "/listing-single-v1", "/about-us"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes, ...motorcycles];
}