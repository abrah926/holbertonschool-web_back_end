#!/usr/bin/env python3
from time import perf_counter
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    """
    Measure the runtime of running async_comprehension 4 times in parallel.
    """
    print("Starting measure_runtime...")  # Debug
    start_time = perf_counter()

    try:
        print("Launching asyncio.gather...")  # Debug
        await asyncio.gather(*(async_comprehension() for _ in range(4)))
        print("All tasks completed.")  # Debug
    except Exception as e:
        print(f"Error occurred: {e}")  # Debug error

    end_time = perf_counter()
    total_time = end_time - start_time
    print(f"Measured runtime: {total_time:.2f} seconds")  # Debug
    return total_time
