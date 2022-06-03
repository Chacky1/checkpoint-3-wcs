const mysql = require('mysql2')

class AlbumModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    async listAlbums() {
        try {
            const queryString = 'SELECT * FROM album'
            const result = await this.connection.promise().query(queryString)
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async getAlbumById(albumId) {
        try {
            const queryString = 'SELECT * FROM album WHERE id = ?'
            const result = await this.connection.promise().query(queryString, albumId)
            return result[0][0]
        }
        catch (error) {
            throw error
        }
    }

    async createAlbum(album) {
        try {
            const queryString = 'INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)'
            const result = await this.connection.promise().query(queryString, [album.title, album.genre, album.picture, album.artist])
            return result[0].insertId
        }
        catch (error) {
            throw error
        }
    }

    async updateAlbum(album, albumId) {
        try {
            const queryString = 'UPDATE album SET ? WHERE id = ?'
            await this.connection.promise().query(queryString, [album, albumId])
        }
        catch (error) {
            throw error
        }
    }

    async deleteAlbum(albumId) {
        try {
            const queryString = 'DELETE FROM album WHERE id = ?'
            await this.connection.promise().query(queryString, albumId)
        }
        catch (error) {
            throw error
        }
    }
}

module.exports = new AlbumModel()