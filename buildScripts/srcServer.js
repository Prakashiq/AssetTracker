import  express  from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/*eslint-disable no-console*/   /*<--- override the esLint rule */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.puplicPath
}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {

        console.log('running Server in port ' + port + '....');
        open('http://localhost:'+port);
    }
});