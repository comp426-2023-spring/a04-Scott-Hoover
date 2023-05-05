import {rps, rpsls from ./lib/rpsls.js}
import express from express
import minimist from minimist


const app = express();
//2
const port = args.port || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//req 3 /app
app.get(app, (req, res) => {
	status(200).send(200 OK);
}
//404 not found

// /app/rps


///app/rpsls/


///app/rps/play/


///app/rpsls/play/


// /app/rpsls/play/(rock|paper|scissors)/


// /app/rpsls/play/(rock|paper|scissors|lizard|spock)/



