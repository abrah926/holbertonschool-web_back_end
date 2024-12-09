#!/usr/bin/env python3

'''0-assyn_generator.py iterates to provide a random number generator'''

import random
import asyncio


async def async_generator():
    """
    Asynchronous generator that yields 10 random float numbers
    between 0 and 10, with a 1-second delay between each.

    Yields:
        float: A random number between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
