import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type {FC} from 'react';
import type {Post} from 'lib/posts';

const PostPreview: FC<Pick<Post, 'title'|'date'|'id'>> = ({
  title,
  // coverImage,
  date,
  // excerpt,
  // author,
  id,
}) => {
  return (
    <div>
      <div className="mb-5">
        CoverImage
        {/*TODO*/}
        {/*<CoverImage slug={slug} title={title} src={coverImage} />*/}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${id}`} href="/posts/[id]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      {/*TODO*/}
      {/*<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />*/}
    </div>
  )
}

export default PostPreview
