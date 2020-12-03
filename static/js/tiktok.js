anychart.onDocumentLoad(function () {
    // create an instance of a pie chart
    var chart = anychart.line();
    // set the data
    //chart.name("Promedio")
    var data = [['2020-08-26', 30.0625], ['2020-08-27', 29.9375], ['2020-08-28', 30.0], ['2020-08-29', 29.5], ['2020-08-30', 28.625], ['2020-08-31', 30.125], ['2020-09-01', 31.75], ['2020-09-02', 31.9375], ['2020-09-03', 26.5625], ['2020-09-04', 25.9375], ['2020-09-05', 24.625], ['2020-09-06', 23.4375], ['2020-09-07', 24.5], ['2020-09-08', 25.5], ['2020-09-09', 25.9375], ['2020-09-10', 26.1875], ['2020-09-11', 23.25], ['2020-09-12', 28.8125], ['2020-09-13', 28.75], ['2020-09-14', 30.375], ['2020-09-15', 37.5], ['2020-09-16', 37.8125], ['2020-09-17', 38.0625], ['2020-09-18', 49.3125], ['2020-09-19', 49.5], ['2020-09-20', 49.6875], ['2020-09-21', 51.5625], ['2020-09-22', 47.375], ['2020-09-23', 46.9375], ['2020-09-24', 46.5625], ['2020-09-25', 34.875], ['2020-09-26', 38.8125], ['2020-09-27', 38.1875], ['2020-09-28', 38.75], ['2020-09-29', 39.8125], ['2020-09-30', 39.6875], ['2020-10-01', 39.5625], ['2020-10-02', 39.0625], ['2020-10-03', 38.1875], ['2020-10-04', 43.0], ['2020-10-05', 43.875], ['2020-10-06', 44.375], ['2020-10-07', 44.125], ['2020-10-08', 43.5], ['2020-10-09', 43.0625], ['2020-10-10', 42.3125], ['2020-10-11', 42.5], ['2020-10-12', 42.375], ['2020-10-13', 43.6875], ['2020-10-14', 43.6875], ['2020-10-15', 43.4375], ['2020-10-16', 43.125], ['2020-10-17', 42.5625], ['2020-10-18', 42.0625], ['2020-10-19', 42.625], ['2020-10-20', 42.6875], ['2020-10-21', 48.6875], ['2020-10-22', 54.25], ['2020-10-23', 47.8125], ['2020-10-24', 48.125], ['2020-10-25', 47.75], ['2020-10-26', 48.0], ['2020-10-27', 48.8125], ['2020-10-28', 48.6875], ['2020-10-29', 48.625], ['2020-10-30', 48.6875], ['2020-10-31', 48.5625], ['2020-11-01', 48.5], ['2020-11-02', 48.5625], ['2020-11-03', 49.375], ['2020-11-04', 43.9375], ['2020-11-05', 43.5625], ['2020-11-06', 43.3125], ['2020-11-07', 42.875], ['2020-11-08', 42.5], ['2020-11-09', 43.1875], ['2020-11-10', 43.3125], ['2020-11-11', 43.3125], ['2020-11-12', 37.375], ['2020-11-13', 37.1875], ['2020-11-14', 36.5625], ['2020-11-15', 35.9375], ['2020-11-16', 36.4375], ['2020-11-17', 37.1875], ['2020-11-18', 32.5], ['2020-11-19', 32.8125], ['2020-11-20', 32.5], ['2020-11-21', 37.125], ['2020-11-22', 37.1875], ['2020-11-23', 37.3125]];
    var series = chart.line(data);
    series.name("promedio")
    
    var data1 = [['2020-08-26', 100], ['2020-08-27', 100], ['2020-08-28', 100], ['2020-08-29', 100], ['2020-08-30', 100], ['2020-08-31', 100], ['2020-09-01', 100], ['2020-09-02', 100], ['2020-09-03', 9], ['2020-09-04', 5], ['2020-09-05', 5], ['2020-09-06', 3], ['2020-09-07', 2], ['2020-09-08', 10], ['2020-09-09', 8], ['2020-09-10', 8], ['2020-09-11', 3], ['2020-09-12', 2], ['2020-09-13', 2], ['2020-09-14', 2], ['2020-09-15', 3], ['2020-09-16', 4], ['2020-09-17', 3], ['2020-09-18', 4], ['2020-09-19', 5], ['2020-09-20', 5], ['2020-09-21', 8], ['2020-09-22', 9], ['2020-09-23', 8], ['2020-09-24', 7], ['2020-09-25', 7], ['2020-09-26', 6], ['2020-09-27', 5], ['2020-09-28', 5], ['2020-09-29', 7], ['2020-09-30', 7], ['2020-10-01', 8], ['2020-10-02', 6], ['2020-10-03', 5], ['2020-10-04', 4], ['2020-10-05', 5], ['2020-10-06', 5], ['2020-10-07', 5], ['2020-10-08', 4], ['2020-10-09', 3], ['2020-10-10', 3], ['2020-10-11', 2], ['2020-10-12', 3], ['2020-10-13', 3], ['2020-10-14', 3], ['2020-10-15', 3], ['2020-10-16', 3], ['2020-10-17', 2], ['2020-10-18', 2], ['2020-10-19', 3], ['2020-10-20', 2], ['2020-10-21', 2], ['2020-10-22', 2], ['2020-10-23', 2], ['2020-10-24', 2], ['2020-10-25', 2], ['2020-10-26', 2], ['2020-10-27', 2], ['2020-10-28', 2], ['2020-10-29', 2], ['2020-10-30', 2], ['2020-10-31', 2], ['2020-11-01', 2], ['2020-11-02', 2], ['2020-11-03', 3], ['2020-11-04', 5], ['2020-11-05', 4], ['2020-11-06', 3], ['2020-11-07', 3], ['2020-11-08', 3], ['2020-11-09', 5], ['2020-11-10', 6], ['2020-11-11', 6], ['2020-11-12', 8], ['2020-11-13', 6], ['2020-11-14', 6], ['2020-11-15', 4], ['2020-11-16', 5], ['2020-11-17', 4], ['2020-11-18', 5], ['2020-11-19', 5], ['2020-11-20', 7], ['2020-11-21', 4], ['2020-11-22', 4], ['2020-11-23', 3]];
    var series1 = chart.line(data1)
    series1.name("USA")

    var data2 = [['2020-08-26', 100], ['2020-08-27', 100], ['2020-08-28', 100], ['2020-08-29', 100], ['2020-08-30', 100], ['2020-08-31', 100], ['2020-09-01', 100], ['2020-09-02', 100], ['2020-09-03', 100], ['2020-09-04', 100], ['2020-09-05', 100], ['2020-09-06', 100], ['2020-09-07', 100], ['2020-09-08', 100], ['2020-09-09', 100], ['2020-09-10', 100], ['2020-09-11', 100], ['2020-09-12', 100], ['2020-09-13', 100], ['2020-09-14', 100], ['2020-09-15', 100], ['2020-09-16', 100], ['2020-09-17', 100], ['2020-09-18', 100], ['2020-09-19', 100], ['2020-09-20', 100], ['2020-09-21', 100], ['2020-09-22', 100], ['2020-09-23', 100], ['2020-09-24', 100], ['2020-09-25', 15], ['2020-09-26', 16], ['2020-09-27', 17], ['2020-09-28', 14], ['2020-09-29', 17], ['2020-09-30', 17], ['2020-10-01', 15], ['2020-10-02', 15], ['2020-10-03', 17], ['2020-10-04', 17], ['2020-10-05', 16], ['2020-10-06', 16], ['2020-10-07', 17], ['2020-10-08', 14], ['2020-10-09', 15], ['2020-10-10', 13], ['2020-10-11', 13], ['2020-10-12', 12], ['2020-10-13', 16], ['2020-10-14', 15], ['2020-10-15', 11], ['2020-10-16', 14], ['2020-10-17', 17], ['2020-10-18', 13], ['2020-10-19', 15], ['2020-10-20', 16], ['2020-10-21', 17], ['2020-10-22', 14], ['2020-10-23', 11], ['2020-10-24', 13], ['2020-10-25', 14], ['2020-10-26', 10], ['2020-10-27', 11], ['2020-10-28', 12], ['2020-10-29', 11], ['2020-10-30', 11], ['2020-10-31', 15], ['2020-11-01', 14], ['2020-11-02', 14], ['2020-11-03', 17], ['2020-11-04', 18], ['2020-11-05', 15], ['2020-11-06', 14], ['2020-11-07', 15], ['2020-11-08', 14], ['2020-11-09', 14], ['2020-11-10', 12], ['2020-11-11', 14], ['2020-11-12', 11], ['2020-11-13', 12], ['2020-11-14', 12], ['2020-11-15', 12], ['2020-11-16', 10], ['2020-11-17', 13], ['2020-11-18', 14], ['2020-11-19', 12], ['2020-11-20', 13], ['2020-11-21', 13], ['2020-11-22', 11], ['2020-11-23', 12]];
    var series2 = chart.line(data2)
    series2.name("Australia")

    var data3 = [['2020-08-26', 6], ['2020-08-27', 5], ['2020-08-28', 5], ['2020-08-29', 2], ['2020-08-30', 2], ['2020-08-31', 4], ['2020-09-01', 6], ['2020-09-02', 6], ['2020-09-03', 8], ['2020-09-04', 7], ['2020-09-05', 4], ['2020-09-06', 4], ['2020-09-07', 2], ['2020-09-08', 7], ['2020-09-09', 8], ['2020-09-10', 11], ['2020-09-11', 5], ['2020-09-12', 2], ['2020-09-13', 3], ['2020-09-14', 8], ['2020-09-15', 9], ['2020-09-16', 11], ['2020-09-17', 11], ['2020-09-18', 10], ['2020-09-19', 9], ['2020-09-20', 12], ['2020-09-21', 16], ['2020-09-22', 20], ['2020-09-23', 18], ['2020-09-24', 16], ['2020-09-25', 15], ['2020-09-26', 100], ['2020-09-27', 100], ['2020-09-28', 100], ['2020-09-29', 100], ['2020-09-30', 100], ['2020-10-01', 100], ['2020-10-02', 100], ['2020-10-03', 100], ['2020-10-04', 100], ['2020-10-05', 100], ['2020-10-06', 100], ['2020-10-07', 100], ['2020-10-08', 100], ['2020-10-09', 100], ['2020-10-10', 100], ['2020-10-11', 100], ['2020-10-12', 100], ['2020-10-13', 100], ['2020-10-14', 100], ['2020-10-15', 100], ['2020-10-16', 100], ['2020-10-17', 100], ['2020-10-18', 100], ['2020-10-19', 100], ['2020-10-20', 100], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 100], ['2020-11-05', 100], ['2020-11-06', 100], ['2020-11-07', 100], ['2020-11-08', 100], ['2020-11-09', 100], ['2020-11-10', 100], ['2020-11-11', 100], ['2020-11-12', 100], ['2020-11-13', 100], ['2020-11-14', 100], ['2020-11-15', 100], ['2020-11-16', 100], ['2020-11-17', 100], ['2020-11-18', 100], ['2020-11-19', 100], ['2020-11-20', 100], ['2020-11-21', 100], ['2020-11-22', 100], ['2020-11-23', 100]];
    var series3 = chart.line(data3)
    series3.name("Canada")

    var data4 = [['2020-08-26', 2], ['2020-08-27', 4], ['2020-08-28', 4], ['2020-08-29', 5], ['2020-08-30', 4], ['2020-08-31', 5], ['2020-09-01', 8], ['2020-09-02', 10], ['2020-09-03', 10], ['2020-09-04', 7], ['2020-09-05', 6], ['2020-09-06', 5], ['2020-09-07', 8], ['2020-09-08', 6], ['2020-09-09', 7], ['2020-09-10', 7], ['2020-09-11', 3], ['2020-09-12', 100], ['2020-09-13', 100], ['2020-09-14', 100], ['2020-09-15', 100], ['2020-09-16', 100], ['2020-09-17', 100], ['2020-09-18', 100], ['2020-09-19', 100], ['2020-09-20', 100], ['2020-09-21', 100], ['2020-09-22', 100], ['2020-09-23', 100], ['2020-09-24', 100], ['2020-09-25', 11], ['2020-09-26', 10], ['2020-09-27', 6], ['2020-09-28', 6], ['2020-09-29', 7], ['2020-09-30', 8], ['2020-10-01', 9], ['2020-10-02', 7], ['2020-10-03', 7], ['2020-10-04', 9], ['2020-10-05', 8], ['2020-10-06', 8], ['2020-10-07', 8], ['2020-10-08', 8], ['2020-10-09', 7], ['2020-10-10', 7], ['2020-10-11', 7], ['2020-10-12', 4], ['2020-10-13', 9], ['2020-10-14', 7], ['2020-10-15', 9], ['2020-10-16', 6], ['2020-10-17', 7], ['2020-10-18', 5], ['2020-10-19', 4], ['2020-10-20', 3], ['2020-10-21', 5], ['2020-10-22', 5], ['2020-10-23', 7], ['2020-10-24', 7], ['2020-10-25', 7], ['2020-10-26', 6], ['2020-10-27', 8], ['2020-10-28', 7], ['2020-10-29', 10], ['2020-10-30', 10], ['2020-10-31', 8], ['2020-11-01', 8], ['2020-11-02', 11], ['2020-11-03', 10], ['2020-11-04', 9], ['2020-11-05', 9], ['2020-11-06', 9], ['2020-11-07', 8], ['2020-11-08', 8], ['2020-11-09', 9], ['2020-11-10', 9], ['2020-11-11', 7], ['2020-11-12', 10], ['2020-11-13', 10], ['2020-11-14', 7], ['2020-11-15', 9], ['2020-11-16', 8], ['2020-11-17', 10], ['2020-11-18', 10], ['2020-11-19', 14], ['2020-11-20', 11], ['2020-11-21', 10], ['2020-11-22', 8], ['2020-11-23', 11]];
    var series4 = chart.line(data4)
    series4.name("Francia")

    var data5 = [['2020-08-26', 4], ['2020-08-27', 5], ['2020-08-28', 4], ['2020-08-29', 4], ['2020-08-30', 1], ['2020-08-31', 4], ['2020-09-01', 4], ['2020-09-02', 5], ['2020-09-03', 5], ['2020-09-04', 6], ['2020-09-05', 5], ['2020-09-06', 4], ['2020-09-07', 7], ['2020-09-08', 7], ['2020-09-09', 7], ['2020-09-10', 8], ['2020-09-11', 7], ['2020-09-12', 6], ['2020-09-13', 5], ['2020-09-14', 8], ['2020-09-15', 100], ['2020-09-16', 100], ['2020-09-17', 100], ['2020-09-18', 100], ['2020-09-19', 100], ['2020-09-20', 100], ['2020-09-21', 100], ['2020-09-22', 100], ['2020-09-23', 100], ['2020-09-24', 100], ['2020-09-25', 100], ['2020-09-26', 100], ['2020-09-27', 100], ['2020-09-28', 100], ['2020-09-29', 100], ['2020-09-30', 100], ['2020-10-01', 100], ['2020-10-02', 100], ['2020-10-03', 100], ['2020-10-04', 100], ['2020-10-05', 100], ['2020-10-06', 100], ['2020-10-07', 100], ['2020-10-08', 100], ['2020-10-09', 100], ['2020-10-10', 100], ['2020-10-11', 100], ['2020-10-12', 100], ['2020-10-13', 100], ['2020-10-14', 100], ['2020-10-15', 100], ['2020-10-16', 100], ['2020-10-17', 100], ['2020-10-18', 100], ['2020-10-19', 100], ['2020-10-20', 100], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 8], ['2020-10-24', 9], ['2020-10-25', 7], ['2020-10-26', 11], ['2020-10-27', 11], ['2020-10-28', 10], ['2020-10-29', 10], ['2020-10-30', 10], ['2020-10-31', 8], ['2020-11-01', 9], ['2020-11-02', 12], ['2020-11-03', 13], ['2020-11-04', 12], ['2020-11-05', 11], ['2020-11-06', 11], ['2020-11-07', 9], ['2020-11-08', 8], ['2020-11-09', 10], ['2020-11-10', 11], ['2020-11-11', 10], ['2020-11-12', 10], ['2020-11-13', 9], ['2020-11-14', 7], ['2020-11-15', 8], ['2020-11-16', 10], ['2020-11-17', 9], ['2020-11-18', 10], ['2020-11-19', 11], ['2020-11-20', 13], ['2020-11-21', 10], ['2020-11-22', 12], ['2020-11-23', 14]];
    var series5 = chart.line(data5)
    series5.name("Alemania")

    var data6 = [['2020-08-26', 100], ['2020-08-27', 100], ['2020-08-28', 100], ['2020-08-29', 100], ['2020-08-30', 100], ['2020-08-31', 100], ['2020-09-01', 100], ['2020-09-02', 100], ['2020-09-03', 100], ['2020-09-04', 100], ['2020-09-05', 100], ['2020-09-06', 100], ['2020-09-07', 100], ['2020-09-08', 100], ['2020-09-09', 100], ['2020-09-10', 100], ['2020-09-11', 100], ['2020-09-12', 100], ['2020-09-13', 100], ['2020-09-14', 100], ['2020-09-15', 100], ['2020-09-16', 100], ['2020-09-17', 100], ['2020-09-18', 100], ['2020-09-19', 100], ['2020-09-20', 100], ['2020-09-21', 100], ['2020-09-22', 19], ['2020-09-23', 16], ['2020-09-24', 22], ['2020-09-25', 21], ['2020-09-26', 20], ['2020-09-27', 21], ['2020-09-28', 18], ['2020-09-29', 19], ['2020-09-30', 18], ['2020-10-01', 17], ['2020-10-02', 16], ['2020-10-03', 14], ['2020-10-04', 11], ['2020-10-05', 15], ['2020-10-06', 14], ['2020-10-07', 11], ['2020-10-08', 12], ['2020-10-09', 13], ['2020-10-10', 13], ['2020-10-11', 12], ['2020-10-12', 13], ['2020-10-13', 13], ['2020-10-14', 14], ['2020-10-15', 14], ['2020-10-16', 13], ['2020-10-17', 11], ['2020-10-18', 9], ['2020-10-19', 9], ['2020-10-20', 8], ['2020-10-21', 8], ['2020-10-22', 7], ['2020-10-23', 8], ['2020-10-24', 6], ['2020-10-25', 8], ['2020-10-26', 8], ['2020-10-27', 10], ['2020-10-28', 11], ['2020-10-29', 10], ['2020-10-30', 10], ['2020-10-31', 11], ['2020-11-01', 13], ['2020-11-02', 10], ['2020-11-03', 13], ['2020-11-04', 15], ['2020-11-05', 14], ['2020-11-06', 14], ['2020-11-07', 10], ['2020-11-08', 8], ['2020-11-09', 10], ['2020-11-10', 11], ['2020-11-11', 12], ['2020-11-12', 11], ['2020-11-13', 12], ['2020-11-14', 13], ['2020-11-15', 6], ['2020-11-16', 11], ['2020-11-17', 12], ['2020-11-18', 13], ['2020-11-19', 17], ['2020-11-20', 15], ['2020-11-21', 100], ['2020-11-22', 100], ['2020-11-23', 100]];
    var series6 = chart.line(data6)
    series6.name("Reino Unido")

    var data7 = [['2020-08-26', 10], ['2020-08-27', 10], ['2020-08-28', 12], ['2020-08-29', 11], ['2020-08-30', 10], ['2020-08-31', 12], ['2020-09-01', 14], ['2020-09-02', 15], ['2020-09-03', 14], ['2020-09-04', 13], ['2020-09-05', 9], ['2020-09-06', 7], ['2020-09-07', 9], ['2020-09-08', 10], ['2020-09-09', 10], ['2020-09-10', 10], ['2020-09-11', 7], ['2020-09-12', 6], ['2020-09-13', 6], ['2020-09-14', 12], ['2020-09-15', 11], ['2020-09-16', 11], ['2020-09-17', 13], ['2020-09-18', 100], ['2020-09-19', 100], ['2020-09-20', 100], ['2020-09-21', 100], ['2020-09-22', 100], ['2020-09-23', 100], ['2020-09-24', 100], ['2020-09-25', 100], ['2020-09-26', 100], ['2020-09-27', 100], ['2020-09-28', 100], ['2020-09-29', 100], ['2020-09-30', 100], ['2020-10-01', 100], ['2020-10-02', 100], ['2020-10-03', 100], ['2020-10-04', 100], ['2020-10-05', 100], ['2020-10-06', 100], ['2020-10-07', 100], ['2020-10-08', 100], ['2020-10-09', 100], ['2020-10-10', 100], ['2020-10-11', 100], ['2020-10-12', 100], ['2020-10-13', 100], ['2020-10-14', 100], ['2020-10-15', 100], ['2020-10-16', 100], ['2020-10-17', 100], ['2020-10-18', 100], ['2020-10-19', 100], ['2020-10-20', 100], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 100], ['2020-11-05', 100], ['2020-11-06', 100], ['2020-11-07', 100], ['2020-11-08', 100], ['2020-11-09', 100], ['2020-11-10', 100], ['2020-11-11', 100], ['2020-11-12', 100], ['2020-11-13', 100], ['2020-11-14', 100], ['2020-11-15', 100], ['2020-11-16', 100], ['2020-11-17', 100], ['2020-11-18', 100], ['2020-11-19', 100], ['2020-11-20', 100], ['2020-11-21', 100], ['2020-11-22', 100], ['2020-11-23', 100]];
    var series7 = chart.line(data7)
    series7.name("Italia")

    var data8 = [['2020-08-26', 16], ['2020-08-27', 11], ['2020-08-28', 12], ['2020-08-29', 9], ['2020-08-30', 7], ['2020-08-31', 13], ['2020-09-01', 17], ['2020-09-02', 16], ['2020-09-03', 21], ['2020-09-04', 20], ['2020-09-05', 14], ['2020-09-06', 9], ['2020-09-07', 14], ['2020-09-08', 18], ['2020-09-09', 17], ['2020-09-10', 16], ['2020-09-11', 7], ['2020-09-12', 8], ['2020-09-13', 5], ['2020-09-14', 8], ['2020-09-15', 15], ['2020-09-16', 16], ['2020-09-17', 16], ['2020-09-18', 14], ['2020-09-19', 13], ['2020-09-20', 12], ['2020-09-21', 13], ['2020-09-22', 18], ['2020-09-23', 19], ['2020-09-24', 19], ['2020-09-25', 16], ['2020-09-26', 12], ['2020-09-27', 8], ['2020-09-28', 16], ['2020-09-29', 20], ['2020-09-30', 17], ['2020-10-01', 18], ['2020-10-02', 16], ['2020-10-03', 13], ['2020-10-04', 100], ['2020-10-05', 100], ['2020-10-06', 100], ['2020-10-07', 100], ['2020-10-08', 100], ['2020-10-09', 100], ['2020-10-10', 100], ['2020-10-11', 100], ['2020-10-12', 100], ['2020-10-13', 100], ['2020-10-14', 100], ['2020-10-15', 100], ['2020-10-16', 100], ['2020-10-17', 100], ['2020-10-18', 100], ['2020-10-19', 100], ['2020-10-20', 100], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 100], ['2020-11-05', 100], ['2020-11-06', 100], ['2020-11-07', 100], ['2020-11-08', 100], ['2020-11-09', 100], ['2020-11-10', 100], ['2020-11-11', 100], ['2020-11-12', 100], ['2020-11-13', 100], ['2020-11-14', 100], ['2020-11-15', 100], ['2020-11-16', 100], ['2020-11-17', 100], ['2020-11-18', 15], ['2020-11-19', 14], ['2020-11-20', 20], ['2020-11-21', 14], ['2020-11-22', 15], ['2020-11-23', 10]];
    var series8 = chart.line(data8)
    series8.name("Argentina")

    var data9 = [['2020-08-26', 8], ['2020-08-27', 7], ['2020-08-28', 7], ['2020-08-29', 6], ['2020-08-30', 3], ['2020-08-31', 4], ['2020-09-01', 10], ['2020-09-02', 9], ['2020-09-03', 10], ['2020-09-04', 8], ['2020-09-05', 6], ['2020-09-06', 5], ['2020-09-07', 1], ['2020-09-08', 5], ['2020-09-09', 10], ['2020-09-10', 9], ['2020-09-11', 9], ['2020-09-12', 6], ['2020-09-13', 6], ['2020-09-14', 7], ['2020-09-15', 9], ['2020-09-16', 9], ['2020-09-17', 10], ['2020-09-18', 100], ['2020-09-19', 100], ['2020-09-20', 100], ['2020-09-21', 100], ['2020-09-22', 100], ['2020-09-23', 100], ['2020-09-24', 100], ['2020-09-25', 100], ['2020-09-26', 100], ['2020-09-27', 100], ['2020-09-28', 100], ['2020-09-29', 100], ['2020-09-30', 100], ['2020-10-01', 100], ['2020-10-02', 100], ['2020-10-03', 100], ['2020-10-04', 100], ['2020-10-05', 100], ['2020-10-06', 100], ['2020-10-07', 100], ['2020-10-08', 100], ['2020-10-09', 100], ['2020-10-10', 100], ['2020-10-11', 100], ['2020-10-12', 100], ['2020-10-13', 100], ['2020-10-14', 100], ['2020-10-15', 100], ['2020-10-16', 100], ['2020-10-17', 100], ['2020-10-18', 100], ['2020-10-19', 100], ['2020-10-20', 100], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 12], ['2020-11-05', 11], ['2020-11-06', 9], ['2020-11-07', 10], ['2020-11-08', 11], ['2020-11-09', 11], ['2020-11-10', 12], ['2020-11-11', 10], ['2020-11-12', 9], ['2020-11-13', 8], ['2020-11-14', 10], ['2020-11-15', 11], ['2020-11-16', 12], ['2020-11-17', 14], ['2020-11-18', 16], ['2020-11-19', 13], ['2020-11-20', 9], ['2020-11-21', 10], ['2020-11-22', 12], ['2020-11-23', 9]];
    var series9 = chart.line(data9)
    series9.name("Brasil")

    var data10 = [['2020-08-26', 100], ['2020-08-27', 100], ['2020-08-28', 100], ['2020-08-29', 100], ['2020-08-30', 100], ['2020-08-31', 100], ['2020-09-01', 100], ['2020-09-02', 100], ['2020-09-03', 100], ['2020-09-04', 100], ['2020-09-05', 100], ['2020-09-06', 100], ['2020-09-07', 100], ['2020-09-08', 100], ['2020-09-09', 100], ['2020-09-10', 100], ['2020-09-11', 100], ['2020-09-12', 100], ['2020-09-13', 100], ['2020-09-14', 100], ['2020-09-15', 100], ['2020-09-16', 100], ['2020-09-17', 100], ['2020-09-18', 100], ['2020-09-19', 100], ['2020-09-20', 100], ['2020-09-21', 100], ['2020-09-22', 100], ['2020-09-23', 100], ['2020-09-24', 100], ['2020-09-25', 100], ['2020-09-26', 100], ['2020-09-27', 100], ['2020-09-28', 100], ['2020-09-29', 100], ['2020-09-30', 100], ['2020-10-01', 100], ['2020-10-02', 100], ['2020-10-03', 100], ['2020-10-04', 100], ['2020-10-05', 100], ['2020-10-06', 100], ['2020-10-07', 100], ['2020-10-08', 100], ['2020-10-09', 100], ['2020-10-10', 100], ['2020-10-11', 100], ['2020-10-12', 100], ['2020-10-13', 100], ['2020-10-14', 100], ['2020-10-15', 100], ['2020-10-16', 100], ['2020-10-17', 100], ['2020-10-18', 100], ['2020-10-19', 100], ['2020-10-20', 100], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 100], ['2020-11-05', 100], ['2020-11-06', 100], ['2020-11-07', 100], ['2020-11-08', 100], ['2020-11-09', 100], ['2020-11-10', 100], ['2020-11-11', 100], ['2020-11-12', 100], ['2020-11-13', 100], ['2020-11-14', 100], ['2020-11-15', 100], ['2020-11-16', 100], ['2020-11-17', 100], ['2020-11-18', 100], ['2020-11-19', 100], ['2020-11-20', 100], ['2020-11-21', 100], ['2020-11-22', 100], ['2020-11-23', 100]];
    var series10 = chart.line(data10)
    series10.name("India")

    var data11 = [['2020-08-26', 10], ['2020-08-27', 9], ['2020-08-28', 9], ['2020-08-29', 9], ['2020-08-30', 5], ['2020-08-31', 11], ['2020-09-01', 12], ['2020-09-02', 13], ['2020-09-03', 12], ['2020-09-04', 11], ['2020-09-05', 11], ['2020-09-06', 7], ['2020-09-07', 12], ['2020-09-08', 12], ['2020-09-09', 13], ['2020-09-10', 12], ['2020-09-11', 9], ['2020-09-12', 6], ['2020-09-13', 7], ['2020-09-14', 11], ['2020-09-15', 11], ['2020-09-16', 8], ['2020-09-17', 11], ['2020-09-18', 12], ['2020-09-19', 15], ['2020-09-20', 13], ['2020-09-21', 15], ['2020-09-22', 16], ['2020-09-23', 19], ['2020-09-24', 17], ['2020-09-25', 14], ['2020-09-26', 10], ['2020-09-27', 7], ['2020-09-28', 12], ['2020-09-29', 12], ['2020-09-30', 10], ['2020-10-01', 10], ['2020-10-02', 8], ['2020-10-03', 7], ['2020-10-04', 6], ['2020-10-05', 6], ['2020-10-06', 8], ['2020-10-07', 8], ['2020-10-08', 8], ['2020-10-09', 8], ['2020-10-10', 6], ['2020-10-11', 6], ['2020-10-12', 6], ['2020-10-13', 8], ['2020-10-14', 8], ['2020-10-15', 8], ['2020-10-16', 8], ['2020-10-17', 6], ['2020-10-18', 6], ['2020-10-19', 6], ['2020-10-20', 9], ['2020-10-21', 8], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 100], ['2020-11-05', 100], ['2020-11-06', 100], ['2020-11-07', 100], ['2020-11-08', 100], ['2020-11-09', 100], ['2020-11-10', 100], ['2020-11-11', 100], ['2020-11-12', 5], ['2020-11-13', 5], ['2020-11-14', 5], ['2020-11-15', 5], ['2020-11-16', 5], ['2020-11-17', 6], ['2020-11-18', 6], ['2020-11-19', 6], ['2020-11-20', 6], ['2020-11-21', 6], ['2020-11-22', 6], ['2020-11-23', 6]];
    var series11 = chart.line(data11)
    series11.name("México")

    var data12 = [['2020-08-26', 4], ['2020-08-27', 7], ['2020-08-28', 5], ['2020-08-29', 6], ['2020-08-30', 5], ['2020-08-31', 8], ['2020-09-01', 9], ['2020-09-02', 8], ['2020-09-03', 8], ['2020-09-04', 8], ['2020-09-05', 7], ['2020-09-06', 9], ['2020-09-07', 7], ['2020-09-08', 4], ['2020-09-09', 5], ['2020-09-10', 7], ['2020-09-11', 3], ['2020-09-12', 4], ['2020-09-13', 5], ['2020-09-14', 4], ['2020-09-15', 10], ['2020-09-16', 11], ['2020-09-17', 10], ['2020-09-18', 15], ['2020-09-19', 16], ['2020-09-20', 14], ['2020-09-21', 20], ['2020-09-22', 20], ['2020-09-23', 17], ['2020-09-24', 16], ['2020-09-25', 15], ['2020-09-26', 16], ['2020-09-27', 20], ['2020-09-28', 14], ['2020-09-29', 13], ['2020-09-30', 12], ['2020-10-01', 12], ['2020-10-02', 14], ['2020-10-03', 13], ['2020-10-04', 16], ['2020-10-05', 12], ['2020-10-06', 12], ['2020-10-07', 12], ['2020-10-08', 9], ['2020-10-09', 10], ['2020-10-10', 9], ['2020-10-11', 13], ['2020-10-12', 13], ['2020-10-13', 11], ['2020-10-14', 11], ['2020-10-15', 11], ['2020-10-16', 13], ['2020-10-17', 14], ['2020-10-18', 14], ['2020-10-19', 12], ['2020-10-20', 13], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 100], ['2020-11-05', 100], ['2020-11-06', 100], ['2020-11-07', 100], ['2020-11-08', 100], ['2020-11-09', 100], ['2020-11-10', 100], ['2020-11-11', 100], ['2020-11-12', 100], ['2020-11-13', 100], ['2020-11-14', 100], ['2020-11-15', 100], ['2020-11-16', 100], ['2020-11-17', 100], ['2020-11-18', 100], ['2020-11-19', 100], ['2020-11-20', 100], ['2020-11-21', 100], ['2020-11-22', 100], ['2020-11-23', 100]];
    var series12 = chart.line(data12)
    series12.name("Nueva Zelanda")

    var data13 = [['2020-08-26', 5], ['2020-08-27', 6], ['2020-08-28', 8], ['2020-08-29', 5], ['2020-08-30', 7], ['2020-08-31', 6], ['2020-09-01', 7], ['2020-09-02', 7], ['2020-09-03', 6], ['2020-09-04', 9], ['2020-09-05', 7], ['2020-09-06', 9], ['2020-09-07', 9], ['2020-09-08', 8], ['2020-09-09', 9], ['2020-09-10', 9], ['2020-09-11', 6], ['2020-09-12', 7], ['2020-09-13', 7], ['2020-09-14', 7], ['2020-09-15', 7], ['2020-09-16', 8], ['2020-09-17', 9], ['2020-09-18', 8], ['2020-09-19', 10], ['2020-09-20', 10], ['2020-09-21', 14], ['2020-09-22', 11], ['2020-09-23', 10], ['2020-09-24', 11], ['2020-09-25', 11], ['2020-09-26', 9], ['2020-09-27', 11], ['2020-09-28', 10], ['2020-09-29', 9], ['2020-09-30', 9], ['2020-10-01', 10], ['2020-10-02', 10], ['2020-10-03', 10], ['2020-10-04', 10], ['2020-10-05', 10], ['2020-10-06', 11], ['2020-10-07', 11], ['2020-10-08', 8], ['2020-10-09', 9], ['2020-10-10', 10], ['2020-10-11', 12], ['2020-10-12', 11], ['2020-10-13', 10], ['2020-10-14', 12], ['2020-10-15', 14], ['2020-10-16', 12], ['2020-10-17', 15], ['2020-10-18', 16], ['2020-10-19', 16], ['2020-10-20', 13], ['2020-10-21', 13], ['2020-10-22', 13], ['2020-10-23', 11], ['2020-10-24', 13], ['2020-10-25', 13], ['2020-10-26', 12], ['2020-10-27', 13], ['2020-10-28', 12], ['2020-10-29', 10], ['2020-10-30', 11], ['2020-10-31', 13], ['2020-11-01', 13], ['2020-11-02', 12], ['2020-11-03', 12], ['2020-11-04', 12], ['2020-11-05', 15], ['2020-11-06', 14], ['2020-11-07', 13], ['2020-11-08', 13], ['2020-11-09', 13], ['2020-11-10', 12], ['2020-11-11', 11], ['2020-11-12', 10], ['2020-11-13', 11], ['2020-11-14', 10], ['2020-11-15', 10], ['2020-11-16', 10], ['2020-11-17', 10], ['2020-11-18', 10], ['2020-11-19', 9], ['2020-11-20', 9], ['2020-11-21', 11], ['2020-11-22', 11], ['2020-11-23', 12]];
    var series13 = chart.line(data13)
    series13.name("Egipto")

    var data14 = [['2020-08-26', 9], ['2020-08-27', 8], ['2020-08-28', 7], ['2020-08-29', 7], ['2020-08-30', 6], ['2020-08-31', 7], ['2020-09-01', 10], ['2020-09-02', 11], ['2020-09-03', 13], ['2020-09-04', 12], ['2020-09-05', 10], ['2020-09-06', 7], ['2020-09-07', 9], ['2020-09-08', 11], ['2020-09-09', 10], ['2020-09-10', 8], ['2020-09-11', 4], ['2020-09-12', 6], ['2020-09-13', 6], ['2020-09-14', 7], ['2020-09-15', 11], ['2020-09-16', 12], ['2020-09-17', 11], ['2020-09-18', 9], ['2020-09-19', 10], ['2020-09-20', 14], ['2020-09-21', 14], ['2020-09-22', 14], ['2020-09-23', 13], ['2020-09-24', 11], ['2020-09-25', 12], ['2020-09-26', 11], ['2020-09-27', 10], ['2020-09-28', 8], ['2020-09-29', 9], ['2020-09-30', 11], ['2020-10-01', 11], ['2020-10-02', 11], ['2020-10-03', 11], ['2020-10-04', 8], ['2020-10-05', 8], ['2020-10-06', 8], ['2020-10-07', 9], ['2020-10-08', 9], ['2020-10-09', 6], ['2020-10-10', 6], ['2020-10-11', 8], ['2020-10-12', 7], ['2020-10-13', 8], ['2020-10-14', 8], ['2020-10-15', 3], ['2020-10-16', 3], ['2020-10-17', 2], ['2020-10-18', 2], ['2020-10-19', 6], ['2020-10-20', 4], ['2020-10-21', 7], ['2020-10-22', 7], ['2020-10-23', 5], ['2020-10-24', 9], ['2020-10-25', 6], ['2020-10-26', 7], ['2020-10-27', 8], ['2020-10-28', 7], ['2020-10-29', 6], ['2020-10-30', 10], ['2020-10-31', 10], ['2020-11-01', 7], ['2020-11-02', 10], ['2020-11-03', 9], ['2020-11-04', 7], ['2020-11-05', 5], ['2020-11-06', 6], ['2020-11-07', 10], ['2020-11-08', 7], ['2020-11-09', 7], ['2020-11-10', 7], ['2020-11-11', 8], ['2020-11-12', 8], ['2020-11-13', 7], ['2020-11-14', 5], ['2020-11-15', 3], ['2020-11-16', 5], ['2020-11-17', 6], ['2020-11-18', 7], ['2020-11-19', 7], ['2020-11-20', 5], ['2020-11-21', 5], ['2020-11-22', 6], ['2020-11-23', 8]];
    var series14 = chart.line(data14)
    series14.name("Sudáfrica")

    var data15 = [['2020-08-26', 3], ['2020-08-27', 2], ['2020-08-28', 2], ['2020-08-29', 2], ['2020-08-30', 3], ['2020-08-31', 3], ['2020-09-01', 4], ['2020-09-02', 4], ['2020-09-03', 4], ['2020-09-04', 4], ['2020-09-05', 3], ['2020-09-06', 4], ['2020-09-07', 5], ['2020-09-08', 5], ['2020-09-09', 5], ['2020-09-10', 7], ['2020-09-11', 4], ['2020-09-12', 3], ['2020-09-13', 3], ['2020-09-14', 6], ['2020-09-15', 9], ['2020-09-16', 8], ['2020-09-17', 9], ['2020-09-18', 8], ['2020-09-19', 8], ['2020-09-20', 10], ['2020-09-21', 15], ['2020-09-22', 20], ['2020-09-23', 20], ['2020-09-24', 18], ['2020-09-25', 12], ['2020-09-26', 3], ['2020-09-27', 4], ['2020-09-28', 15], ['2020-09-29', 16], ['2020-09-30', 16], ['2020-10-01', 15], ['2020-10-02', 13], ['2020-10-03', 6], ['2020-10-04', 3], ['2020-10-05', 13], ['2020-10-06', 17], ['2020-10-07', 15], ['2020-10-08', 14], ['2020-10-09', 8], ['2020-10-10', 3], ['2020-10-11', 3], ['2020-10-12', 4], ['2020-10-13', 11], ['2020-10-14', 11], ['2020-10-15', 12], ['2020-10-16', 9], ['2020-10-17', 1], ['2020-10-18', 2], ['2020-10-19', 6], ['2020-10-20', 10], ['2020-10-21', 12], ['2020-10-22', 13], ['2020-10-23', 6], ['2020-10-24', 4], ['2020-10-25', 3], ['2020-10-26', 11], ['2020-10-27', 13], ['2020-10-28', 13], ['2020-10-29', 13], ['2020-10-30', 9], ['2020-10-31', 5], ['2020-11-01', 4], ['2020-11-02', 4], ['2020-11-03', 8], ['2020-11-04', 8], ['2020-11-05', 8], ['2020-11-06', 7], ['2020-11-07', 2], ['2020-11-08', 2], ['2020-11-09', 6], ['2020-11-10', 8], ['2020-11-11', 9], ['2020-11-12', 9], ['2020-11-13', 8], ['2020-11-14', 4], ['2020-11-15', 2], ['2020-11-16', 4], ['2020-11-17', 5], ['2020-11-18', 8], ['2020-11-19', 12], ['2020-11-20', 6], ['2020-11-21', 5], ['2020-11-22', 3], ['2020-11-23', 4]];
    var series15 = chart.line(data15)
    series15.name("España")

    var data16 = [['2020-08-26', 4], ['2020-08-27', 5], ['2020-08-28', 5], ['2020-08-29', 6], ['2020-08-30', 5], ['2020-08-31', 5], ['2020-09-01', 7], ['2020-09-02', 7], ['2020-09-03', 5], ['2020-09-04', 5], ['2020-09-05', 7], ['2020-09-06', 2], ['2020-09-07', 7], ['2020-09-08', 5], ['2020-09-09', 6], ['2020-09-10', 7], ['2020-09-11', 5], ['2020-09-12', 5], ['2020-09-13', 5], ['2020-09-14', 6], ['2020-09-15', 5], ['2020-09-16', 7], ['2020-09-17', 6], ['2020-09-18', 9], ['2020-09-19', 6], ['2020-09-20', 5], ['2020-09-21', 10], ['2020-09-22', 11], ['2020-09-23', 11], ['2020-09-24', 8], ['2020-09-25', 9], ['2020-09-26', 8], ['2020-09-27', 2], ['2020-09-28', 2], ['2020-09-29', 8], ['2020-09-30', 10], ['2020-10-01', 8], ['2020-10-02', 9], ['2020-10-03', 8], ['2020-10-04', 4], ['2020-10-05', 9], ['2020-10-06', 11], ['2020-10-07', 10], ['2020-10-08', 10], ['2020-10-09', 10], ['2020-10-10', 7], ['2020-10-11', 4], ['2020-10-12', 5], ['2020-10-13', 10], ['2020-10-14', 10], ['2020-10-15', 10], ['2020-10-16', 9], ['2020-10-17', 6], ['2020-10-18', 4], ['2020-10-19', 5], ['2020-10-20', 5], ['2020-10-21', 7], ['2020-10-22', 7], ['2020-10-23', 7], ['2020-10-24', 7], ['2020-10-25', 4], ['2020-10-26', 1], ['2020-10-27', 5], ['2020-10-28', 5], ['2020-10-29', 6], ['2020-10-30', 6], ['2020-10-31', 5], ['2020-11-01', 6], ['2020-11-02', 2], ['2020-11-03', 5], ['2020-11-04', 5], ['2020-11-05', 5], ['2020-11-06', 6], ['2020-11-07', 6], ['2020-11-08', 6], ['2020-11-09', 6], ['2020-11-10', 5], ['2020-11-11', 6], ['2020-11-12', 7], ['2020-11-13', 7], ['2020-11-14', 6], ['2020-11-15', 5], ['2020-11-16', 3], ['2020-11-17', 6], ['2020-11-18', 6], ['2020-11-19', 5], ['2020-11-20', 6], ['2020-11-21', 6], ['2020-11-22', 7], ['2020-11-23', 8]];
    var series16 = chart.line(data16)
    series16.name("Venezuela")
    
     // set chart title
    chart.title("TIKTOK");
    // set the container element 
    chart.container("container3");

    chart.legend()
    .enabled(true)
    .fontSize(13)
    .padding([0, 0, 10, 0]);

    chart.animation(true);

    // set chart padding
    chart.padding([10, 20, 5, 20]);

    // turn on the crosshair
    chart.crosshair()
            .enabled(true);

    // initiate chart display
    chart.draw();
  }); 
