#!/usr/bin/env python3
"""
Async Task Scheduler Module

This module provides functionality for scheduling and managing
asynchronous tasks that include randomized delays. It builds upon
the `wait_random` function from the `0-basic_async_syntax` module
to execute multiple asynchronous operations concurrently and collect
their results in an ordered manner.

Functions:
    - wait_n(n: int, max_delay: int) -> List[float]:
        Executes `wait_random` n times concurrently with the specified
        maximum delay, returning a list of delays in ascending order
        as they complete.
"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Execute multiple asynchronous operations concurrently.

    This function spawns the `wait_random` coroutine n times with the given
    max_delay, collects their results as they complete, and returns the list
    of delay times in ascending order without explicitly using sort().

    Args:
        n (int): The number of asynchronous tasks to execute.
        max_delay (int): The maximum delay for each task.

    Returns:
        List[float]: A list of delay durations in ascending order.
    """
    tasks = [wait_random(max_delay) for _ in range(n)]

    delays = []
    for completed_task in asyncio.as_completed(tasks):
        result = await completed_task
        delays.append(result)

    return delays
