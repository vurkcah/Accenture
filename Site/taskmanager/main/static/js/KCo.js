var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['07.10.2021', '08.10.2021', '09.10.2021', '10.10.2021', '11.10.2021', '12.10.2021', '13.10.2021', '14.10.2021', '15.10.2021', '16.10.2021', '17.10.2021', '18.10.2021', '19.10.2021', '20.10.2021'],
        datasets: [{
            label: 'Загрузка агрегата(%)',
            data: [100, 95, 82, 84, 89.5, 89, 89.5, 89, 87, 80.75, 85.25, 91, 89.25, 91.25],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                'rgba(84, 110, 122, 0.6)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Конвертерный цех 1 УНРС 2, 3, 4, 6',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 30
                }
            }]
        }
    }
});