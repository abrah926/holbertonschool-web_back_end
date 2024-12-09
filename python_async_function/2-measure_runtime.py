#!/usr/bin/env python3
"""
Measure Runtime Module

This module provides functionality to measure the runtime
of asynchronous tasks executed concurrently.

Functions:
    - measure_time(n: int, max_delay: int) -> float:
        Measures the average execution time for running `wait_n(n, max_delay)`.
"""
import time
import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the total execution time for wait_n and return the average time.

    Args:
        n (int): The number of asynchronous tasks to execute.
        max_delay (int): The maximum delay for each task.

    Returns:
        float: The average execution time per task.
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))  # Use asyncio.run to handle async call
    total_time = time.time() - start_time
    return total_time / n
