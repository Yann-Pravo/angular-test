# angular-test

### Clone angular-test

Clone the angular-test repository using git.

```
git clone https://github.com/Yann-Pravo/angular-test
cd angular-test
```

### Install Dependencies

```
npm install
```

### Start server

```
npm start
```

Now browse to the app at `http://localhost:8000/#!/view1`.

The goal of this exercice is to display a d3 chart with the datas that you can find in the data service.

With a promise, you will create a simulated call to an API in the data service.
Afterwards, you will call this service in the View1 controller and map the data to have the right object.
Then you will call the chart service (it doesn't need modification) with your data well mapped.

In order that the chart service works well, the data object has to look like this
```
[
  {
    date: String
    metric: Float
  },
  ...
]
```

*Note: lodash.js library is available to help you*