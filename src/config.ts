const config = {
  site: {
    title: 'Astro Cream',
    lang: 'ko',
  },
  posts: {
    perPage: 15,
  },
  socials: [
    { name: 'github', url: 'https://github.com/orbitnoh/astro-cream' },
    { name: 'mail', url: 'mailto:hello@example.com' },
  ] as const,
};

export default config;
