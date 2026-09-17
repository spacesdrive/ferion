import mcpIsDeadCover from '../assets/blog-mcp-is-dead.webp';

export const blog = {
  profileUrl: 'https://medium.com/@ujjwal_kumar_rai',
  platform: 'Medium',
};

// readingTime is optional; leave it out unless it is known for the article.
export const posts = [
  {
    slug: 'mcp-is-dead',
    title: 'MCP is Dead',
    excerpt:
      'MCP was marketed as infrastructure. The "USB-C for AI." Something that would just exist in the background.',
    published: 'Jun 2026',
    tags: ['Claude Code'],
    url: 'https://medium.com/@ujjwal_kumar_rai/mcp-is-dead-30e1045e5916',
    cover: mcpIsDeadCover,
  },
];
