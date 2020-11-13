import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Entry from './Entry'

export default function Journal({entries, updateEntry, deleteEntry}) {

    const showEntries = () => {
        return entries.map(entry => <Entry
            key={entry.id} 
            entry={entry} 
            updateEntry={updateEntry}
            deleteEntry={deleteEntry}
        />)
    }

    return (
        <>
            <div className="second-header">
            <h1>Your Journal Entries</h1>
            </div>
                <Jumbotron className="journal">
                    {showEntries()}
            </Jumbotron>
        </>
    )
}
