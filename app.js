

$(".search-button").on("click", function() {
    console.log("hello");
    var searchTerm = $("#search-term").val();
    var numRecords = $("#num-records").val();
    var startDate = $("#start-date").val();
    var endDate = $("#end-date").val();

    console.log(searchTerm);
    console.log(numRecords);
    console.log(startDate);
    console.log(endDate);

    var queryRoot = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&sort=newest&";
    var queryDate = "";
    var queryKey = "&api-key=TUoNzQWpV3dQo6LBIPsGpno0sAQTJAD3";

    if (startDate >= 1 && endDate >= 1) {
        queryDate = "begin_date="+startDate+"0101"+"end_date="+endDate+"1231";
    }
    else if (startDate >= 1 && endDate == "") {
        queryDate = "begin_date="+startDate+"0101";
    }
    else if (startDate >= "" && endDate >= 1) {
        queryDate = "end_date="+endDate+"1231";
    }
    queryURL = queryRoot + queryDate + queryKey;


    console.log(queryDate);
    console.log("Query: " + queryURL);


    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response)

        var results = response.response.docs;
        console.log(results.length);
        
        for (var i = 0; i < numRecords; i++) {


            var articleDiv = $("<div>");

            var iterator = $("<p>").text(i+1);

            // add headline + url
            var headline = results[i].headline.main;
            var url = results[i].web_url;
            console.log(headline);
            console.log(url);

            var headline = $("<a>").attr("href", url).text(headline);

            // add author
            var author = results[i].byline.original;
            console.log(author);

            var p2 = $("<p>").text(author);

            articleDiv.append(iterator);
            articleDiv.append(headline);
            articleDiv.append(p2);


            $(".articles-div").append(articleDiv);

            

/* 
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(personImage);

        $("#gifs-appear-here").prepend(gifDiv);  */
        }
    });
});



