 // Retrieve the query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const label1 = urlParams.get("label1");
    const label2 = urlParams.get("label2");
    const label3 = urlParams.get("label3");
    const label4 = urlParams.get("label4");
    const label5 = urlParams.get("label5");
    const label6 = urlParams.get("label6");
    const data1 = urlParams.get("data1");
    const data2 = urlParams.get("data2");
    const data3 = urlParams.get("data3");
    const data4 = urlParams.get("data4");
    const data5 = urlParams.get("data5");
    const data6 = urlParams.get("data6");
    const bgcolor = urlParams.get("bgcolor");
    const bordercolor = urlParams.get("bordercolor");
    const borderwidth = urlParams.get("borderwidth");
    const hoverbgcolor = urlParams.get("hoverbgcolor");
    const hoverbordercolor = urlParams.get("hoverbordercolor");
    const hoverborderwidth = urlParams.get("hoverborderwidth");

    // Create the chart after the DOM has loaded
    document.addEventListener("DOMContentLoaded", function() {
      const ctx = document.getElementById('myChart');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [label1 || 'labelx', label2 || 'labelx', label3 || 'labelx', label4 || 'Green', label5 || 'Purple',
              label6 || 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [data1,data2,data3,data4,data5,data6],
            borderWidth: 1
          }]
        },
        options: {
          backgroundColor: bgcolor,
          borderColor: bordercolor,
          borderWidth: borderwidth,
          hoverBackgroundColor: hoverbgcolor,
          hoverBorderColor: hoverbordercolor,
          hoverBorderWidth: hoverborderwidth,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });