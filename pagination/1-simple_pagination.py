# 1-simple_pagination.py

import csv
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate start and end index for pagination.

    Args:
        page (int): Current page number.
        page_size (int): Number of items per page.

    Returns:
        Tuple[int, int]: A tuple containing start and end indices.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize Server with a dataset placeholder."""
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Retrieve the dataset, caching it for future calls.

        Returns:
            List[List]: The dataset loaded from the CSV file.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Skip header row

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retrieve a specific page of the dataset.

        Args:
            page (int): The page number (1-indexed).
            page_size (int): Number of items per page.

        Returns:
            List[List]: A list containing the rows for the requested page.
        """
        assert isinstance(page, int) and page > 0, \
            "Page must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0, \
            "Page size must be a positive integer"

        start_index, end_index = index_range(page, page_size)
        dataset = self.dataset()

        if start_index >= len(dataset):  # Start index out of range
            return []

        return dataset[start_index:end_index]
