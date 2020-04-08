import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.fixedHeader();
  }

  fixedHeader() {
    $(document).ready(function() {

      window.onscroll = function () { myFunction() };

      var header = document.getElementById("header");
      var sticky = header.offsetTop;

      function myFunction() {
        if (window.pageYOffset >= sticky) {
          header.classList.add("sticky")
        } else {
          header.classList.remove("sticky");
        }
      }
    });
  }

}
