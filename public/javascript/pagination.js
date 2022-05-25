$(".wrapper .item").slice(4).hide();
        $('#pagination').pagination({
  
            // Total number of items present
            // in wrapper class
            items: 9,
  
            // Items allowed on a single page
            itemsOnPage: 9, 
            onPageClick: function (noofele) {
                $(".wrapper .item").hide()
                    .slice(4*(noofele-1),
                    4+ 4* (noofele - 1)).show();
            }
        });

