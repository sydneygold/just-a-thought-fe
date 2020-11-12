import React from 'react'
import { Jumbotron, Navbar } from 'react-bootstrap'
import Entry from './Entry'

export default function Journal({entries, updateEntry}) {

    const showEntries = () => {
        return entries.map(entry => <Entry
            key={entry.id} 
            entry={entry} 
            updateEntry={updateEntry}
        />)
    }

    return (
        <>
            <div className="second-header">
            <Navbar>
                <img src="https://cutekawaiiresources.files.wordpress.com/2013/03/kawaii_angler_fish_icon_by_xxscarletbutterflyxx.gif" alt=""/>

            </Navbar>
            <h1>Your Journal Entries</h1>
            </div>
                <Jumbotron className="journal">
                    {showEntries()}
            </Jumbotron>
        </>
    )
}
