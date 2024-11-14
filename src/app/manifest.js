export default function manifest() {
    return {
      name: 'Sun-digital',
      short_name: 'Sun-digital',
      description: 'Sun-digital',
      start_url: '/',
      display: 'standalone',
    //   background_color: '#fff',
    //   theme_color: '#fff',
      icons: [
        {
          src: '/sundigital.png',
          sizes: '32x32',
          type: 'image/png',
        },
          {
          src: '/sundigital.png',
          sizes: '16x16',
          type: 'image/png',
        },
            {
          src: '/sundigital.png',
          sizes: '192x192',
          type: 'image/png',
        },
            {
          src: '/sundigital',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }