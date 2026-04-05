import json
import sys

# The prompt json string
json_str = sys.stdin.read()
files = json.loads(json_str)

for f in files:
    path = f["path"].replace("/workspace/", "")
    print(f"| {path} | - 新增了 pnpm 依赖缓存文件。 |")

