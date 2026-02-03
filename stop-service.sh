#!/bin/bash
if [ -f /app/readest/start-web.pid ]; then
    PID=$(cat /app/readest/start-web.pid)
    if ps -p $PID > /dev/null; then
        kill $PID
        echo "Service stopped (PID: $PID)"
    else
        echo "Process not running"
    fi
    rm -f /app/readest/start-web.pid
else
    echo "PID file not found, trying to kill by name..."
    pkill -f "start-web"
fi
