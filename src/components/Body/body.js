import React from 'react'
import { Card } from '../Body/Card_part/Card'
import "../Body/body.css"


export const Body = () => {
    return (
        <div className='body'>
        <div className='body_title'>الاكثر مشاهده</div>
        <div className='body_cards'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        </div>
    )
}
