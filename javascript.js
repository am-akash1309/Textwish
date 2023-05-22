document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    });
function text(a) {
    if (a=="home"){
        alert("Takes you back to home. This feature is still in developement.")
    }
    if (a=="message"){
        alert("Allows you to send and recieve messages. This feature is still in developement.")
    }
    if (a=="favorite"){
        alert("Displays the comments on your post and the people who liked your post. This feature is still in developement.")
    }
    if (a=="account"){
        alert("Takes you to your account where you can edit your profile. This feature is still in developement.")
    }
}
function loadFile(event) {
    console.log(event)
    let file = event.target.files[0]
    console.log(file)
    let filereader = new FileReader()
    filereader.onload = (file) => {
        console.log(filereader.result);
    }
    let url = filereader.readAsDataURL(file)

	var image = document.getElementById('inhome');
	image.src = URL.createObjectURL(event.target.files[0]);
    var image = document.getElementById('inshare');
	image.src = URL.createObjectURL(event.target.files[0]);
};