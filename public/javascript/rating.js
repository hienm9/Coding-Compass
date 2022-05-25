$(".rating-avg").raty({
  readOnly: true,
});

if (numeral($(".rating-target").html()).format("0.0") === "0.0") {
  $(".rating-target").html("Not yet rated");
} else {
  $(".rating-target").html(numeral($(".rating-target").html()).format("0.0"));
}

async function ratingClickHandler(score, event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch("/api/rating", {
    method: "post",
    body: JSON.stringify({
      rating_num: score,
      bootcamp_id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

$(".rating").raty({
  click: function (score, event) {
    ratingClickHandler(score, event);
  },
});
