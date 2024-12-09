#!/usr/bin/env python3
'''Async comprehension of list'''
import asyncio
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Asynchronously collect 10 random numbers from
    async_generator
    using an async comprehension.

    Returns:
        List[float]: A list of 10 random float numbers.
    """
    return [_ async for _ in async_generator()]
