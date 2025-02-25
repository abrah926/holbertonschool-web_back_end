#!/usr/bin/env python3


import asyncio
import random

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """A function that returns an asyncio.Task for wait_random."""
    return asyncio.create_task(wait_random(max_delay))
