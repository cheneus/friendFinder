$(() => {
  var surveyQ = ["Your mind is always buzzing with unexplored ideas and plans", "Generally speaking, you rely more on your experience than your imagination.", "You find it easy to stay relaxed and focused even when there is some pressure.", "You rarely do something just out of sheer curiosity.", "People can rarely upset you.", "It is often difficult for you to relate to other people’ s feelings.", "In a discussion, truth should be more important than people’ s sensitivities.", "You rarely get carried away by fantasies and ideas.", "You think that everyone’ s views should be respected regardless of whether they are supported by facts or not.", "You feel more energetic after spending time with a group of people."]

  class SurveyQA {
    constructor(question) {
      this.question = question;
    }
  }

  $("#submit").on("click", (event) => {
    event.preventDefault();

    // Form validation
    var validateForm = () => {
      var isValid = true;
      $(".form-control").each(function() {
        if ($(this).val() === "") {
          isValid = false;
        }
      })
      $(".surveySelect").each(function() {
      	console.log($(this).val())
        if ($(this).val() === null) {
          isValid = false;
        }
      })
      return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
      // Create an object for the user"s data
      var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val(),
          $("#q7").val(),
          $("#q8").val(),
          $("#q9").val(),
          $("#q10").val()
        ]
      };

      // AJAX post the data to the friends API.
      // $.post("/api/friends", userData, (data) => {
      // 	console.log(data)
      // 	console.log(userData)
      //   // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      //   $("#match-name").text(data.name);
      //   $("#match-img").attr("src", data.photo);

      //   // Show the modal with the best match
      //   $("#results-modal").modal("toggle");

      // })
      // .catch((error) => {
      // 	console.log(error)
      // });
      axios.post('/api/friends', userData)
        .then((response) => {
          console.log(response)
          var data = response.data;
          // if (data.prop === Array) {
          for (i = 0; i < response.data.length; i++) {
            $("#match-name").text(data[i].name);
            $("#match-img").attr("src", data[i].photo);

            // Show the modal with the best match
            $("#results-modal").modal("toggle");

          }
        })
        .catch((error) => {
          console.log(error);
        });

    } else {
      alert("Please fill out all fields before submitting!");
    }
  });

  var buildSurveyQ = () => {
    for (i = 0; i < surveyQ.length; i++) {
      let question = surveyQ[i];
      $('#surveryQs').append(`<div class="form-group"><h4>Question ${i+1}</h4><label for="q${i+1}">${question}</label><small>1 being Strongly Disagree & 5 being Strongly Agree</small><select class="form-control surveySelect" id="q${i+1}"> <option disabled selected value> -- select an option -- </option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div>`)
    }
    $('#surveryQs').append()
  }

  buildSurveyQ()

  // Capture the form inputs
});
