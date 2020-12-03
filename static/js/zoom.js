anychart.onDocumentLoad(function () {
    // create an instance of a pie chart
    var chart = anychart.line();
    // set the data
    //chart.name("Promedio")
    var data = [['2020-08-26', 33.0], ['2020-08-27', 33.6875], ['2020-08-28', 37.9375], ['2020-08-29', 47.9375], ['2020-08-30', 50.75], ['2020-08-31', 37.1875], ['2020-09-01', 32.3125], ['2020-09-02', 30.375], ['2020-09-03', 24.125], ['2020-09-04', 26.8125], ['2020-09-05', 35.8125], ['2020-09-06', 41.4375], ['2020-09-07', 30.6875], ['2020-09-08', 24.375], ['2020-09-09', 22.5], ['2020-09-10', 22.625], ['2020-09-11', 25.3125], ['2020-09-12', 37.125], ['2020-09-13', 42.8125], ['2020-09-14', 29.75], ['2020-09-15', 31.75], ['2020-09-16', 31.625], ['2020-09-17', 31.6875], ['2020-09-18', 43.75], ['2020-09-19', 49.25], ['2020-09-20', 52.5], ['2020-09-21', 45.9375], ['2020-09-22', 38.625], ['2020-09-23', 38.4375], ['2020-09-24', 39.125], ['2020-09-25', 30.0], ['2020-09-26', 41.6875], ['2020-09-27', 46.1875], ['2020-09-28', 34.25], ['2020-09-29', 32.125], ['2020-09-30', 31.875], ['2020-10-01', 31.625], ['2020-10-02', 34.875], ['2020-10-03', 41.5], ['2020-10-04', 55.875], ['2020-10-05', 45.625], ['2020-10-06', 43.375], ['2020-10-07', 43.3125], ['2020-10-08', 43.3125], ['2020-10-09', 45.8125], ['2020-10-10', 51.625], ['2020-10-11', 55.375], ['2020-10-12', 47.3125], ['2020-10-13', 43.5], ['2020-10-14', 42.3125], ['2020-10-15', 42.375], ['2020-10-16', 45.0625], ['2020-10-17', 50.5], ['2020-10-18', 54.0625], ['2020-10-19', 44.6875], ['2020-10-20', 42.875], ['2020-10-21', 47.1875], ['2020-10-22', 53.25], ['2020-10-23', 50.3125], ['2020-10-24', 56.5625], ['2020-10-25', 60.125], ['2020-10-26', 50.375], ['2020-10-27', 48.8125], ['2020-10-28', 48.3125], ['2020-10-29', 48.3125], ['2020-10-30', 49.4375], ['2020-10-31', 52.75], ['2020-11-01', 53.375], ['2020-11-02', 48.5625], ['2020-11-03', 48.3125], ['2020-11-04', 44.125], ['2020-11-05', 43.9375], ['2020-11-06', 45.6875], ['2020-11-07', 48.875], ['2020-11-08', 52.4375], ['2020-11-09', 45.875], ['2020-11-10', 44.5], ['2020-11-11', 44.1875], ['2020-11-12', 38.375], ['2020-11-13', 39.875], ['2020-11-14', 44.5625], ['2020-11-15', 49.9375], ['2020-11-16', 42.875], ['2020-11-17', 40.375], ['2020-11-18', 33.5625], ['2020-11-19', 33.1875], ['2020-11-20', 35.375], ['2020-11-21', 46.875], ['2020-11-22', 53.1875], ['2020-11-23', 46.625]];
    var series = chart.line(data);
    series.name("promedio")
    
    var data1 = [['2020-08-26', 100], ['2020-08-27', 100], ['2020-08-28', 100], ['2020-08-29', 100], ['2020-08-30', 100], ['2020-08-31', 100], ['2020-09-01', 100], ['2020-09-02', 100], ['2020-09-03', 0], ['2020-09-04', 0], ['2020-09-05', 2], ['2020-09-06', 11], ['2020-09-07', 13], ['2020-09-08', 1], ['2020-09-09', 1], ['2020-09-10', 1], ['2020-09-11', 1], ['2020-09-12', 1], ['2020-09-13', 5], ['2020-09-14', 1], ['2020-09-15', 1], ['2020-09-16', 1], ['2020-09-17', 1], ['2020-09-18', 3], ['2020-09-19', 7], ['2020-09-20', 15], ['2020-09-21', 9], ['2020-09-22', 5], ['2020-09-23', 4], ['2020-09-24', 4], ['2020-09-25', 3], ['2020-09-26', 4], ['2020-09-27', 10], ['2020-09-28', 4], ['2020-09-29', 2], ['2020-09-30', 2], ['2020-10-01', 2], ['2020-10-02', 2], ['2020-10-03', 3], ['2020-10-04', 10], ['2020-10-05', 2], ['2020-10-06', 1], ['2020-10-07', 1], ['2020-10-08', 1], ['2020-10-09', 1], ['2020-10-10', 2], ['2020-10-11', 6], ['2020-10-12', 1], ['2020-10-13', 1], ['2020-10-14', 1], ['2020-10-15', 1], ['2020-10-16', 1], ['2020-10-17', 3], ['2020-10-18', 7], ['2020-10-19', 1], ['2020-10-20', 1], ['2020-10-21', 1], ['2020-10-22', 1], ['2020-10-23', 1], ['2020-10-24', 4], ['2020-10-25', 10], ['2020-10-26', 1], ['2020-10-27', 1], ['2020-10-28', 1], ['2020-10-29', 1], ['2020-10-30', 1], ['2020-10-31', 5], ['2020-11-01', 9], ['2020-11-02', 1], ['2020-11-03', 1], ['2020-11-04', 4], ['2020-11-05', 2], ['2020-11-06', 2], ['2020-11-07', 9], ['2020-11-08', 13], ['2020-11-09', 6], ['2020-11-10', 5], ['2020-11-11', 5], ['2020-11-12', 5], ['2020-11-13', 4], ['2020-11-14', 11], ['2020-11-15', 12], ['2020-11-16', 3], ['2020-11-17', 2], ['2020-11-18', 0], ['2020-11-19', 1], ['2020-11-20', 1], ['2020-11-21', 5], ['2020-11-22', 9], ['2020-11-23', 5]];
    var series1 = chart.line(data1)
    series1.name("USA")

    var data2 = [['2020-08-26', 100], ['2020-08-27', 100], ['2020-08-28', 100], ['2020-08-29', 100], ['2020-08-30', 100], ['2020-08-31', 100], ['2020-09-01', 100], ['2020-09-02', 100], ['2020-09-03', 100], ['2020-09-04', 100], ['2020-09-05', 100], ['2020-09-06', 100], ['2020-09-07', 100], ['2020-09-08', 100], ['2020-09-09', 100], ['2020-09-10', 100], ['2020-09-11', 100], ['2020-09-12', 100], ['2020-09-13', 100], ['2020-09-14', 100], ['2020-09-15', 100], ['2020-09-16', 100], ['2020-09-17', 100], ['2020-09-18', 100], ['2020-09-19', 100], ['2020-09-20', 100], ['2020-09-21', 100], ['2020-09-22', 100], ['2020-09-23', 100], ['2020-09-24', 100], ['2020-09-25', 10], ['2020-09-26', 25], ['2020-09-27', 26], ['2020-09-28', 16], ['2020-09-29', 10], ['2020-09-30', 10], ['2020-10-01', 7], ['2020-10-02', 16], ['2020-10-03', 32], ['2020-10-04', 32], ['2020-10-05', 24], ['2020-10-06', 7], ['2020-10-07', 5], ['2020-10-08', 5], ['2020-10-09', 10], ['2020-10-10', 21], ['2020-10-11', 21], ['2020-10-12', 10], ['2020-10-13', 6], ['2020-10-14', 2], ['2020-10-15', 2], ['2020-10-16', 11], ['2020-10-17', 23], ['2020-10-18', 27], ['2020-10-19', 5], ['2020-10-20', 3], ['2020-10-21', 2], ['2020-10-22', 3], ['2020-10-23', 15], ['2020-10-24', 30], ['2020-10-25', 43], ['2020-10-26', 16], ['2020-10-27', 9], ['2020-10-28', 9], ['2020-10-29', 9], ['2020-10-30', 15], ['2020-10-31', 34], ['2020-11-01', 39], ['2020-11-02', 25], ['2020-11-03', 26], ['2020-11-04', 20], ['2020-11-05', 21], ['2020-11-06', 26], ['2020-11-07', 42], ['2020-11-08', 46], ['2020-11-09', 20], ['2020-11-10', 15], ['2020-11-11', 16], ['2020-11-12', 14], ['2020-11-13', 22], ['2020-11-14', 45], ['2020-11-15', 46], ['2020-11-16', 19], ['2020-11-17', 17], ['2020-11-18', 18], ['2020-11-19', 13], ['2020-11-20', 18], ['2020-11-21', 33], ['2020-11-22', 42], ['2020-11-23', 13]];
    var series2 = chart.line(data2)
    series2.name("Australia")

    var data3 = [['2020-08-26', 0], ['2020-08-27', 0], ['2020-08-28', 0], ['2020-08-29', 11], ['2020-08-30', 14], ['2020-08-31', 2], ['2020-09-01', 2], ['2020-09-02', 2], ['2020-09-03', 2], ['2020-09-04', 2], ['2020-09-05', 12], ['2020-09-06', 16], ['2020-09-07', 18], ['2020-09-08', 2], ['2020-09-09', 2], ['2020-09-10', 2], ['2020-09-11', 3], ['2020-09-12', 5], ['2020-09-13', 10], ['2020-09-14', 2], ['2020-09-15', 2], ['2020-09-16', 2], ['2020-09-17', 3], ['2020-09-18', 6], ['2020-09-19', 10], ['2020-09-20', 21], ['2020-09-21', 10], ['2020-09-22', 8], ['2020-09-23', 6], ['2020-09-24', 6], ['2020-09-25', 6], ['2020-09-26', 100], ['2020-09-27', 100], ['2020-09-28', 100], ['2020-09-29', 100], ['2020-09-30', 100], ['2020-10-01', 100], ['2020-10-02', 100], ['2020-10-03', 100], ['2020-10-04', 100], ['2020-10-05', 100], ['2020-10-06', 100], ['2020-10-07', 100], ['2020-10-08', 100], ['2020-10-09', 100], ['2020-10-10', 100], ['2020-10-11', 100], ['2020-10-12', 100], ['2020-10-13', 100], ['2020-10-14', 100], ['2020-10-15', 100], ['2020-10-16', 100], ['2020-10-17', 100], ['2020-10-18', 100], ['2020-10-19', 100], ['2020-10-20', 100], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 100], ['2020-11-05', 100], ['2020-11-06', 100], ['2020-11-07', 100], ['2020-11-08', 100], ['2020-11-09', 100], ['2020-11-10', 100], ['2020-11-11', 100], ['2020-11-12', 100], ['2020-11-13', 100], ['2020-11-14', 100], ['2020-11-15', 100], ['2020-11-16', 100], ['2020-11-17', 100], ['2020-11-18', 100], ['2020-11-19', 100], ['2020-11-20', 100], ['2020-11-21', 100], ['2020-11-22', 100], ['2020-11-23', 100]];
    var series3 = chart.line(data3)
    series3.name("Canada")

    var data4 = [['2020-08-26', 66], ['2020-08-27', 63], ['2020-08-28', 78], ['2020-08-29', 100], ['2020-08-30', 100], ['2020-08-31', 78], ['2020-09-01', 47], ['2020-09-02', 41], ['2020-09-03', 31], ['2020-09-04', 27], ['2020-09-05', 64], ['2020-09-06', 83], ['2020-09-07', 28], ['2020-09-08', 23], ['2020-09-09', 18], ['2020-09-10', 14], ['2020-09-11', 20], ['2020-09-12', 100], ['2020-09-13', 100], ['2020-09-14', 100], ['2020-09-15', 100], ['2020-09-16', 100], ['2020-09-17', 100], ['2020-09-18', 100], ['2020-09-19', 100], ['2020-09-20', 100], ['2020-09-21', 100], ['2020-09-22', 100], ['2020-09-23', 100], ['2020-09-24', 100], ['2020-09-25', 29], ['2020-09-26', 50], ['2020-09-27', 66], ['2020-09-28', 20], ['2020-09-29', 15], ['2020-09-30', 18], ['2020-10-01', 14], ['2020-10-02', 21], ['2020-10-03', 55], ['2020-10-04', 80], ['2020-10-05', 22], ['2020-10-06', 16], ['2020-10-07', 15], ['2020-10-08', 14], ['2020-10-09', 19], ['2020-10-10', 42], ['2020-10-11', 62], ['2020-10-12', 18], ['2020-10-13', 12], ['2020-10-14', 14], ['2020-10-15', 11], ['2020-10-16', 15], ['2020-10-17', 40], ['2020-10-18', 66], ['2020-10-19', 19], ['2020-10-20', 16], ['2020-10-21', 15], ['2020-10-22', 17], ['2020-10-23', 23], ['2020-10-24', 49], ['2020-10-25', 67], ['2020-10-26', 31], ['2020-10-27', 22], ['2020-10-28', 18], ['2020-10-29', 8], ['2020-10-30', 4], ['2020-10-31', 5], ['2020-11-01', 4], ['2020-11-02', 3], ['2020-11-03', 2], ['2020-11-04', 2], ['2020-11-05', 2], ['2020-11-06', 2], ['2020-11-07', 3], ['2020-11-08', 5], ['2020-11-09', 2], ['2020-11-10', 2], ['2020-11-11', 2], ['2020-11-12', 2], ['2020-11-13', 2], ['2020-11-14', 2], ['2020-11-15', 4], ['2020-11-16', 2], ['2020-11-17', 2], ['2020-11-18', 2], ['2020-11-19', 3], ['2020-11-20', 5], ['2020-11-21', 8], ['2020-11-22', 12], ['2020-11-23', 5]];
    var series4 = chart.line(data4)
    series4.name("Francia")

    var data5 = [['2020-08-26', 34], ['2020-08-27', 40], ['2020-08-28', 59], ['2020-08-29', 100], ['2020-08-30', 100], ['2020-08-31', 56], ['2020-09-01', 43], ['2020-09-02', 34], ['2020-09-03', 41], ['2020-09-04', 53], ['2020-09-05', 78], ['2020-09-06', 88], ['2020-09-07', 48], ['2020-09-08', 37], ['2020-09-09', 35], ['2020-09-10', 39], ['2020-09-11', 46], ['2020-09-12', 83], ['2020-09-13', 100], ['2020-09-14', 41], ['2020-09-15', 100], ['2020-09-16', 100], ['2020-09-17', 100], ['2020-09-18', 100], ['2020-09-19', 100], ['2020-09-20', 100], ['2020-09-21', 100], ['2020-09-22', 100], ['2020-09-23', 100], ['2020-09-24', 100], ['2020-09-25', 100], ['2020-09-26', 100], ['2020-09-27', 100], ['2020-09-28', 100], ['2020-09-29', 100], ['2020-09-30', 100], ['2020-10-01', 100], ['2020-10-02', 100], ['2020-10-03', 100], ['2020-10-04', 100], ['2020-10-05', 100], ['2020-10-06', 100], ['2020-10-07', 100], ['2020-10-08', 100], ['2020-10-09', 100], ['2020-10-10', 100], ['2020-10-11', 100], ['2020-10-12', 100], ['2020-10-13', 100], ['2020-10-14', 100], ['2020-10-15', 100], ['2020-10-16', 100], ['2020-10-17', 100], ['2020-10-18', 100], ['2020-10-19', 100], ['2020-10-20', 100], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 14], ['2020-10-24', 33], ['2020-10-25', 29], ['2020-10-26', 5], ['2020-10-27', 5], ['2020-10-28', 5], ['2020-10-29', 5], ['2020-10-30', 6], ['2020-10-31', 14], ['2020-11-01', 5], ['2020-11-02', 2], ['2020-11-03', 2], ['2020-11-04', 2], ['2020-11-05', 2], ['2020-11-06', 2], ['2020-11-07', 7], ['2020-11-08', 7], ['2020-11-09', 2], ['2020-11-10', 3], ['2020-11-11', 3], ['2020-11-12', 3], ['2020-11-13', 4], ['2020-11-14', 12], ['2020-11-15', 12], ['2020-11-16', 4], ['2020-11-17', 3], ['2020-11-18', 3], ['2020-11-19', 4], ['2020-11-20', 5], ['2020-11-21', 13], ['2020-11-22', 15], ['2020-11-23', 8]];
    var series5 = chart.line(data5)
    series5.name("Alemania")

    var data6 = [['2020-08-26', 100], ['2020-08-27', 100], ['2020-08-28', 100], ['2020-08-29', 100], ['2020-08-30', 100], ['2020-08-31', 100], ['2020-09-01', 100], ['2020-09-02', 100], ['2020-09-03', 100], ['2020-09-04', 100], ['2020-09-05', 100], ['2020-09-06', 100], ['2020-09-07', 100], ['2020-09-08', 100], ['2020-09-09', 100], ['2020-09-10', 100], ['2020-09-11', 100], ['2020-09-12', 100], ['2020-09-13', 100], ['2020-09-14', 100], ['2020-09-15', 100], ['2020-09-16', 100], ['2020-09-17', 100], ['2020-09-18', 100], ['2020-09-19', 100], ['2020-09-20', 100], ['2020-09-21', 100], ['2020-09-22', 11], ['2020-09-23', 9], ['2020-09-24', 11], ['2020-09-25', 14], ['2020-09-26', 35], ['2020-09-27', 35], ['2020-09-28', 8], ['2020-09-29', 5], ['2020-09-30', 5], ['2020-10-01', 5], ['2020-10-02', 7], ['2020-10-03', 29], ['2020-10-04', 34], ['2020-10-05', 6], ['2020-10-06', 5], ['2020-10-07', 5], ['2020-10-08', 4], ['2020-10-09', 6], ['2020-10-10', 26], ['2020-10-11', 29], ['2020-10-12', 5], ['2020-10-13', 5], ['2020-10-14', 5], ['2020-10-15', 4], ['2020-10-16', 6], ['2020-10-17', 18], ['2020-10-18', 22], ['2020-10-19', 5], ['2020-10-20', 4], ['2020-10-21', 3], ['2020-10-22', 3], ['2020-10-23', 6], ['2020-10-24', 18], ['2020-10-25', 26], ['2020-10-26', 11], ['2020-10-27', 9], ['2020-10-28', 9], ['2020-10-29', 12], ['2020-10-30', 17], ['2020-10-31', 18], ['2020-11-01', 18], ['2020-11-02', 5], ['2020-11-03', 6], ['2020-11-04', 6], ['2020-11-05', 3], ['2020-11-06', 3], ['2020-11-07', 5], ['2020-11-08', 5], ['2020-11-09', 3], ['2020-11-10', 2], ['2020-11-11', 2], ['2020-11-12', 2], ['2020-11-13', 3], ['2020-11-14', 5], ['2020-11-15', 8], ['2020-11-16', 5], ['2020-11-17', 4], ['2020-11-18', 3], ['2020-11-19', 3], ['2020-11-20', 6], ['2020-11-21', 100], ['2020-11-22', 100], ['2020-11-23', 100]];
    var series6 = chart.line(data6)
    series6.name("Reino Unido")

    var data7 = [['2020-08-26', 42], ['2020-08-27', 45], ['2020-08-28', 58], ['2020-08-29', 88], ['2020-08-30', 79], ['2020-08-31', 35], ['2020-09-01', 31], ['2020-09-02', 27], ['2020-09-03', 28], ['2020-09-04', 30], ['2020-09-05', 56], ['2020-09-06', 56], ['2020-09-07', 27], ['2020-09-08', 22], ['2020-09-09', 17], ['2020-09-10', 15], ['2020-09-11', 24], ['2020-09-12', 49], ['2020-09-13', 65], ['2020-09-14', 24], ['2020-09-15', 20], ['2020-09-16', 16], ['2020-09-17', 20], ['2020-09-18', 100], ['2020-09-19', 100], ['2020-09-20', 100], ['2020-09-21', 100], ['2020-09-22', 100], ['2020-09-23', 100], ['2020-09-24', 100], ['2020-09-25', 100], ['2020-09-26', 100], ['2020-09-27', 100], ['2020-09-28', 100], ['2020-09-29', 100], ['2020-09-30', 100], ['2020-10-01', 100], ['2020-10-02', 100], ['2020-10-03', 100], ['2020-10-04', 100], ['2020-10-05', 100], ['2020-10-06', 100], ['2020-10-07', 100], ['2020-10-08', 100], ['2020-10-09', 100], ['2020-10-10', 100], ['2020-10-11', 100], ['2020-10-12', 100], ['2020-10-13', 100], ['2020-10-14', 100], ['2020-10-15', 100], ['2020-10-16', 100], ['2020-10-17', 100], ['2020-10-18', 100], ['2020-10-19', 100], ['2020-10-20', 100], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 100], ['2020-11-05', 100], ['2020-11-06', 100], ['2020-11-07', 100], ['2020-11-08', 100], ['2020-11-09', 100], ['2020-11-10', 100], ['2020-11-11', 100], ['2020-11-12', 100], ['2020-11-13', 100], ['2020-11-14', 100], ['2020-11-15', 100], ['2020-11-16', 100], ['2020-11-17', 100], ['2020-11-18', 100], ['2020-11-19', 100], ['2020-11-20', 100], ['2020-11-21', 100], ['2020-11-22', 100], ['2020-11-23', 100]];
    var series7 = chart.line(data7)
    series7.name("Italia")

    var data8 = [['2020-08-26', 2], ['2020-08-27', 2], ['2020-08-28', 3], ['2020-08-29', 6], ['2020-08-30', 13], ['2020-08-31', 6], ['2020-09-01', 3], ['2020-09-02', 3], ['2020-09-03', 3], ['2020-09-04', 3], ['2020-09-05', 7], ['2020-09-06', 19], ['2020-09-07', 5], ['2020-09-08', 3], ['2020-09-09', 4], ['2020-09-10', 4], ['2020-09-11', 4], ['2020-09-12', 9], ['2020-09-13', 18], ['2020-09-14', 4], ['2020-09-15', 3], ['2020-09-16', 3], ['2020-09-17', 3], ['2020-09-18', 5], ['2020-09-19', 12], ['2020-09-20', 26], ['2020-09-21', 10], ['2020-09-22', 6], ['2020-09-23', 5], ['2020-09-24', 4], ['2020-09-25', 4], ['2020-09-26', 8], ['2020-09-27', 22], ['2020-09-28', 5], ['2020-09-29', 3], ['2020-09-30', 3], ['2020-10-01', 3], ['2020-10-02', 3], ['2020-10-03', 9], ['2020-10-04', 100], ['2020-10-05', 100], ['2020-10-06', 100], ['2020-10-07', 100], ['2020-10-08', 100], ['2020-10-09', 100], ['2020-10-10', 100], ['2020-10-11', 100], ['2020-10-12', 100], ['2020-10-13', 100], ['2020-10-14', 100], ['2020-10-15', 100], ['2020-10-16', 100], ['2020-10-17', 100], ['2020-10-18', 100], ['2020-10-19', 100], ['2020-10-20', 100], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 100], ['2020-11-05', 100], ['2020-11-06', 100], ['2020-11-07', 100], ['2020-11-08', 100], ['2020-11-09', 100], ['2020-11-10', 100], ['2020-11-11', 100], ['2020-11-12', 100], ['2020-11-13', 100], ['2020-11-14', 100], ['2020-11-15', 100], ['2020-11-16', 100], ['2020-11-17', 100], ['2020-11-18', 5], ['2020-11-19', 4], ['2020-11-20', 6], ['2020-11-21', 26], ['2020-11-22', 48], ['2020-11-23', 51]];
    var series8 = chart.line(data8)
    series8.name("Argentina")

    var data9 = [['2020-08-26', 17], ['2020-08-27', 12], ['2020-08-28', 15], ['2020-08-29', 18], ['2020-08-30', 46], ['2020-08-31', 36], ['2020-09-01', 17], ['2020-09-02', 17], ['2020-09-03', 21], ['2020-09-04', 29], ['2020-09-05', 35], ['2020-09-06', 54], ['2020-09-07', 83], ['2020-09-08', 43], ['2020-09-09', 28], ['2020-09-10', 22], ['2020-09-11', 24], ['2020-09-12', 27], ['2020-09-13', 51], ['2020-09-14', 30], ['2020-09-15', 20], ['2020-09-16', 16], ['2020-09-17', 19], ['2020-09-18', 100], ['2020-09-19', 100], ['2020-09-20', 100], ['2020-09-21', 100], ['2020-09-22', 100], ['2020-09-23', 100], ['2020-09-24', 100], ['2020-09-25', 100], ['2020-09-26', 100], ['2020-09-27', 100], ['2020-09-28', 100], ['2020-09-29', 100], ['2020-09-30', 100], ['2020-10-01', 100], ['2020-10-02', 100], ['2020-10-03', 100], ['2020-10-04', 100], ['2020-10-05', 100], ['2020-10-06', 100], ['2020-10-07', 100], ['2020-10-08', 100], ['2020-10-09', 100], ['2020-10-10', 100], ['2020-10-11', 100], ['2020-10-12', 100], ['2020-10-13', 100], ['2020-10-14', 100], ['2020-10-15', 100], ['2020-10-16', 100], ['2020-10-17', 100], ['2020-10-18', 100], ['2020-10-19', 100], ['2020-10-20', 100], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 43], ['2020-11-05', 39], ['2020-11-06', 42], ['2020-11-07', 48], ['2020-11-08', 78], ['2020-11-09', 55], ['2020-11-10', 43], ['2020-11-11', 42], ['2020-11-12', 44], ['2020-11-13', 46], ['2020-11-14', 59], ['2020-11-15', 100], ['2020-11-16', 66], ['2020-11-17', 52], ['2020-11-18', 51], ['2020-11-19', 53], ['2020-11-20', 57], ['2020-11-21', 64], ['2020-11-22', 89], ['2020-11-23', 74]];
    var series9 = chart.line(data9)
    series9.name("Brasil")

    var data10 = [['2020-08-26', 5], ['2020-08-27', 5], ['2020-08-28', 5], ['2020-08-29', 5], ['2020-08-30', 5], ['2020-08-31', 5], ['2020-09-01', 5], ['2020-09-02', 5], ['2020-09-03', 5], ['2020-09-04', 5], ['2020-09-05', 5], ['2020-09-06', 6], ['2020-09-07', 6], ['2020-09-08', 4], ['2020-09-09', 4], ['2020-09-10', 4], ['2020-09-11', 4], ['2020-09-12', 4], ['2020-09-13', 6], ['2020-09-14', 5], ['2020-09-15', 5], ['2020-09-16', 4], ['2020-09-17', 5], ['2020-09-18', 5], ['2020-09-19', 11], ['2020-09-20', 12], ['2020-09-21', 9], ['2020-09-22', 10], ['2020-09-23', 11], ['2020-09-24', 11], ['2020-09-25', 9], ['2020-09-26', 7], ['2020-09-27', 9], ['2020-09-28', 9], ['2020-09-29', 11], ['2020-09-30', 9], ['2020-10-01', 10], ['2020-10-02', 13], ['2020-10-03', 9], ['2020-10-04', 100], ['2020-10-05', 100], ['2020-10-06', 100], ['2020-10-07', 100], ['2020-10-08', 100], ['2020-10-09', 100], ['2020-10-10', 100], ['2020-10-11', 100], ['2020-10-12', 100], ['2020-10-13', 100], ['2020-10-14', 100], ['2020-10-15', 100], ['2020-10-16', 100], ['2020-10-17', 100], ['2020-10-18', 100], ['2020-10-19', 100], ['2020-10-20', 100], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 100], ['2020-11-05', 100], ['2020-11-06', 100], ['2020-11-07', 100], ['2020-11-08', 100], ['2020-11-09', 100], ['2020-11-10', 100], ['2020-11-11', 100], ['2020-11-12', 100], ['2020-11-13', 100], ['2020-11-14', 100], ['2020-11-15', 100], ['2020-11-16', 100], ['2020-11-17', 100], ['2020-11-18', 100], ['2020-11-19', 100], ['2020-11-20', 100], ['2020-11-21', 100], ['2020-11-22', 100], ['2020-11-23', 100]];
    var series10 = chart.line(data10)
    series10.name("India")

    var data11 = [['2020-08-26', 2], ['2020-08-27', 2], ['2020-08-28', 1], ['2020-08-29', 1], ['2020-08-30', 7], ['2020-08-31', 3], ['2020-09-01', 4], ['2020-09-02', 2], ['2020-09-03', 2], ['2020-09-04', 3], ['2020-09-05', 4], ['2020-09-06', 11], ['2020-09-07', 4], ['2020-09-08', 3], ['2020-09-09', 3], ['2020-09-10', 3], ['2020-09-11', 3], ['2020-09-12', 4], ['2020-09-13', 10], ['2020-09-14', 4], ['2020-09-15', 3], ['2020-09-16', 10], ['2020-09-17', 3], ['2020-09-18', 4], ['2020-09-19', 10], ['2020-09-20', 15], ['2020-09-21', 5], ['2020-09-22', 3], ['2020-09-23', 4], ['2020-09-24', 4], ['2020-09-25', 2], ['2020-09-26', 4], ['2020-09-27', 12], ['2020-09-28', 2], ['2020-09-29', 2], ['2020-09-30', 2], ['2020-10-01', 2], ['2020-10-02', 2], ['2020-10-03', 6], ['2020-10-04', 13], ['2020-10-05', 8], ['2020-10-06', 3], ['2020-10-07', 2], ['2020-10-08', 2], ['2020-10-09', 3], ['2020-10-10', 7], ['2020-10-11', 13], ['2020-10-12', 8], ['2020-10-13', 6], ['2020-10-14', 4], ['2020-10-15', 4], ['2020-10-16', 5], ['2020-10-17', 7], ['2020-10-18', 17], ['2020-10-19', 8], ['2020-10-20', 8], ['2020-10-21', 7], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 100], ['2020-11-05', 100], ['2020-11-06', 100], ['2020-11-07', 100], ['2020-11-08', 100], ['2020-11-09', 100], ['2020-11-10', 100], ['2020-11-11', 100], ['2020-11-12', 6], ['2020-11-13', 6], ['2020-11-14', 9], ['2020-11-15', 21], ['2020-11-16', 25], ['2020-11-17', 11], ['2020-11-18', 7], ['2020-11-19', 7], ['2020-11-20', 7], ['2020-11-21', 10], ['2020-11-22', 24], ['2020-11-23', 25]];
    var series11 = chart.line(data11)
    series11.name("Mexico")

    var data12 = [['2020-08-26', 1], ['2020-08-27', 3], ['2020-08-28', 9], ['2020-08-29', 19], ['2020-08-30', 21], ['2020-08-31', 16], ['2020-09-01', 15], ['2020-09-02', 14], ['2020-09-03', 14], ['2020-09-04', 25], ['2020-09-05', 34], ['2020-09-06', 36], ['2020-09-07', 20], ['2020-09-08', 15], ['2020-09-09', 13], ['2020-09-10', 19], ['2020-09-11', 21], ['2020-09-12', 36], ['2020-09-13', 35], ['2020-09-14', 20], ['2020-09-15', 19], ['2020-09-16', 18], ['2020-09-17', 19], ['2020-09-18', 28], ['2020-09-19', 44], ['2020-09-20', 47], ['2020-09-21', 28], ['2020-09-22', 23], ['2020-09-23', 27], ['2020-09-24', 27], ['2020-09-25', 32], ['2020-09-26', 46], ['2020-09-27', 56], ['2020-09-28', 36], ['2020-09-29', 25], ['2020-09-30', 26], ['2020-10-01', 26], ['2020-10-02', 38], ['2020-10-03', 48], ['2020-10-04', 37], ['2020-10-05', 29], ['2020-10-06', 28], ['2020-10-07', 30], ['2020-10-08', 27], ['2020-10-09', 39], ['2020-10-10', 48], ['2020-10-11', 49], ['2020-10-12', 24], ['2020-10-13', 22], ['2020-10-14', 19], ['2020-10-15', 23], ['2020-10-16', 33], ['2020-10-17', 49], ['2020-10-18', 44], ['2020-10-19', 34], ['2020-10-20', 23], ['2020-10-21', 100], ['2020-10-22', 100], ['2020-10-23', 100], ['2020-10-24', 100], ['2020-10-25', 100], ['2020-10-26', 100], ['2020-10-27', 100], ['2020-10-28', 100], ['2020-10-29', 100], ['2020-10-30', 100], ['2020-10-31', 100], ['2020-11-01', 100], ['2020-11-02', 100], ['2020-11-03', 100], ['2020-11-04', 100], ['2020-11-05', 100], ['2020-11-06', 100], ['2020-11-07', 100], ['2020-11-08', 100], ['2020-11-09', 100], ['2020-11-10', 100], ['2020-11-11', 100], ['2020-11-12', 100], ['2020-11-13', 100], ['2020-11-14', 100], ['2020-11-15', 100], ['2020-11-16', 100], ['2020-11-17', 100], ['2020-11-18', 100], ['2020-11-19', 100], ['2020-11-20', 100], ['2020-11-21', 100], ['2020-11-22', 100], ['2020-11-23', 100]];
    var series12 = chart.line(data12)
    series12.name("Nueva Zelanda")

    var data13 = [['2020-08-26', 12], ['2020-08-27', 17], ['2020-08-28', 20], ['2020-08-29', 19], ['2020-08-30', 14], ['2020-08-31', 12], ['2020-09-01', 11], ['2020-09-02', 11], ['2020-09-03', 12], ['2020-09-04', 17], ['2020-09-05', 13], ['2020-09-06', 10], ['2020-09-07', 10], ['2020-09-08', 11], ['2020-09-09', 11], ['2020-09-10', 14], ['2020-09-11', 22], ['2020-09-12', 16], ['2020-09-13', 11], ['2020-09-14', 11], ['2020-09-15', 11], ['2020-09-16', 12], ['2020-09-17', 14], ['2020-09-18', 18], ['2020-09-19', 21], ['2020-09-20', 17], ['2020-09-21', 19], ['2020-09-22', 18], ['2020-09-23', 19], ['2020-09-24', 20], ['2020-09-25', 28], ['2020-09-26', 20], ['2020-09-27', 15], ['2020-09-28', 15], ['2020-09-29', 17], ['2020-09-30', 16], ['2020-10-01', 20], ['2020-10-02', 25], ['2020-10-03', 17], ['2020-10-04', 15], ['2020-10-05', 15], ['2020-10-06', 13], ['2020-10-07', 14], ['2020-10-08', 21], ['2020-10-09', 22], ['2020-10-10', 16], ['2020-10-11', 13], ['2020-10-12', 13], ['2020-10-13', 12], ['2020-10-14', 13], ['2020-10-15', 13], ['2020-10-16', 17], ['2020-10-17', 12], ['2020-10-18', 9], ['2020-10-19', 9], ['2020-10-20', 8], ['2020-10-21', 8], ['2020-10-22', 9], ['2020-10-23', 16], ['2020-10-24', 11], ['2020-10-25', 8], ['2020-10-26', 8], ['2020-10-27', 8], ['2020-10-28', 8], ['2020-10-29', 15], ['2020-10-30', 18], ['2020-10-31', 14], ['2020-11-01', 10], ['2020-11-02', 8], ['2020-11-03', 8], ['2020-11-04', 9], ['2020-11-05', 12], ['2020-11-06', 21], ['2020-11-07', 19], ['2020-11-08', 11], ['2020-11-09', 12], ['2020-11-10', 13], ['2020-11-11', 14], ['2020-11-12', 15], ['2020-11-13', 21], ['2020-11-14', 18], ['2020-11-15', 14], ['2020-11-16', 14], ['2020-11-17', 14], ['2020-11-18', 13], ['2020-11-19', 12], ['2020-11-20', 22], ['2020-11-21', 16], ['2020-11-22', 16], ['2020-11-23', 16]];
    var series13 = chart.line(data13)
    series13.name("Egipto")

    var data14 = [['2020-08-26', 2], ['2020-08-27', 2], ['2020-08-28', 4], ['2020-08-29', 8], ['2020-08-30', 9], ['2020-08-31', 6], ['2020-09-01', 6], ['2020-09-02', 5], ['2020-09-03', 4], ['2020-09-04', 8], ['2020-09-05', 12], ['2020-09-06', 12], ['2020-09-07', 7], ['2020-09-08', 6], ['2020-09-09', 3], ['2020-09-10', 4], ['2020-09-11', 9], ['2020-09-12', 15], ['2020-09-13', 17], ['2020-09-14', 12], ['2020-09-15', 4], ['2020-09-16', 10], ['2020-09-17', 8], ['2020-09-18', 12], ['2020-09-19', 19], ['2020-09-20', 25], ['2020-09-21', 16], ['2020-09-22', 12], ['2020-09-23', 11], ['2020-09-24', 16], ['2020-09-25', 19], ['2020-09-26', 26], ['2020-09-27', 29], ['2020-09-28', 16], ['2020-09-29', 13], ['2020-09-30', 10], ['2020-10-01', 9], ['2020-10-02', 15], ['2020-10-03', 19], ['2020-10-04', 20], ['2020-10-05', 12], ['2020-10-06', 10], ['2020-10-07', 8], ['2020-10-08', 6], ['2020-10-09', 14], ['2020-10-10', 20], ['2020-10-11', 21], ['2020-10-12', 12], ['2020-10-13', 12], ['2020-10-14', 6], ['2020-10-15', 8], ['2020-10-16', 13], ['2020-10-17', 18], ['2020-10-18', 23], ['2020-10-19', 14], ['2020-10-20', 11], ['2020-10-21', 9], ['2020-10-22', 9], ['2020-10-23', 14], ['2020-10-24', 21], ['2020-10-25', 29], ['2020-10-26', 14], ['2020-10-27', 14], ['2020-10-28', 12], ['2020-10-29', 13], ['2020-10-30', 17], ['2020-10-31', 27], ['2020-11-01', 32], ['2020-11-02', 17], ['2020-11-03', 18], ['2020-11-04', 10], ['2020-11-05', 11], ['2020-11-06', 20], ['2020-11-07', 23], ['2020-11-08', 31], ['2020-11-09', 18], ['2020-11-10', 14], ['2020-11-11', 12], ['2020-11-12', 11], ['2020-11-13', 16], ['2020-11-14', 22], ['2020-11-15', 32], ['2020-11-16', 17], ['2020-11-17', 14], ['2020-11-18', 14], ['2020-11-19', 12], ['2020-11-20', 18], ['2020-11-21', 35], ['2020-11-22', 39], ['2020-11-23', 24]];
    var series14 = chart.line(data14)
    series14.name("Sudafrica")

    var data15 = [['2020-08-26', 37], ['2020-08-27', 40], ['2020-08-28', 47], ['2020-08-29', 84], ['2020-08-30', 96], ['2020-08-31', 32], ['2020-09-01', 24], ['2020-09-02', 16], ['2020-09-03', 14], ['2020-09-04', 17], ['2020-09-05', 42], ['2020-09-06', 52], ['2020-09-07', 13], ['2020-09-08', 11], ['2020-09-09', 12], ['2020-09-10', 12], ['2020-09-11', 15], ['2020-09-12', 35], ['2020-09-13', 46], ['2020-09-14', 13], ['2020-09-15', 14], ['2020-09-16', 12], ['2020-09-17', 10], ['2020-09-18', 15], ['2020-09-19', 42], ['2020-09-20', 50], ['2020-09-21', 23], ['2020-09-22', 16], ['2020-09-23', 15], ['2020-09-24', 16], ['2020-09-25', 18], ['2020-09-26', 32], ['2020-09-27', 46], ['2020-09-28', 12], ['2020-09-29', 7], ['2020-09-30', 7], ['2020-10-01', 7], ['2020-10-02', 14], ['2020-10-03', 33], ['2020-10-04', 43], ['2020-10-05', 10], ['2020-10-06', 8], ['2020-10-07', 8], ['2020-10-08', 8], ['2020-10-09', 13], ['2020-10-10', 34], ['2020-10-11', 59], ['2020-10-12', 54], ['2020-10-13', 14], ['2020-10-14', 7], ['2020-10-15', 5], ['2020-10-16', 12], ['2020-10-17', 28], ['2020-10-18', 40], ['2020-10-19', 10], ['2020-10-20', 6], ['2020-10-21', 5], ['2020-10-22', 2], ['2020-10-23', 7], ['2020-10-24', 29], ['2020-10-25', 40], ['2020-10-26', 12], ['2020-10-27', 5], ['2020-10-28', 4], ['2020-10-29', 3], ['2020-10-30', 5], ['2020-10-31', 16], ['2020-11-01', 23], ['2020-11-02', 3], ['2020-11-03', 1], ['2020-11-04', 1], ['2020-11-05', 1], ['2020-11-06', 3], ['2020-11-07', 12], ['2020-11-08', 23], ['2020-11-09', 5], ['2020-11-10', 3], ['2020-11-11', 2], ['2020-11-12', 2], ['2020-11-13', 3], ['2020-11-14', 16], ['2020-11-15', 27], ['2020-11-16', 6], ['2020-11-17', 4], ['2020-11-18', 4], ['2020-11-19', 3], ['2020-11-20', 7], ['2020-11-21', 22], ['2020-11-22', 34], ['2020-11-23', 14]];
    var series15 = chart.line(data15)
    series15.name("Espana")

    var data16 = [['2020-08-26', 8], ['2020-08-27', 8], ['2020-08-28', 8], ['2020-08-29', 8], ['2020-08-30', 8], ['2020-08-31', 8], ['2020-09-01', 9], ['2020-09-02', 9], ['2020-09-03', 9], ['2020-09-04', 10], ['2020-09-05', 9], ['2020-09-06', 9], ['2020-09-07', 9], ['2020-09-08', 9], ['2020-09-09', 9], ['2020-09-10', 9], ['2020-09-11', 9], ['2020-09-12', 10], ['2020-09-13', 11], ['2020-09-14', 9], ['2020-09-15', 6], ['2020-09-16', 2], ['2020-09-17', 2], ['2020-09-18', 4], ['2020-09-19', 12], ['2020-09-20', 12], ['2020-09-21', 6], ['2020-09-22', 6], ['2020-09-23', 4], ['2020-09-24', 7], ['2020-09-25', 6], ['2020-09-26', 10], ['2020-09-27', 13], ['2020-09-28', 5], ['2020-09-29', 4], ['2020-09-30', 2], ['2020-10-01', 1], ['2020-10-02', 2], ['2020-10-03', 4], ['2020-10-04', 10], ['2020-10-05', 2], ['2020-10-06', 3], ['2020-10-07', 5], ['2020-10-08', 5], ['2020-10-09', 6], ['2020-10-10', 10], ['2020-10-11', 13], ['2020-10-12', 12], ['2020-10-13', 6], ['2020-10-14', 6], ['2020-10-15', 7], ['2020-10-16', 8], ['2020-10-17', 10], ['2020-10-18', 10], ['2020-10-19', 10], ['2020-10-20', 6], ['2020-10-21', 5], ['2020-10-22', 8], ['2020-10-23', 9], ['2020-10-24', 10], ['2020-10-25', 10], ['2020-10-26', 8], ['2020-10-27', 8], ['2020-10-28', 7], ['2020-10-29', 7], ['2020-10-30', 8], ['2020-10-31', 11], ['2020-11-01', 14], ['2020-11-02', 13], ['2020-11-03', 9], ['2020-11-04', 9], ['2020-11-05', 10], ['2020-11-06', 10], ['2020-11-07', 14], ['2020-11-08', 20], ['2020-11-09', 11], ['2020-11-10', 12], ['2020-11-11', 9], ['2020-11-12', 10], ['2020-11-13', 11], ['2020-11-14', 14], ['2020-11-15', 23], ['2020-11-16', 25], ['2020-11-17', 23], ['2020-11-18', 17], ['2020-11-19', 16], ['2020-11-20', 14], ['2020-11-21', 18], ['2020-11-22', 23], ['2020-11-23', 11]];
    var series16 = chart.line(data16)
    series16.name("Venezuela")
    
     // set chart title
    chart.title("ZOOM");
    // set the container element 
    chart.container("container2");

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
