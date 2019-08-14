const port = process.env.PORT || 80
require('http')
  .createServer((req, res) => {
    console.log(`incoming url: ${req.url} and incoming method: ${req.method}`)
    res.writeHeader(200,{'Content-Type': 'text/html'})
    res.write('<p>Buenos dias Montevideo</p>')
    res.write('<p>This is Saturday. Bla blah blah</p>')
    res.end('<h1>Hello World PC</h1>')
  })
  .listen(port, (error)=>{
    console.log(`server is running on ${port}`)
  })
