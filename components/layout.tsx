import type {FC, PropsWithChildren} from 'react';

import Meta from './meta'

const Layout: FC<PropsWithChildren<{preview?: boolean}>> = ({ preview, children }) => {
  return (
    <>
      {/*TODO handle meta properly*/}
      {/*<Meta />*/}
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
