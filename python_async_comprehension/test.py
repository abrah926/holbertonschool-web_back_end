import asyncio

measure_runtime = __import__('2-measure_runtime').measure_runtime


async def test_runtime():
    runtime = await measure_runtime()
    print(f"Total runtime: {runtime:.2f} seconds")

asyncio.run(test_runtime())
