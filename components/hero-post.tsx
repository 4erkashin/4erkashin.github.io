import type {FC, PropsWithChildren} from 'react';
import type {Post} from 'lib/posts';
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

const HeroPost: FC<PropsWithChildren<Pick<Post, 'title'|'coverImage'|'date'|'excerpt'|'id'>>> = ({
  title,
  coverImage,
  date,
  excerpt,
  id,
}) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={id} />
      </div>

      <div className="flex flex-col md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
          <Link as={`/posts/${id}`} href="/posts/[id]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>

        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>

        <DateFormatter className="text-lg" dateString={date} />
      </div>
    </section>
  )
}

export default HeroPost
