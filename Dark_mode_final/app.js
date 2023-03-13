const site = window.location.hostname

console.log("site: "+site)


const Add_Custom_style = css => document.head.appendChild(document.createElement("style")).innerHTML = css


function Creat_Custom_Element(tag, attr_tag, attr_name, value){
    const custum_element = document.createElement(tag)
    custum_element.setAttribute(attr_tag, attr_name)
    custum_element.innerHTML = value
    document.body.append(custum_element)
}


if (site.includes("classroom.google.com") || site.includes("codeforces.com")){
    alert("This website: "+ site+" is not safe for your mental health")
    Add_Custom_style(`
    
    
    body {
        background-color: #2A1342;
        
      }
        
      .n4xnA, QRiHXd {
        background-color: #303364; /**/
        
      }

    #kO001e{
        background-color: black;/*top bar*/
    }
    .OX4Vcb{
        background-color: pink;/*slider bar*/
    }
    .YVvGBb{
        color : white;/*text1*/
    }
    .gHz6xd{
        background-color: darkblue;/*bottom of each class tile*/
        color: red;/*folder*/
    }
    .PeGHgb{
        background-color: green;/*comment*/
    }
    .pco8Kc{
        color:red;/*text inside box*/
    }
    .oBSRLe{
        color:yellow;/**/
    }

      
    `)
}
