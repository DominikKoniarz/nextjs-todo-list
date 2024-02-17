import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

    return {
        rules: {
            userAgent: "*",
            disallow: "/todos/",
        },
        sitemap: `${URL}/sitemap.xml`,
    };
}
