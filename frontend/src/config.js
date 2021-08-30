export const apiUrl = document.location.href.startsWith('http://localhost')
  ? 'http://localhost:4500'
  : '';
export const formatter = new Intl.NumberFormat('en',{
    style: 'currency',
    currency: 'usd',
});

