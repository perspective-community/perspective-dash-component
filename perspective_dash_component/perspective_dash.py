# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class perspective_dash(Component):
    """A perspective_dash component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `data`
which is editable by the user.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- data (list; required): The data displayed in the input
- view (string; optional): Perspective view
- columns (list; optional): Perspective columns
- rowpivots (list; optional): Perspective rowpivots
- columnpivots (list; optional): Perspective columnpivots
- aggregates (list; optional): Perspective aggregates
- index (string; optional): Perspective index
- limit (number; optional): Perspective limit

Available events: """
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.REQUIRED, view=Component.UNDEFINED, columns=Component.UNDEFINED, rowpivots=Component.UNDEFINED, columnpivots=Component.UNDEFINED, aggregates=Component.UNDEFINED, index=Component.UNDEFINED, limit=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'view', 'columns', 'rowpivots', 'columnpivots', 'aggregates', 'index', 'limit']
        self._type = 'perspective_dash'
        self._namespace = 'perspective_dash_component'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['id', 'data', 'view', 'columns', 'rowpivots', 'columnpivots', 'aggregates', 'index', 'limit']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['data']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(perspective_dash, self).__init__(**args)

    def __repr__(self):
        if(any(getattr(self, c, None) is not None
               for c in self._prop_names
               if c is not self._prop_names[0])
           or any(getattr(self, c, None) is not None
                  for c in self.__dict__.keys()
                  if any(c.startswith(wc_attr)
                  for wc_attr in self._valid_wildcard_attributes))):
            props_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self._prop_names
                                      if getattr(self, c, None) is not None])
            wilds_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self.__dict__.keys()
                                      if any([c.startswith(wc_attr)
                                      for wc_attr in
                                      self._valid_wildcard_attributes])])
            return ('perspective_dash(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'perspective_dash(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
