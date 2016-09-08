import * as React from 'react'

import { Button, ListGroup, ListGroupItem, FormControl, InputGroup, FormGroup, Alert } from 'react-bootstrap'

export class View extends React.Component<any, {}> {
    render() {
        var ads = this.props.items.map(function (ad, i) {
            return (
                <ListGroupItem key={i}>{ad.title} {ad.price}</ListGroupItem>
            );
        });

        return <div>
            <h1>Classified Ads</h1>
            <ListGroup>
                {ads}
            </ListGroup>
        </div>
    }
}

