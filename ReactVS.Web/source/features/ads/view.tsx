//third-party imports
import * as React from 'react'
import { Button, ListGroup, ListGroupItem, FormControl, InputGroup, FormGroup, Alert } from 'react-bootstrap'

//stateless view
export class View extends React.Component<{items:any[]}, {}>
{
    render() {
        var ads = this.props.items.map(function (ad, i) {
            return (
                <ListGroupItem key={i}>{ad.Title} {ad.Price}</ListGroupItem>
            );
        });

        return <div>
            <ListGroup>
                {ads}
            </ListGroup>
        </div>
    }
}
