// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// // 3. Use this function to update the filters. 
function updateFilters() {
//     console.log('hello');
      // let changedElement = d3.select(this)
      // let elementValue = changedElement.property('value');
      // let filterId = changedElement.attr('id');
      // if (elementValue) {
      //   filters[filterId] = elementValue;
      // }
      // else {
      //   delete filters[filterId]
      
//     // 4a. Save the element that was changed as a variable.
      var changedDate = d3.select(this);
      var changedCity = d3.select(this);
      var changedState = d3.select(this);
      var changedCountry = d3.select(this);
      var changedShape = d3.select(this);
      console.log(changedDate);

//     // 4b. Save the value that was changed as a variable.
      let dateValue = changedDate.property('value');
      let cityValue = changedCity.property('value');
      let stateValue = changedState.property('value');
      let countryValue = changedCountry.property('value');
      let shapeValue = changedShape.property('value');
      console.log(dateValue);
      
//     // 4c. Save the id of the filter that was changed as a variable.
      let dateId = changedDate.attr('id');
      let cityId = changedCity.attr('id');
      let stateId = changedState.attr('id');
      let countryId = changedCountry.attr('id');
      let shapeId = changedShape.attr('id');
      console.log(cityId)
      
      if (dateValue) {
          filters[dateId] = dateValue;
        }
        else {
          delete filters[dateId]
        }
//     // 5. If a filter value was entered then add that filterId and value
//     // to the filters list. Otherwise, clear that filter from the filters object.
      // var filterDate = tableData.filter(tableData => tableData.datetime == dateValue);
      // var filterCity = tableData.filter(tableData => tableData.city == cityValue);
      // var filterState = tableData.filter(tableData => tableData.state == stateValue);
      // var filterCountry = tableData.filter(tableData => tableData.country == countryValue);
      // var filterShape = tableData.filter(tableData => tableData.shape == shapeValue);
      // console.log(filterDate)

      }
//updateFilters()
//     // 6. Call function to apply all filters and rebuild the table
//     //filterTable();
  


d3.selectAll('#input').on('change', updateFilters);

  // // 7. Use this function to filter the table when data is entered.
  // function filterTable() {
    
  
    // 8. Set the filtered data to the tableData.
    //let filteredData = tableData;
    
 
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    
  // }

  // //function handleClick() {
  //     // Grab the datetime  value from the filter
  //     //let date = d3.select('#datetime').property('value');
  //     //let filteredData = tableData;
  
  //     // Check to see if a date was entered and filter the data using that date
  //     //if (date) {
  //         // Apply 'filter' to the table data to only keep the rows where the datetime value matches the filter value
  //         //filteredData = filteredData.filter(row => row.datetime === date);
  //     //};
  
  //     //Rebuild the table using the filtered data- if no date was entered, then filteredData will just be the original tableData
  //     //buildTable(filteredData);
  // //};
  // console.log(date)
  // 2. Attach an event to listen for changes to each filter
  
  
  // Build the table when the page loads
  buildTable(tableData);
