const fs = require('fs');

fs.rmdir(dir, err => {
	if (err) {
		throw err;
	}

	console.log(`${dir} is deleted!`);
});
