const fs = require("fs/promises");
const db = require("../db.json");
const path = require("path");


class Cube {
    constructor(id, name, description, imageUrl, difficultyLevel) {
        (this.id = id),
            (this.name = name),
            (this.description = description),
            (this.imageUrl = imageUrl),
            (this.difficultyLevel = difficultyLevel);
    }

    save(cube) {
        db.cubes.push(this);
        const jsonData = JSON.stringify(db, null, 2);
        fs.writeFile(path.resolve(__dirname, "../db.json"), jsonData);
    }
}

module.exports = Cube;
