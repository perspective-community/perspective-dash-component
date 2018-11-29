import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* perspective components */
import "@jpmorganchase/perspective-viewer";
import "@jpmorganchase/perspective-viewer-hypergrid";
import "@jpmorganchase/perspective-viewer-highcharts";


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
        return (
            <div id={id}>
                ExampleComponent: {label}&nbsp;
                <input
                    value={value}
                    onChange={e => {
                        /*
                         * Send the new value to the parent component.
                         # setProps is a prop that is automatically supplied
                         * by dash's front-end ("dash-renderer").
                         * In a Dash app, this will send the data back to the
                         * Python Dash app server.
                         * If the component properties are not "subscribed"
                         * to by a Dash callback, then Dash dash-renderer
                         * will not pass through `setProps` and it is expected
                         * that the component manages its own state.
                         */
                         if (setProps) {
                             setProps({
                                value: e.target.value
                            });
                        } else {
                            this.setState({
                                value: e.target.value
                            })
                        }
                    }}
                />
                <span>Test</span>
            </div>
        );
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
