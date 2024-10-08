export default function sitemap() {
    return [
      {
        url: 'https://yourwebsite.com',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://yourwebsite.com/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://yourwebsite.com/services',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: 'https://yourwebsite.com/work',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://yourwebsite.com/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
  
    ]
  }