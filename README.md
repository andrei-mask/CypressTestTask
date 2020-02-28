# This repository contains the samples of tests, which demonstrates a few aspects of using Cypress testing tool.

The tests in this example run against [sample-application](https://github.com/uladzimir-miadzinski/angular-training)

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
$ docker run -it -v <local-path-to-repository>\CypressTestTask:/workspace -w /workspace -e CYPRESS_baseUrl=<local IP>:4200 cypress/included:4.0.1
```

Demo of test running in docker container [Link](https://youtu.be/ygXy_OVdyZg)

