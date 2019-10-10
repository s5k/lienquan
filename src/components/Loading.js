import React from 'react'

export default ({ children, loading }) => {
  return (
    <>
      {loading === true ? (
        <h1 className="text-center">Vui lòng đợi...</h1>
      ) : (
        children
      )}
    </>
  )
}
