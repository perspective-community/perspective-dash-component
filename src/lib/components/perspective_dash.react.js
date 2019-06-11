import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../style/index.css';

/**
 * It renders an input with the property `data`
 * which is editable by the user.
 */
export default class perspective_dash extends Component {
    render() {
        const {id,
               data,
               schema,
               view,
               columns,
               rowpivots,
               columnpivots,
               aggregates,
               sort,
               computedcolumns,
               filters,
               plugin_config,
               plugin_settings,
               embed,
               dark,
               index,
               limit,
               setProps} = this.props;
        const element = (
            <div id={id} className="perspective-container" ref="node">
                <perspective-viewer ref="psp" view={view}></perspective-viewer>
            </div>
        );

        return element;
    }

  renderFromProps(props){
    const {id,
           data,
           schema,
           view,
           columns,
           rowpivots,
           columnpivots,
           aggregates,
           sort,
           computedcolumns,
           filters,
           plugin_config,
           plugin_settings,
           embed,
           dark,
           index,
           limit,
           setProps} = props;

    let psp = ReactDOM.findDOMNode(this.refs.psp);

    // infinite recursion
    let observer = new MutationObserver(psp.notifyResize.bind(psp));
    observer.observe(ReactDOM.findDOMNode(this.refs.node), {attributes: true});

    psp.setAttribute('view', view);
    psp.load(schema);
    psp.update(data);

    if(columns && columns.length > 0){
        psp.setAttribute('columns', JSON.stringify(columns));
    }

    if(rowpivots && rowpivots.length > 0){
        psp.setAttribute('row-pivots', JSON.stringify(rowpivots));
    }

    if(columnpivots && columnpivots.length > 0){
        psp.setAttribute('column-pivots', JSON.stringify(columnpivots));
    }

    if(aggregates && aggregates.length > 0){
        psp.setAttribute('aggregates', JSON.stringify(aggregates));
    }

    if(sort && sort.length > 0){
        psp.setAttribute('sort', JSON.stringify(sort));
    }

    if(computedcolumns && computedcolumns.length > 0){
        psp.setAttribute('computed-columns', JSON.stringify(computedcolumns));
    }

    if(filters && filters.length > 0){
        psp.setAttribute('filters', JSON.stringify(filters));
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
     * The data displayed in the input
     */
    data: PropTypes.array.isRequired,

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
