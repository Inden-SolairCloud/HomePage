var net = require('net');
var client = new net.Socket();
                
client.connect(8080, '127.0.0.1', function() {
    console.log('Connected');
    process.stdout.write('>');
});

client.on('data', function(data) {
    console.log('Received: ' + data);
    process.stdout.write('>');
});

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdout.write('>');
process.stdin.on('data', (text) => {
        msg = text.split("\n")[0];
        
        console.log(msg)
		switch(msg){
            case 'hello':
                console.log(msg)
                client.write(JSON.stringify({"action":"client-hello"}))
            break;
        }
});