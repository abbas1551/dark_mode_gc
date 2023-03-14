const site = window.location.hostname

console.log("site: "+site)


const Add_Custom_style = css => document.head.appendChild(document.createElement("style")).innerHTML = css


function Creat_Custom_Element(tag, attr_tag, attr_name, value){
    const custum_element = document.createElement(tag)
    custum_element.setAttribute(attr_tag, attr_name)
    custum_element.innerHTML = value
    document.body.append(custum_element)
}


if (site.includes("classroom.google.com")){
    alert("This website: "+ site+" is not safe for your mental health")
    Add_Custom_style(`
    
    
    body {
        background-color: #252525;
        
      }
        
      .n4xnA, QRiHXd {
        background-color: #303364; /**/
        
      }

    #kO001e{
        background-color: black;/*top bar*/
    }
    .OX4Vcb{
        background-color: #1C0036;/*slider bar*/
    }
    .YVvGBb{
        color : white;/*text1*/
    }
    .gHz6xd{
        background-color: #2C2F54;/*bottom of each class tile*/
        color: lightgrey;/*folder*/
    }
    .PeGHgb{
        background-color: #3E3E3E;/*comment*/
    }
    .pco8Kc{
        color:lightgrey;/*text inside box*/
    }
    .oBSRLe{
        color:yellow;/**/
    }
    .nGi02b{
        color:yellow;/*text when open assignment*/
    }
    .K6Ovqd {
        color:pink;
    }
    .NPEfkd, .NMm5M{
        /*background-color: red;*/
        color:white; /*class comment under the post*/
    }
    .gJItbc{
        color:yellow;/*name of commentator*/
    }
    .onkcGd.zZN2Lb-Wvd9Cc.VBEdtc-Wvd9Cc.apFsO {
        color:white  ;/*home work deadline on home page*/
        
    }
    .sjxkNc {
        color: yellow;/*color of to do example this weel next week past week*/
    }
    .HbKQLd.WOPwXe{
        color: white;/*same as above but the one not selected*/
    }
    .VSWCL.tLDEHd{
        color: lightgrey;/* comments */
    }
    .bswVrf.Lzdwhd-BrZSOd{
        color: grey;
    }

      
    `)
}
