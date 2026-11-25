export default function sitemap() {
    const baseUrl = "https://example.com";

    return [
        {
            url: baseUrl,
            priority: 1,
        },
        {
            url: `${baseUrl}/services`,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/skin-fade`,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/beard-trim`,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/hot-towel-shave`,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/gallery`,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/booking`,
            priority: 0.8,
        },
    ];
}