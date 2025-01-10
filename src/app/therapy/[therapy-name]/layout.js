// export default async function ({ children }) {
//   return <div className="py-[6rem]">{children}</div>;
// }

import React from 'react'

const layout = ({ children }) => {
  return (
    <div className="py-[6rem]">{children}</div>
  )
}

export default layout