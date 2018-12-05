from .perspective_dash import perspective_dash
from perspective import PerspectiveBaseMixin


class PerspectiveDash(PerspectiveBaseMixin, perspective_dash):
    pass


__all__ = [
    "perspective_dash"
]
