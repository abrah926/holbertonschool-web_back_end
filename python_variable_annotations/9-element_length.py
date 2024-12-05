#!/usr/bin/env python3
"""
This module provides a
type-annotated function
to calculate the length
of elements in an iterable.
"""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Takes an iterable of sequences
    and returns a list of tuples.
    Each tuple contains
    a sequence and its length.

    Args:
        lst (Iterable[Sequence]):
        An iterable containing sequence objects.

    Returns:
        List[Tuple[Sequence, int]]:
        A list of tuples,
        where each tuple consists
        of a sequence and its corresponding length.
    """
    return [(i, len(i)) for i in lst]
