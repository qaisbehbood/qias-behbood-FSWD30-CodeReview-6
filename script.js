class Media {

	constructor(Title, Author, Genre, Publisher, Image, Rating) {
		this.Title = Title;
		this.Author = Author;
		this.Genre = Genre;
		this.Publisher =Publisher;
		this.Image = Image;
		this.Rating = Rating;
		
	}

	text(elId) {
		var place = document.getElementById(elId);
		place.innerHTML += "<img src='" + this.Image + "' class='pic'>";
		place.innerHTML += "<div class='text'>" + this.Title + "</br> from: " + this.Author + 
		"</br>Genre: " + this.Genre + "</br>Publisher: " + this.Publisher + "</br>Rating: " + this.Rating + " </div>";
	}
}

Genre = ["Rock", "Pop", "Soundtrack", "Horror", "Comedy", "Drama", "Documentary", 
"Children", "Belletristik", "Sci fi", "Fantasy", "Hero", "Comedy", "Alternative"];

var Book1 = new Media("Woodwalkers", "Katja Brandis", Genre[8],
	"Bild","img/Woodwalkers.jpg", "3/5");
Book1.text("one");

var Book2 = new Media("Inkheart", "Cornelia Funke", Genre[7], 
	"GSD","img/inkheart.jpg", "5/5");
Book2.text("two");

var Book3 = new Media("Fondation", "Isaac Asimov", Genre[9],
	"Heyne","img/fondation.jpg", "4/5");
Book3.text("three");

var Comic1= new Media("HELLBOY", "Mike Mignola", Genre[10],
	"Dark horse Comics","img/hellboy.jpg", "5/5");
Comic1.text("four");

var Comic2 = new Media("Spider-Man", "Stan Lee", Genre[11],
	"Marvel","img/spiderman.jpg","3/5");
Comic2.text("five");

var Comic3 = new Media("Deadpool", "Joe Kelly", Genre[12],
	"Marvel","img/Deadpool.jpg", "4/5");
Comic3.text("six");

var CD1 = new Media("American Idiot", "Green day", Genre[13], 
	"Studio 880", "img/greenday.jpg","5/5");
CD1.text("seven")

var CD2 = new Media("Pyre Soundtrack", "Darren Korb", Genre[2], 
	"SGG", "img/pyre.jpg","5/5");
CD2.text("eight")

var CD3 = new Media("Dylan", "Bob Dylan", Genre[0], 
	"", "img/Bob_Dylan.jpg","3/5");
CD3.text("nine")

var DVD1 = new Media("Lion King", "Walt Disney", Genre[7], 
	"Disney", "img/lionking.jpg", "5/5");
DVD1.text("ten")

var DVD2 = new Media("Totoro", "Hayao Miyazaki", Genre[7], 
	"Ghibli", "img/totoro.jpg", "5/5");
DVD2.text("eleven")

var DVD3 = new Media("The Room", "Tommy Wiseau", Genre[5], 
	"Tommy Wiseau", "img/theroom.jpg", "1/5");
DVD3.text("twelve")



