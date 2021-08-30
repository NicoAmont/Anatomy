export const apiUrl = document.location.href.startsWith('http://localhost')
  ? 'http://localhost:5000'
  : '';
export const formatter = new Intl.NumberFormat('en',{
    style: 'currency',
    currency: 'usd',
});

