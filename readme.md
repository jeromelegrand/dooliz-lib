#bug reproduction

```bash
yarn && yarn watch

# in an other console
cd env-test && yarn && yarn start
```

You will show a page with the word test

Open src indx.js

Uncomment line 5 (useState)

You will have the error.
