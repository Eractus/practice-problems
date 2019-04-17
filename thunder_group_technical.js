// 4.	How would you create a function to get all items in an array from a Get-All-Items API request?
// a.	url = “https://api.thundergroup.com/v1/items/“ + “?nextPage={page_id}” (optional)
// b.	JSON response data = {“inventory”: [item1, item2, item3], “nextPage”: “qaz123”} or {“inventory”: [], “nextPage”: “wsx456”}


// iterative
function getItems(url) {
  let items = [];
  let initialData;
  fetch(url).then((response) => {
    initialData = response;
  });

  let data = initialData;
  while (data["inventory"].length !== 0) {
    items = items.concat(data["inventory"]);
    let page_id = data["nextPage"];
    let newUrl = url + `?nextPage=${page_id}`
    fetch(newUrl).then((response) => {
      data = response;
    });
  }

  return items;
}

// recursive
function getItems(url, items = []) {
  let data;
  fetch(url).then((response) => {
    data = response;
  });

  if (data["inventory"].length === 0) {
    return items;
  } else {
    items = items.concat(data["inventory"]);
    let page_id = data["nextPage"];
    let newUrl = "https://api.thundergroup.com/v1/items/" + `?nextPage=${page_id}`;
    return getItems(newUrl, items);
  }
}
