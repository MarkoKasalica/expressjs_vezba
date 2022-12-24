const { Router } = require("express");

const router = Router();

const supermarkets = [
  {
    id: 1,
    store: "Whole Foods",
    miles: 4.7,
  },
  {
    id: 2,
    store: "Trader Joes",
    miles: 9,
  },
  {
    id: 3,
    store: "Albertsons",
    miles: 1.6,
  },
  {
    id: 4,
    store: "Somebodies",
    miles: 6,
  },
  {
    id: 5,
    store: "GoodFood",
    miles: 1.9,
  },
];

router.use((req, res, next) => {
  if (req.session.user) next();
  else {
    res.send(401);
  }
});

router.get("/", (request, response) => {
  const { miles } = request.query;
  const parsedMiles = parseInt(miles);
  if (!isNaN(parsedMiles)) {
    const filteredStores = supermarkets.filter((s) => s.miles <= parsedMiles);
    response.send(filteredStores);
  } else response.send(supermarkets);
});

module.exports = router;
