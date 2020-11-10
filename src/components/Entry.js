import React from 'react'
import { Card } from 'react-bootstrap'

export default function Entry({entry}) {

    const {title, content, image} = entry
    return (
        <div className="entry-card">
            <Card className="entry-card"style={{ width: '18rem' }}>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image} />
                <Card.Text className="entry-text">{content}</Card.Text>
            </Card>
        </div>
    )
}
