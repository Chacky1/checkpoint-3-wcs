const mysql = require('mysql2')

class TrackModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    async listTracks() {
        try {
            const queryString = 'SELECT * FROM track'
            const result = await this.connection.promise().query(queryString)
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    async getTrackById(trackId) {
        try {
            const queryString = 'SELECT * FROM track WHERE id = ?'
            const result = await this.connection.promise().query(queryString, trackId)
            return result[0][0]
        }
        catch (error) {
            throw error
        }
    }

    async createTrack(track) {
        try {
            const queryString = 'INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)'
            const result = await this.connection.promise().query(queryString, [track.title, track.youtube_url, track.id_album])
            return result[0].insertId
        }
        catch (error) {
            throw error
        }
    }

    async updateTrack(track, trackId) {
        try {
            const queryString = 'UPDATE track SET ? WHERE id = ?'
            await this.connection.promise().query(queryString, [track, trackId])
        }
        catch (error) {
            throw error
        }
    }

    async deleteTrack(trackId) {
        try {
            const queryString = 'DELETE FROM track WHERE id = ?'
            await this.connection.promise().query(queryString, trackId)
        }
        catch (error) {
            throw error
        }
    }
}

module.exports = new TrackModel()