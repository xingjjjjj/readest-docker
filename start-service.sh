#!/bin/bash
cd /app/readest
nohup pnpm --filter @readest/readest-app start-web > /app/readest/start-web.log 2>&1 &
echo $! > /app/readest/start-web.pid
echo "Service started with PID: $(cat /app/readest/start-web.pid)"
