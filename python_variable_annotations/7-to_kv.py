#!/usr/bin/env python3
"""
This module provides a
type-annotated function to
convert a string and a number
(int or float) into a
tuple containing the string
and the square of the number.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a string and a number
    (int or float),
    and returns a tuple.
    The first element
    is the string, and
    the second element is
    the square
    of the number as a float.

    Args:
        k (str): The string key.
        v (Union[int, float]):
        The value to be squared.

    Returns:
        Tuple[str, float]:
        A tuple where the
        first element is
        the string,
        and the second element
        is the square of the
        number as a float.
    """
    return (k, float(v ** 2))
