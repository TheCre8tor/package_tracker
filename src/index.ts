import http from 'node:http';

export const server = http.createServer((request, response) => {
	response.writeHead(200, {'content-type': 'application/json'});
	response.end(JSON.stringify({data: 'It works!'}));
});

server.listen(3000, () => {
	console.log('We are running on port: 3000');
});
