# -*- coding: utf-8 -*-
import flask
import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
from perspective_dash_component import perspective_dash
import pyEX as p

# Default data
symbols = p.symbols()
default_data = p.chartDF('JPM', '6m').to_dict(orient='records')

# dash
server = flask.Flask(__name__)
app = dash.Dash(__name__, server=server)

app.layout = html.Div(children=[
    html.H1(children='Perspective Demo',
            style={'textAlign': 'center'}),
    dcc.Dropdown(id='tickerinput',
                 options=[{'label': s['name'], 'value': s['symbol']} for s in symbols],
                 value='JPM'),
    perspective_dash(id='psp1', value=default_data, view='y_line', columns=['open', 'high', 'low', 'close']),
    perspective_dash(id='psp2', value=default_data),
    ],
    style={'height': '100%',
           'width': '100%',
           'display': 'flex',
           'flex-direction': 'column'})


@app.callback(
    Output('psp1', 'value'),
    [Input('tickerinput', 'value')]
)
def update_psp1(value):
    print(value)
    df = p.chartDF(value)
    return df.to_dict(orient='records')


@app.callback(
    Output('psp2', 'value'),
    [Input('tickerinput', 'value')]
)
def update_psp2(value):
    df = p.chartDF(value)
    return df.to_dict(orient='records')


if __name__ == "__main__":
    app.run_server(debug=True, threaded=True)
