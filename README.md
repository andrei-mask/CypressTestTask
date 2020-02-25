This repository contains an implementation of test-task, which demonstrates a few aspects of using Cypress testing tool.

# run tests localy from <local-path-to-repository\CypressTestTask> directory with Cypress installed 
npx cypress run --headless
npx cypress run --headed

# run tests using docker container
docker run -it -v <local-path-to-repository>\CypressTestTask:/workspace -w /workspace cypress/included:4.0.1

# run tests using docker compose with built-in Electron browser
docker-compose run e2e-electron

# run tests using docker compose with Chrome browser
docker-compose run e2e-chrome