import type {FC, PropsWithChildren} from 'react';

const PostTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="text-5xl mb-4 text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
