import React from 'react'
import tw, { styled } from 'twin.macro'

const Header = styled.div`
  ${tw`font-bold text-4xl text-key-100 font-sans`}
`
function Text() {
  return (
    <Header>
      <div>sample test</div>
    </Header>
  )
}
export default Text
