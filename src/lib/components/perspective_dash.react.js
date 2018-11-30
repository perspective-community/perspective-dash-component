import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../style/index.css';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class perspective_dash extends Component {
    render() {
        const {id, label, setProps, value} = this.props;

        const element = (
            <div id={id} className="perspective-container">
                Perspective: {label}&nbsp;
                <perspective-viewer></perspective-viewer>
            </div>
        );

        return element;
    }
  componentDidMount() {
    const {id, label, setProps, value} = this.props;
    let psp = document.getElementById(id).querySelector('perspective-viewer');
    console.log(value);

    psp.load(JSON.parse(value));
    psp.style.height = '500px';
    psp.style.width = '500px';
  }
}


perspective_dash.defaultProps = {};

perspective_dash.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input
     */
    value: PropTypes.json,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
