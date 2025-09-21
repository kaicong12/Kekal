import { listMotorcycles } from "@/utils/db";

const URL = "https://motorkekal.com";

export default async function sitemap() {
  try {
    const motorcycleData = await listMotorcycles();

    const motorcycles = motorcycleData.map(({ id }) => ({
      url: `${URL}/listing-single-v1/${id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

    const routes = [
      {
        url: `${URL}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily",
        priority: 1.0,
      },
      {
        url: `${URL}/listing`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${URL}/about-us`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${URL}/contact`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
      {
        url: `${URL}/service`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
    ];

    return [...routes, ...motorcycles];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return basic routes if database fails
    return [
      {
        url: `${URL}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily",
        priority: 1.0,
      },
      {
        url: `${URL}/listing`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${URL}/about-us`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: `${URL}/contact`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
      {
        url: `${URL}/service`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
    ];
  }
}
