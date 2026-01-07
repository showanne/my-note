<template>
  <div class="related-and-next-posts">
    <!-- Related Posts Section -->
    <div v-if="resolvedRelated && resolvedRelated.length > 0" class="related-posts-section">
      <h3>相關文章</h3>
      <ul>
        <li v-for="(post, index) in resolvedRelated" :key="index">
          <a :href="post.path">{{ post.title }}</a>
        </li>
      </ul>
    </div>

    <!-- Next Post Section -->
    <div v-if="nextPost" class="next-post-section">
      <h3>繼續閱讀</h3>
      <a :href="nextPost.link">{{ nextPost.text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RelatedAndNextPosts',
  computed: {
    frontmatter() {
      return this.$page.frontmatter;
    },
    related() {
      return this.frontmatter.related;
    },
    nextPost() {
      return this.frontmatter.nextPost;
    },
    resolvedRelated() {
      const posts = this.$site.pages;
      if (!this.related) return [];
      
      return this.related
        .map(relPath => {
          // Sanitize the path from frontmatter to make it robust.
          // 1. Remove the potential '/my-note/' base path prefix.
          // 2. Remove the .md or .html file extension.
          const sanitizedRelPath = relPath
            .replace(/^\/my-note/, '')
            .replace(/\.(md|html)$/, '');

          const found = posts.find(p => {
            // Sanitize the page's path for comparison by removing the extension.
            const sanitizedPagePath = p.path.replace(/\.html$/, '');
            return sanitizedPagePath === sanitizedRelPath;
          });
          
          if (found) {
            return {
              title: found.title,
              path: found.path
            };
          }
          return null;
        })
        .filter(p => p);
    }
  }
};
</script>

<style scoped>
.related-and-next-posts {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--borderColor, #eaecef);
}

.related-posts-section,
.next-post-section {
  margin-bottom: 2rem;
}

h3 {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 0.5rem;
}

a {
  font-weight: 500;
  color: var(--accentColor, #3eaf7c);
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  text-decoration: underline;
}
</style>
