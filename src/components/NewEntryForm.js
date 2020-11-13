import {Component} from 'react'
import {Form, Button} from 'react-bootstrap'

const initialState = {
        title: "",
        content: "",
        image: ""
}

export default class NewEntryForm extends Component {

    state = initialState

    componentDidMount(){
        const {entry} = this.props
        if(this.props.entry){
            const {id, title, content, image} = entry
            this.setState({
                id,
                title,
                content,
                image
            })
        }
    }

    handleChange = (event) => {
        let {name, value} = event.target

        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        this.props.submitAction(this.state)
        if(this.props.handleToggle){
            this.props.handleToggle()
        }
    }

    returnButton = () => {
        this.props.handleToggle()
    }

    ifEditForm = () => {
        return (
            <div>
                <h2>Need to make some changes?</h2> 
                <Button variant="light" onClick={this.returnButton}>↩</Button>
            </div>
        )
    }

    render(){
        const {title, content} = this.state
        return (
            <div className="form-container">
                {this.props.entry 
                    ? this.ifEditForm()
                    : <h2>Write Your Thoughts Down!</h2>}
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
