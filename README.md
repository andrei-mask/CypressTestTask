# This repository contains an implementation of test-task, which demonstrates a few aspects of using Cypress testing tool.

run tests localy from <local-path-to-repository\CypressTestTask> directory with Cypress installed 
```sh
$ npx cypress run --headless
```
or
```sh
$ npx cypress run --headed
```

run tests using docker container
```sh
$ docker run -it -v <local-path-to-repository>\CypressTestTask:/workspace -w /workspace cypress/included:4.0.1
```

run tests using docker compose with built-in Electron browser
```sh
$ docker-compose run e2e-electron
```
run tests using docker compose with Chrome browser
```sh
$ docker-compose run e2e-chrome
```
The tests in this example run against [vk.com](vk.com)

