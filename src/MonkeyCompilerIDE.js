import React, {Component}  from 'react'
import * as bootstrap from 'react-bootstrap'

class MonkeyCompilerIDE extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        //return super.render();
        let textAreaStyle = {
            height: 480
        };
        return (
            <bootstrap.Panel header="Monkey Compiler" bsStyle="success">
                <bootstrap.FormGroup>
                    <bootstrap.FormControl componentClass="textarea" style={textAreaStyle}
                                           placeholder="Enter your code"/>
                </bootstrap.FormGroup>
                <bootstrap.Button bsStyle="danger">
                    Lexing
                </bootstrap.Button>
            </bootstrap.Panel>
        );
    }
}

export default MonkeyCompilerIDE
