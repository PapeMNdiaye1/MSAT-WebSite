
let groups = document.querySelectorAll('.groups')
console.log(groups);

AFRAME.registerComponent('the_dote', {
    //The schema is the container for all the propertises
    schema: { Name_of_dote: { type: 'string', default: '#Name', }, Group_to_activate: { type: 'string', default: '#Position', } },
    //!Run permanatli
    // tick: function () {
    // },
    //Run Ones

    init: function () {
        //get whats in the entity
        var stringToLog = this.data;
        let Dote_Name = this.data.Name_of_dote
        let Group_to_activate = this.data.Group_to_activate

        this.el.addEventListener('click', (theDote) => {
            console.log('####################');
            // console.log(Group_to_activate);
            // let oldPosition = theDote.srcElement.getAttribute('position')
            // console.log(`click ${Dote_Name}`);
            // console.log(the_to_group_to_activate);
            groups.forEach(group => {
                group.setAttribute('visible', 'false')
            });

            let the_to_group_to_activate = document.querySelector(`#${Group_to_activate}`)
            console.log(the_to_group_to_activate);
            the_to_group_to_activate.setAttribute('visible', 'true')
            console.log('####################');
            // console.log(oldPosition );
            // let oldPosition = theDote.sre
            // theDote.srcElement.setAttribute('position' , '0 0 -4') 
        });
    }
});

//###############################################################
//###############################################################
//Run Ones
let the_crad_container = document.querySelector('#the_crad_container')
let the_close_crad = document.querySelector('#close_crad')

let the_art_title = document.querySelector('#art_title')
let the_art_author = document.querySelector('#art_author')
let the_art_price = document.querySelector('#the_art_price')
let the_art_size = document.querySelector('#the_art_size')
let the_art_picture = document.querySelector('#the_art_picture').childNodes[1]
console.log(the_art_picture);
the_close_crad.addEventListener('click', function () {
    the_crad_container.style.display = 'none'
});

AFRAME.registerComponent('the_pintings', {
    schema: {
        Pinting_Name: { type: "string", default: "" },
        Pinting_Picture: { type: "string", default: "" },
        Autor_Name: { type: "string", default: "" },
        Size: { type: "string", default: "" },
        Price: { type: "string", default: "" }
    },
    init: function () {
        this.el.setAttribute("opacity", "0");
        console.log(this.data);
        var The_Name = this.data.Pinting_Name;
        var The_Author = this.data.Autor_Name;
        var The_Price = this.data.Price;
        var The_Size = this.data.Size;
        var The_Picture = this.data.Pinting_Picture;
        //  material = 'opacity:0'
        this.el.addEventListener('click', function () {
            console.log(The_Picture);
            // console.log(The_Name);
            the_art_title.innerHTML = The_Name
            the_art_author.innerHTML = `par:${The_Author}`
            the_art_price.innerHTML = The_Price
            the_art_size.innerHTML = The_Size
            the_crad_container.style.display = 'flex'

            the_art_picture.setAttribute("src", `${The_Picture}`)
            // the_art_picture.style.backgroundImage = `url('./Images/Tableaux/cinquantenaire.jpg')`
            // console.log(the_art_picture.style);

        });
    }
});
