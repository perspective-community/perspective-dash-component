import perspective_dash_component
import pandas as pd
import dash
import dash_html_components as html

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([
    perspective_dash_component.perspective_dash(
        id='psp-1',
        value=pd.util.testing.makeTimeDataFrame().to_json(orient='records'),
        label='My Perspective component'
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)
