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
        const {id, label, value, view, columns, rowpivots, columnpivots, aggregates, index, limit, setProps} = this.props;
        const element = (
            <div id={id} className="perspective-container" ref="node">
                <perspective-viewer ref="psp" view={view}></perspective-viewer>
            </div>
        );

        return element;
    }

  renderFromProps(props){
    const {id, label, value, view, columns, rowpivots, columnpivots, aggregates, index, limit, setProps} = props;
    let psp = ReactDOM.findDOMNode(this.refs.psp);
    console.log(value);

    // infinite recursion
    let observer = new MutationObserver(psp.notifyResize.bind(psp));
    observer.observe(ReactDOM.findDOMNode(this.refs.node), {attributes: true});

    psp.load(value);
    psp.setAttribute('view', view);

    if(columns && columns.length > 0){
        psp.setAttribute('columns', JSON.stringify(columns));
        console.log('columns');
        console.log(columns);
    }

    if(rowpivots && rowpivots.length > 0){
        psp.setAttribute('rowpivots', JSON.stringify(rowpivots));
    }

    if(columnpivots && columnpivots.length > 0){
        psp.setAttribute('columnpivots', JSON.stringify(columnpivots));
    }

    if(aggregates && aggregates.length > 0){
        psp.setAttribute('aggregates', JSON.stringify(aggregates));
    }

    if(index){
        psp.setAttribute('index', index);
    }

    if(limit){
        psp.setAttribute('limit', limit);
    }
  }

  componentDidMount() {
    this.renderFromProps(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.renderFromProps(newProps);
  }
}


perspective_dash.defaultProps = {};

perspective_dash.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * The value displayed in the input
     */
    value: PropTypes.array.isRequired,

    /**
     * Perspective view
     */
    view: PropTypes.string,

    /**
     * Perspective columns
     */
    columns: PropTypes.array,

    /**
     * Perspective rowpivots
     */
    rowpivots: PropTypes.array,

    /**
     * Perspective columnpivots
     */
    columnpivots: PropTypes.array,

    /**
     * Perspective aggregates
     */
    aggregates: PropTypes.array,

    /**
     * Perspective index
     */
    index: PropTypes.string,

    /**
     * Perspective limit
     */
    limit: PropTypes.number,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
