import React from 'react'

export default ({ error, children }) => {
  return (
    <>
      {error !== false ? (
        <div className="text-center">
          <h1>Đã có lỗi xảy ra</h1>
          <h3>{error}</h3>
        </div>
      ) : (
        children
      )}
    </>
  )
}
