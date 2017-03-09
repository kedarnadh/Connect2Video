import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

   //providing the title
   title = "Connect2Video";
   //peer is given var in the typing.d.ts
   //declare the peer
   //declare the peerid
   //connectid is to generate the id for connecting
  private peer;
  private peerid;
  private connectid;
 //constructor for the app component
  constructor(){

  }
//executes on initialisation
  ngOnInit(){
    //provide the generated key
    this.peer = new Peer({'key': '4l00hr50y5app66r'});
    //setting a timeout of 3sec to display the id
    setTimeout( function() {
      //connectid will be given your id from the server
      this.connectid = this.peer.id;
    },3000);
    

    
      //inorder to receive the data
      this.peer.on('connection', function(conn) {
       conn.on('data', function(data){
       // Will print 'Hey!'
       console.log(data);
  });
});
  // } 

  }
  //inorder to make the connection call
  connect(){
    var connection = this.peer.connect(this.peerid);
    connection.on('open', function(){
    connection.send('Hey this world!');
});

  }

 
}
