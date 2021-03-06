var express    =       require("express");
var multer     =       require('multer');
var app        =       express();
var done       =       false;

app.use(multer({ dest: './assets/images/',
 rename: function (fieldname, filename) {
    return filename;
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
}
}));

app.get('/',function(req,res){
      res.sendfile("upload.html");
});

app.post('/api/photo',function(req,res){
  if(done==true){
    console.log(req.files);
    res.end("File uploaded.");
  }
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});
