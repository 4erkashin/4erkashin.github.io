import type { FC } from 'react';

import DateFormatter from './date-formatter'
import PostTitle from './post-title'
import type { Post } from 'lib/posts';

const PostHeader: FC<Pick<Post, 'title'|'date'>> = ({ title, date }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}

export default PostHeader
