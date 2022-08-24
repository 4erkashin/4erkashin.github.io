import type {FC} from 'react';
import type {Post} from 'lib/posts';

import PostPreview from './post-preview'

const MoreStories: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            // coverImage={post.coverImage}
            date={post.date}
            // author={post.author}
            id={post.id}
            // excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
