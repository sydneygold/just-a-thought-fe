import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Entry({entry}) {

    const {title, content, image} = entry

    // const entryCard = () => {

    // }
    
    return (
        <div className="entry-card">
            <Card className="entry-card"style={{ width: '21rem' }}>
                <div className="entry-header">
                <Card.Title>{title}</Card.Title>
                <Button variant="light">✎</Button>
                </div>
                <Card.Img className="entry-img" variant="top" src={image} />
                <Card.Text className="entry-text">{content}</Card.Text>
            </Card>
        </div>
    )
}
