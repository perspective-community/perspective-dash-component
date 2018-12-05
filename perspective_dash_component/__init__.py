from __future__ import print_function as _
import os as _os
import sys as _sys
import json
import dash as _dash

# noinspection PyUnresolvedReferences
from ._imports_ import *
from ._imports_ import __all__

from dash.development.base_component import Component
from perspective import PerspectiveBaseMixin

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
        'dev_package_path': 'perspective_dash_component.min.js',
        'external_url': 'https://unpkg.com/{0}@{2}/{1}/{1}.min.js'.format(
            package_name, __name__, __version__),
        'namespace': package_name
    }
]

_css_dist = []


for _component in __all__:
    setattr(locals()[_component], '_js_dist', _js_dist)
    setattr(locals()[_component], '_css_dist', _css_dist)


class PerspectiveDash(perspective_dash):
    def __init__(self,
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
                 settings=True,
                 embed=False,
                 dark=False,
                 id=None,
                 *args,
                 **kwargs):
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
                                settings=settings,
                                embed=embed,
                                dark=dark,
                                *args,
                                **kwargs)

        super(PerspectiveDash, self).__init__(id=id,
                                              data=self._perspective._data,
                                              view=self._perspective.view,
                                              columns=self._perspective.columns,
                                              rowpivots=self._perspective.rowpivots,
                                              columnpivots=self._perspective.columnpivots,
                                              aggregates=self._perspective.aggregates,
                                              index=self._perspective.index,
                                              limit=self._perspective.limit,
                                              *args,
                                              **kwargs)
