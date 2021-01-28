import React from 'react'
import tw, { styled } from 'twin.macro'

const Header = styled.div`
  ${tw`font-bold text-4xl text-key-100 font-sans`}
`
function Text() {
  return (
    <>
      <Header>
        <div>sample test</div>
      </Header>
      <div className="flex">
        <div className="flex-1 ...">
          Will grow and shrink as needed without taking initial size into
          account
        </div>
        <div className="flex-1 ...">
          Will grow and shrink as needed without taking initial size into
          account
        </div>
        <div className="flex-1 ...">
          Will grow and shrink as needed without taking initial size into
          account
        </div>

        <ul className="space-y-4">
          <li>
            <div className="w-64 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-56 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-48 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-40 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-32 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-24 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-20 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-16 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-12 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-10 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Text
