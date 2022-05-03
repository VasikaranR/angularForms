import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../service/list.service';
import { User } from '../user';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userList:User={
    id:0,
    name: '',
    email: '',
    phone: '',
    topic: ''
  }

;

  constructor(private service:ListService,private router:Router,private route: ActivatedRoute,) { 
  }

  id: number = 0;
  topics=['Angular','PHP','React']
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.userList.id=(params['id']);
        const data = this.service.getUsersByID(this.id);
        if (data) {
          this.userList=(data);
        }
      }
    });
  }

   tempAlert(msg:any,duration:any)
    {
     var el = document.createElement("div");
     el.setAttribute("style","width:250px;height:100px;background-color:green;color:white;margin-left:750px;padding:20px");
    // el.setAttribute("class", "democlass");
    // el.setAttribute("id", "Div1");
    // document.getElementById('Div1')?.setAttribute('class','democlass');
     el.innerHTML = msg;
     setTimeout(function(){
      el.parentElement?.removeChild(el);
     },duration);
     document.body.appendChild(el);
    }
    
  tableDisplay(){
      if (this.userList.id === 0) {
      //Create New User
      console.log("id : "+this.userList.id);
      this.tempAlert("Added Successfully",2000);
      this.service.setUser(this.userList);
    } else {
    
      //Update User info
      this.service.updateUser(this.userList);
      setTimeout("window.close()",3000) 
    } 
    this.router.navigate(['/table']);
  }
  backButton(){
    this.router.navigate(['/table']);
  }

  success(){

  }
 
}
