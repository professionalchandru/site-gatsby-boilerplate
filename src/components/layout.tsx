import React from 'react'

type DataProps = {
    children: React.ReactNode
}

const Layout:React.FC = ({children}) => {
  return (
    <>
        {children}
    </>
  )
}

export default Layout