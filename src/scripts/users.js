$(document).ready(function () {
  var users = JSON.parse(localStorage.getItem("users"));
  const user = JSON.parse(localStorage.getItem("user"));
  var friends = JSON.parse(localStorage.getItem(`${user.name}friends`));
  if (friends === null) {
    friends = [];
    var usuarios = users.filter((u) => u.alias != user.alias);
    localStorage.setItem(`not${user.name}friends`, JSON.stringify(usuarios));
  }else if(friends===[]){
    localStorage.setItem(`not${user.name}friends`, JSON.stringify(users));
  }
  usuarios = JSON.parse(localStorage.getItem(`not${user.name}friends`));

  
  $('#logout').click(function (e) {
    localStorage.removeItem("user");
  })
  var row = $('<h1 class="text-center"> Hello, ' + user.name + "</h1>");
  $("#saludo").append(row);


  $.each(friends, function (index, u) {
    var alias = $('<h5 class="text-center mt-3 mb-2">' + u.alias + "</h5>");
    $("#alias").append(alias);
    var Remove = $(
      '<a class="btn btn-outline-primary mb-2" href="" >Remove Friend</a>'
    );
    $("#removefriend").append(Remove);
    Remove.click(function (e) {
      alert("Friend removed");
      const friendd = u;
      friends = friends.filter((f) => f.alias != friendd.alias); 
      localStorage.setItem(`${user.name}friends`, JSON.stringify(friends));
      usuarios.push(friendd);
      localStorage.setItem(`not${user.name}friends`, JSON.stringify(usuarios));
    });
    var profile = $(
        '<a class="btn btn-outline-primary mb-2" href="./user-profile.html" >View Profile</a>'
    );
    $("#viewprofile").append(profile);
    profile.click(function (e) {
      localStorage.setItem("userp", JSON.stringify(u));
    })
  });

  
  $.each(usuarios, function (index, u) {
    var alias = $('<a class="text-center btn pe-auto  me-2 ms-2" href="./user-profile.html" id"viewprofile2"><h6>' + u.alias + '</h6></a>');
    $("#nofriendsalias").append(alias);
    alias.click(function (e) {
      localStorage.setItem("userp", JSON.stringify(u));
    })
    
    var add = $(
      '<a class="btn btn-outline-primary mb-2" href="" >Add as Friend</a>'
    );
    $("#addfriend").append(add);
    add.click(function (e) {
      alert("Friend added");
      usuarios = usuarios.filter((us) => us.alias != u.alias);
      localStorage.setItem(`not${user.name}friends`, JSON.stringify(usuarios));
      usuarios = JSON.parse(localStorage.getItem(`not${user.name}friends`));
      friends.push(u);
      localStorage.setItem(`${user.name}friends`, JSON.stringify(friends));
    });
  });
});
