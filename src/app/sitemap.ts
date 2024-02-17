import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

    return [
        {
            url: `${URL}/`,
            lastModified: new Date(),
            changeFrequency: "hourly",
            priority: 1,
        },
        {
            url: `${URL}/login`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${URL}/register`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.65,
        },
    ];
}
