#!/bin/bash

# Run server using nodemon
gnome-terminal --tab --title="Server" --command="bash -c 'echo Running Server...; cd server && nodemon index.js ; exec bash'" &

# Wait for a moment to let the server start (adjust if needed)
sleep 2

# Run client using npm start
gnome-terminal --tab --title="Client" --command="bash -c 'echo Running Client...; cd client && npm start ; exec bash'" &
