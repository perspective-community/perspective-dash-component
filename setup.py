import json
from os import path
from setuptools import setup

here = path.abspath(path.dirname(__file__))


with open(path.join('perspective_dash_component', 'package.json')) as f:
    package = json.load(f)

with open(path.join(here, 'requirements.txt'), encoding='utf-8') as f:
    requires = f.read().split()

package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package_name,
    version=package["version"],
    author=package['author'],
    packages=[package_name],
    include_package_data=True,
    license=package['license'],
    description=package['description'] if 'description' in package else package_name,
    install_requires=requires,
    extras_require={'dev': requires + ['pytest', 'pytest-cov', 'pylint', 'flake8']},
)
