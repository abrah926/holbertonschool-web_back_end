import asyncio
import random
from typing import List


async def wait_random(max_delay: int = 10) -> float:
    """An asynchronous coroutine that waits for a random delay between 0 and max_delay seconds."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


def task_wait_random(max_delay: int) -> asyncio.Task:
    """A function that returns an asyncio.Task for wait_random."""
    return asyncio.create_task(wait_random(max_delay))


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Run wait_random n times concurrently using task_wait_random and return delays in ascending order."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = [await task for task in asyncio.as_completed(tasks)]
    return delays
