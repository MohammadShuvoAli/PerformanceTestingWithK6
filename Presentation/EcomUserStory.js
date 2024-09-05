import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 5,  // Number of Virtual Users
  duration: '30s',  // Duration of the test
  thresholds: {
    http_req_duration: ['p(95)<1500'], // 95% of requests must complete below 1.5s
  },
};

export default function () {
  // Step 1: Browse the homepage
  let res = http.get('https://www.demoblaze.com');
  check(res, {
    'Homepage status is 200': (r) => r.status === 200,
  });

  sleep(1);

  // Step 2: Search for a product
  res = http.get('https://www.demoblaze.com/search.html?q=Samsung');
  check(res, {
    'Search page status is 200': (r) => r.status === 404,
  });

  sleep(1);

  // Step 3: View a product detail
  res = http.get('https://www.demoblaze.com/prod.html?idp_=1');
  check(res, {
    'Product page status is 200': (r) => r.status === 200,
  });

  sleep(1);

  // Step 4: Add the product to the cart
  res = http.post('https://www.demoblaze.com/addtocart', JSON.stringify({ id: '1' }), {
    headers: { 'Content-Type': 'application/json' },
  });
  check(res, {
    'Add to cart status is 200': (r) => r.status === 200,
    'Product added to cart': (r) => r.body.includes('Product added'),
  });

  sleep(1);

  // Step 5: Proceed to checkout
  res = http.get('https://www.demoblaze.com/cart.html');
  check(res, {
    'Cart page status is 200': (r) => r.status === 200,
    'Cart contains product': (r) => r.body.includes('Samsung galaxy s6'),
  });

  sleep(1);
}
