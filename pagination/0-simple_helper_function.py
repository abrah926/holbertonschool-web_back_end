#!/usr/bin/env python3
"""
Pagination Helper Module.

This module provides utility functions
to calculate ranges for pagination,
allowing users to determine start and
end indices for a page of data.

Function:
    - index_range(page: int, page_size: int) -> Tuple[int, int]:
        Calculates the start and end
        indices for a specific page.

Pagination Overview:
    Pagination divides a dataset into smaller pages.
    Each page is defined
    by a range of indices, with 1-indexed page numbers. For example:
        - Page 1, page_size 10: indices 0 to 9
        - Page 2, page_size 10: indices 10 to 19"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Returns a tuple containing the start and
    end indices for a specific page of a paginated list.

    Args:
        page (int): The index of the page
        (starting from 1).
        page_size (int): The number of items per page.

    Returns:
        Tuple[int, int]: A tuple containing the start
        and end indices.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index
