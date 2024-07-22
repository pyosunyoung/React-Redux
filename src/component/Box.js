import React from 'react'
import { useSelector } from 'react-redux'
import GrandSonBox from './GrandSonBox'

const Box = () => {
    let count = useSelector(state=>state.count)
  return (
    <div>
      this is Box {count}
      <GrandSonBox/>
    </div>
  )
}
// 그냥 값을 가져오고 싶으면 useSelector통해서 값 가져오면 됨 
// <Box count={count}/>이렇게 넘겨줄 필요가 없어진것
// 이제 props 보낼 필요가 없어짐 편해짐
export default Box
