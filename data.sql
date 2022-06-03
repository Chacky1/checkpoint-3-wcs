CREATE TABLE album (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    picture VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL
);

CREATE TABLE track (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(128) NOT NULL,
    youtube_url VARCHAR(255) NOT NULL,
    id_album INT NOT NULL,
    FOREIGN KEY (id_album) REFERENCES album(id)
);

INSERT INTO album (title, genre, picture, artist) VALUES ("The Greatest Showman", "Pop", "https://images-na.ssl-images-amazon.com/images/I/91DM4nVsKDL._AC_SL1500_.jpg", "Hugh Jackman");
INSERT INTO track (title, youtube_url, id_album) VALUES ("A Million Dreams", "https://www.youtube.com/watch?v=pSQk-4fddDI", 1);