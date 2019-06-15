import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '!!style-loader!css-loader!less-loader!../../style/index.less';

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
               settings,
               embed,
               dark,
               index,
               limit,
               setProps} = this.props;
        const element = (
            <div id={id} className="PSPContainer" ref="node">
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
           settings,
           embed,
           dark,
           index,
           limit,
           setProps} = props;


    if(schema){
      this.schema = schema;
    }
    if(view){
      this.view = view;
    }
    if(columns){
      this.columns = columns;
    }
    if(rowpivots){
      this.rowpivots = rowpivots;
    }
    if(columnpivots){
      this.columnpivots = columnpivots;
    }
    if(aggregates){
      this.aggregates = aggregates;
    }
    if(sort){
      this.sort = sort;
    }
    if(computedcolumns){
      this.computedcolumns = computedcolumns;
    }
    if(filters){
      this.filters = filters;
    }
    if(index){
      this.index = index;
    }
    if(limit){
      this.limit = limit;
    }

    if(data){
      let psp_container = ReactDOM.findDOMNode(this.refs.node);
      while(psp_container.lastChild){
        psp_container.removeChild(psp_container.lastChild);
      }
      var psp = document.createElement("perspective-viewer");
      psp_container.appendChild(psp);

      var options = {};
      if(this.index){
        options["index"] = this.index;
      }
      if(this.limit && this.limit > 0){
        options["limit"] = this.limit;
      }
      if(this.schema){
        psp.load(this.schema, options);
        psp.update(data);
      } else {
        psp.load(data, options);
      }

      if(this.view){
        psp.restore({view:this.view});
      }
      if(this.columns){
        psp.restore({columns:this.columns});
      }
      if(this.rowpivots){
        psp.restore({"row-pivots":this.rowpivots});
      }
      if(this.columnpivots){
        psp.restore({"column-pivots":this.columnpivots});
      }
      if(this.aggregates){
        psp.restore({aggregates:this.aggregates});
      }
      if(this.sort){
        psp.restore({sort:this.sort});
      }
      if(computedcolumns){
        psp.restore({"computed-columns":this.computedcolumns});
      }
      if(this.filters){
        psp.restore({filters:this.filters});
      }
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
    aggregates: PropTypes.object,

    /**
     * Perspective sort
     */
    sort: PropTypes.array,

    /**
     * Perspective computedcolumns
     */
    computedcolumns: PropTypes.array,

    /**
     * Perspective filters
     */
    filters: PropTypes.array,

    /**
     * Perspective sort
     */
    sort: PropTypes.array,

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
