from __future__ import print_function as _

import os as _os
import sys as _sys
import json

import dash as _dash  # noqa: F401

# noinspection PyUnresolvedReferences
from ._imports_ import *  # noqa: F401, F403
from ._imports_ import __all__
from perspective import PerspectiveBaseMixin


if not hasattr(_dash, 'development'):
    print('Dash was not successfully imported. '
          'Make sure you don\'t have a file '
          'named \n"dash.py" in your current directory.', file=_sys.stderr)
    _sys.exit(1)

_basepath = _os.path.dirname(__file__)
_filepath = _os.path.abspath(_os.path.join(_basepath, 'package.json'))
with open(_filepath) as f:
    package = json.load(f)

package_name = package['name'].replace(' ', '_').replace('-', '_')
__version__ = package['version']

_current_path = _os.path.dirname(_os.path.abspath(__file__))

_this_module = _sys.modules[__name__]


_js_dist = [
    {
        'relative_package_path': 'perspective_dash_component.min.js',
        'dev_package_path': 'perspective_dash_component.dev.js',
        'external_url': 'https://unpkg.com/{0}@{2}/{1}/{1}.min.js'.format(
            package_name, __name__, __version__),
        'namespace': package_name
    }
]

_css_dist = []


for _component in __all__:
    setattr(locals()[_component], '_js_dist', _js_dist)
    setattr(locals()[_component], '_css_dist', _css_dist)

class PerspectiveDash(perspective_dash):  # noqa: F405
    def __init__(self,
                 id,
                 data,
                 view='hypergrid',
                 schema=None,
                 columns=None,
                 rowpivots=None,
                 columnpivots=None,
                 aggregates=None,
                 sort=None,
                 index='',
                 limit=-1,
                 computedcolumns=None,
                 filters=None,
                 plugin_config=None,
                 settings=True,
                 embed=False,
                 dark=False,
                 transfer_as_arrow=False,
                 *args,
                 **kwargs):
        '''Setup perspective base class

        Arguments:
            data : dataframe/list/dict
                The static or live datasource

        Keyword Arguments:
            view : str or View
                what view to use. available in the enum View (default: {'hypergrid'})
            columns : list of str
                what columns to display
            rowpivots : list of str
                what names to use as rowpivots
            columnpivots : list of str
                what names to use as columnpivots
            aggregates:  dict(str: str or Aggregate)
                dictionary of name to aggregate type (either string or enum Aggregate)
            index : str
                columns to use as index
            limit : int
                row limit
            computedcolumns : list of dict
                computed columns to set on the perspective viewer
            filters: list of list
                list of filters to apply to columns
            plugin_config: dict
                configuration dictionary to pass to perspective plugin
            settings : bool
                display settings
            embed : bool
                embedded mode
            dark : bool
                use dark theme

        '''
        self._perspective = PerspectiveBaseMixin()
        self._perspective.setup(data=data,
                                view=view,
                                schema=schema,
                                columns=columns,
                                rowpivots=rowpivots,
                                columnpivots=columnpivots,
                                aggregates=aggregates,
                                sort=sort,
                                index=index,
                                limit=limit,
                                computedcolumns=computedcolumns,
                                filters=filters,
                                plugin_config=plugin_config,
                                settings=settings,
                                embed=embed,
                                dark=dark,
                                transfer_as_arrow=transfer_as_arrow,
                                *args,
                                **kwargs)

        super(PerspectiveDash, self).__init__(id=id,
                                              data=self._perspective._data,
                                              view=self._perspective.view,
                                              schema=self._perspective.schema,
                                              columns=self._perspective.columns,
                                              rowpivots=self._perspective.rowpivots,
                                              columnpivots=self._perspective.columnpivots,
                                              aggregates=self._perspective.aggregates,
                                              sort=self._perspective.sort,
                                              index=self._perspective.index,
                                              limit=self._perspective.limit,
                                              computedcolumns=self._perspective.computedcolumns,
                                              filters=self._perspective.filters,
                                              plugin_config=self._perspective.plugin_config,
                                              settings=self._perspective.settings,
                                              embed=self._perspective.embed,
                                              dark=self._perspective.dark,
                                              transfer_as_arrow=self._perspective.transfer_as_arrow,
                                              *args,
                                              **kwargs)
