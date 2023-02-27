import React from 'react'
import './Search.css'
import wallImage from '../../../Assets/mine.png'

const Search = () => {
  return (
    <div className='search'>
      <img src={wallImage} alt="wallpaper image" />
      <div className="input">
        <input   type="text" placeholder='ابحث عن فيلم او مسلسل او ممثل' />
        <i class="fa fa-search"></i>
      </div>
    </div>
  )
}

export default Search