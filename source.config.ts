import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { remarkMdxMermaid } from 'fumadocs-core/mdx-plugins/remark-mdx-mermaid';
import { remarkSteps } from 'fumadocs-core/mdx-plugins/remark-steps';

export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid, remarkSteps],
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'vesper',
      },
    },
  },
});
