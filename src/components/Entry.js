import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import NewEntryForm from './NewEntryForm'

export default function Entry({entry, deleteEntry, updateEntry}) {

    const [isToggled, setIsToggled] = useState(false)
    const handleToggle = (event) => setIsToggled(!isToggled)
    const {id, title, content, image} = entry
    const handleDelete = (event) => deleteEntry(id)
    
    const entryCard = () => {
        return (
            <div className="entry-card">
                <Card className="entry-card"style={{ width: '21rem' }}>
                    <div className="entry-header">
                    <Card.Title>{title}</Card.Title>
                    <Button variant="light" onClick={handleDelete}>
                    ☒
                    </Button>
                    <Button variant="light" onClick={handleToggle}>
                        ✎
                    </Button>
                    </div>
                    <Card.Img className="entry-img" variant="top" src={image} />
                    <Card.Text className="entry-text">{content}</Card.Text>
                </Card>
            </div>
        )
    }

    const formCard = () => {
        return (
            <div>
                <Card>
                    <NewEntryForm 
                        className="edit-form"
                        entry={entry} 
                        submitAction={updateEntry}
                        handleToggle={handleToggle}
                    />
                </Card>
            </div>
        )
    }


    return isToggled ? formCard() : entryCard()
}
