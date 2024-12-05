#!/usr/bin/env python3
"""
This module provides a
type-annotated function to
calculate the floor of a float.
"""

import math


def floor(n: float) -> int:
    """
    Calculates the floor of a float.

    Args:
        n (float): The float value to be floored.

    Returns:
        int: The largest integer less than or equal to the float.
    """
    return math.floor(n)
