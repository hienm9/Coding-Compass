async function searchHandler(event) {
    event.preventDefault();
  
    const searchTerm1 = document.querySelector(".searchInput").value.trim();
    const searchTerm2 = document.getElementsByClassName(".searchInput").value.trim();

    // console.log(searchTerm1);
    window.alert(searchTerm1 + "SearchTESTING!" + searchTerm2);
    console.log(searchTerm2);

    const response = await fetch('/results', {
      method: 'GET',
      body: JSON.stringify({
        name: searchTerm2
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace("/results");
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#submit-btn').addEventListener('submit', searchHandler);