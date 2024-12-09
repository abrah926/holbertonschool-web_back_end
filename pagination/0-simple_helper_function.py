#!/usr/bin/env python3
"""Task zero, helper function"""
from typing import Tuple


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """
    Returns a tuple containing the start and end indices for a specific page of a paginated list.

    Args:
    page (int): The index of the page (starting from 1)."""
    return tuple(page, page_size)
