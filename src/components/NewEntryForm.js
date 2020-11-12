import {Component} from 'react'
import {Form, Button} from 'react-bootstrap'

const initialState = {
        title: "",
        content: "",
        image: ""
}

export default class NewEntryForm extends Component {

    state = initialState

    handleChange = (event) => {
        let {name, value} = event.target

        this.setState({
            [name]: value 
        })
    }

    // handleImage = (event) => {
    //     let {value} = event.target
    //     let newValue = value.split("/")
    //     console.log(newValue)
    //     return newValue
    // }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addEntry(this.state)
    }

    render(){
        const {title, content, image} = this.state
        return (
            <div className="form-container">
                <h2>Write Your Thoughts Down!</h2>
                <Form className="create-form" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="entryTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            className="input-title" 
                            type="text"
                            name="title"
                            placeholder="Name your entry"
                            value={title}
                            onChange={this.handleChange}
                        />
                        <Form.Label>Content</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="entry-image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            name="image"
                            placeholder="place image url here"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="entryText">
                        <Form.Label>Content</Form.Label>
                        <Form.Control 
                            className="input-content" 
                            type="text"
                            name="content"
                            placeholder="Write whatever is on your mind..."
                            value={content}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button 
                        variant="light" 
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
