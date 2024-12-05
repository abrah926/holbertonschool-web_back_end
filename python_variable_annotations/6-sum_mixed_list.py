#!/usr/bin/env python3
"""
This module provides a
type-annotated function
to calculate the sum of
a mixed list of integers and floats.
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calculates the sum of a list containing integers and floats.

    Args:
        mxd_lst (List[Union[int, float]]): A list of integers and floats.

    Returns:
        float: The sum of all numbers in the list as a float.
    """
    return sum(mxd_lst)
