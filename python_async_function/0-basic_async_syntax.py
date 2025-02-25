#!/usr/bin/env python3
'''Random Delay Utility Module

This module provides a utility
for asynchronous programming
with a function
that introduces a
random delay. It is designed
to simulate variable response
times or delays in asynchronous workflows.'''
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous function that waits for
    a random delay between 0
    and max_delay seconds.

    Args:
        max_delay (int): The maximum delay in seconds. Default is 10.

    Returns:
        float: The actual delay time in seconds.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
