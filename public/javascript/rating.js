$(".rating").raty({
  click: async function (score, evt) {
    evt.preventDefault();
    // console.log(score);

    const rating_num = score;
    const bootcamp_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/ratings', {
      method: 'POST',
      body: JSON.stringify({
        rating_num,
        bootcamp_id
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  },
});
