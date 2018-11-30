import perspective_dash_component
import pandas as pd
import dash
import dash_html_components as html
import lantern as l

app = dash.Dash(__name__)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

dat = pd.util.testing.makeTimeDataFrame()
dat.index = dat.index.astype(str)
dat = dat.to_dict(orient='records')

dat2 = l.superstore(50).to_dict(orient='records')

app.layout = html.Div([
    perspective_dash_component.perspective_dash(
        id='psp-1',
        value=dat,
        label='My Perspective component',
        columns=['A', 'B', 'D'],
        view='y_line',
    ),
    perspective_dash_component.perspective_dash(
        id='psp-2',
        value=dat2,
        label='My Perspective component2'
    )

])

if __name__ == '__main__':
    app.run_server(debug=True)
