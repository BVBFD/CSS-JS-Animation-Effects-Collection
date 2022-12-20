const ctx = document.getElementById('myChart');
const earning = document.getElementById('earning');

new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Facebook', 'Youtube', 'Amazon'],
    datasets: [
      {
        label: 'Traffic Source',
        data: [700, 1000, 1200],
        // borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255,206,86, 0.7)',
        ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255,206,86, 1)',
        // ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

new Chart(earning, {
  type: 'bar',
  data: {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'Earning',
        data: [
          700, 1000, 1200, 900, 600, 1200, 2000, 1400, 900, 1800, 1200, 2400,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
