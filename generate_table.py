import json
import sys

data = json.loads(sys.stdin.read())
for item in data:
    path = item['path'].replace('/workspace/', '')
    print(f"| {path} | - 新增 pnpm 依赖缓存文件 |")
