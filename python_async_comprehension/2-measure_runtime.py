#!/usr/bin/env python3
from time import perf_counter
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """
    Measure the runtime of running async_comprehension 4 times in parallel.
    """

    start_time = perf_counter()

    try:
        await asyncio.gather(*(async_comprehension() for _ in range(4)))

    except Exception as e:
        print(f"Error occurred: {e}")

    end_time = perf_counter()
    total_time = end_time - start_time

    return total_time
