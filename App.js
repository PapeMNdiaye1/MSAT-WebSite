const Container = document.querySelector("#TheContainer")
// const Container = document.body
//Creat Scene
const scene = new THREE.Scene();
//Creat a TextureLoader for All texturs 
const textureLoader = new THREE.TextureLoader();
//Creat Renderer params
const renderer = new THREE.WebGLRenderer();
renderer.setSize(Container.offsetWidth, Container.offsetHeight);
//Insertion Renderer in le DOM
Container.appendChild(renderer.domElement);



//?###########################################
function onResize() {
    renderer.setSize(Container.offsetWidth, Container.offsetHeight)
    //Change camera lenth aspect
    camera.aspect = Container.offsetWidth / Container.offsetHeight
    //update Projection Matrix if camera setings change
    camera.updateProjectionMatrix()
}
Container.addEventListener('resize', onResize)
//?###########################################

//Creat SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer, phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)
const geometry = new THREE.SphereGeometry(50, 60, 60);
//Creat a TextureLoader for All texturs 
let sphereTextur1 = textureLoader.load('./Style/Images/Image0000.png');
//Invert textur
sphereTextur1.wrapS = THREE.RepeatWrapping
sphereTextur1.repeat.x = -1
// immediately use the texture for sphereMaterial
let sphereMaterial = new THREE.MeshBasicMaterial({ map: sphereTextur1, side: THREE.DoubleSide });
//Set Material To SphereMaterial and add it to scene
let sphere = new THREE.Mesh(geometry, sphereMaterial);
sphere.name = 'theSphere';
scene.add(sphere);


function CreatNewTexturForSphere(image, persp) {
    sphereTextur1 = textureLoader.load(image);
    sphereTextur1.wrapS = THREE.RepeatWrapping
    sphereTextur1.repeat.x = -1

    sphereMaterial.map = sphereTextur1
    sphereMaterial.map.needsUpdate = true


    scene.traverse(function (object) {
        if (object.isSprite) {
            object.visible = false;
        }
    });


    switch (persp) {

        case 1:
            Sprite1.visible = true
            Sprite2.visible = true
            break;
        case 2:
            Sprite3.visible = true
            Sprite4.visible = true
            Sprite5.visible = true
            break;
        case 3:

            Sprite6.visible = true
            Sprite7.visible = true
            break;
        case 4:

            Sprite8.visible = true
            Sprite9.visible = true
            Sprite10.visible = true
            break;

    }

}






//?###########################################
//Creat Camera
const camera = new THREE.PerspectiveCamera(60, Container.offsetWidth / Container.offsetHeight, 0.1, 1000);
//Creat Controls for the Camera
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.rotateSpeed = 0.2;
controls.enableZoom = false
//*controls.autorotata = true
//Set Camera positions
camera.position.set(-1, 0, 0);
// camera.position.set(200, 0, 0);

controls.update();

function animate() {
    requestAnimationFrame(animate);
    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();
    renderer.render(scene, camera);
}
animate()

//?###########################################

function addSprite(theSpriteposition, theSpriteName, TheIcon) {
    // console.log(theSpriteposition);
    const spriteTextur = textureLoader.load(TheIcon);
    let spritematerial = new THREE.SpriteMaterial({ map: spriteTextur });
    let sprite = new THREE.Sprite(spritematerial);
    sprite.position.copy(theSpriteposition.clone().normalize().multiplyScalar(20));
    // sprite.scale.multiplyScalar(30);
    sprite.name = theSpriteName;
    scene.add(sprite);

    return sprite

}


//?###########################################
//! Add sprite a and Get it position on click
// function onClick(e) {
//     let mouseClickPosition = new THREE.Vector2(
//         (e.clientX / window.innerWidth) * 2 - 1,
//         - (e.clientY / window.innerHeight) * 2 + 1
//     )

//     let rayCaster = new THREE.Raycaster()
//     //the ray go from camera to mouseClickPosition
//     rayCaster.setFromCamera(mouseClickPosition, camera)
//     //get position where the Ray toutch Sphere
//     let intersectsWhitSphere = rayCaster.intersectObject(sphere)
//     if (intersectsWhitSphere.length > 0) {
//         // addSprite(intersectsWhitSphere[0].point)
//         addSprite(intersectsWhitSphere[0].point, "Sprite", "./Style/Images/PNG/Dot.png")
//     }

// }
// Container.addEventListener('click', onClick)

//! Get info on sprite Ckil a and Get it position on click
function onClickOnSprite(e) {

    console.log(e);
    let mouseClickPosition = new THREE.Vector2(
        (e.clientX / Container.offsetWidth) * 2 - 1,
        - (e.clientY / Container.offsetHeight) * 2 + 1
    )

    //get position whene Ray toutch object
    let rayCaster = new THREE.Raycaster()
    //the ray go from camera to mouseClickPosition
    rayCaster.setFromCamera(mouseClickPosition, camera)
    //get position whene Ray toutch Sphere
    let intersects = rayCaster.intersectObjects(scene.children)
    // console.log(intersects);

    let allSprites = []
    scene.traverse(function (object) {
        if (object.isSprite) {
            allSprites.push(object)
        }
    });
    // console.log(allSprites);

    // console.log('OK');


    if (intersects.length > 0) {
        intersects.forEach(obj => {
            if (obj.object.type == "Sprite") {
                switch (obj.object.name) {
                    case "Sprite-1":
                        CreatNewTexturForSphere("./Style/Images/Image0061.png", 2)
                        break;
                    case "Sprite-2":
                        CreatNewTexturForSphere('./Style/Images/Image0050.png', 3)
                        break;
                    case "Sprite-3":
                        CreatNewTexturForSphere('./Style/Images/Image0019.png', 4)
                        break;
                    case "Sprite-4":
                        CreatNewTexturForSphere('./Style/Images/Image0000.png', 1)
                        break;
                    case "Sprite-5":
                        CreatNewTexturForSphere('./Style/Images/Image0050.png', 3)
                        break;
                    case "Sprite-6":
                        CreatNewTexturForSphere('./Style/Images/Image0019.png', 4)
                        break;
                    case "Sprite-7":
                        CreatNewTexturForSphere('./Style/Images/Image0000.png', 1)
                        break;
                    case "Sprite-8":
                        CreatNewTexturForSphere('./Style/Images/Image0000.png', 1)
                        break;
                    case "Sprite-9":
                        CreatNewTexturForSphere('./Style/Images/Image0061.png', 2)
                        break;
                    case "Sprite-10":
                        CreatNewTexturForSphere('./Style/Images/Image0050.png', 3)
                        break;
                }

            }

        });
    }

}
Container.addEventListener('click', onClickOnSprite)

//!Persiste a AddSprite by adding It manualy



let sprite1Position = new THREE.Vector3(34.26187788539659, -17.649877165322742, 31.79604847767142);
let sprite2Position = new THREE.Vector3(49.59451582564034, 5.283809768739051, 2.3664972312950363);
let Sprite1 = addSprite(sprite1Position, "Sprite-1", './Style/Images/PNG/Arrow-1.png')
let Sprite2 = addSprite(sprite2Position, "Sprite-2", './Style/Images/PNG/Arrow-1.png')

let sprite3Position = new THREE.Vector3(25.82348973489126, -13.985765702370303, 40.36931604496714);
let sprite4Position = new THREE.Vector3(35.14013018078072, -27.42934668449403, -22.52792763332754);
let sprite5Position = new THREE.Vector3(-20.467134881477946, 2.536835418608698, 45.536427258306574);
let Sprite3 = addSprite(sprite3Position, "Sprite-3", './Style/Images/PNG/Arrow-1.png')
let Sprite4 = addSprite(sprite4Position, "Sprite-4", './Style/Images/PNG/Arrow-1.png')
let Sprite5 = addSprite(sprite5Position, "Sprite-5", './Style/Images/PNG/Arrow-1.png')
Sprite3.visible = false
Sprite4.visible = false
Sprite5.visible = false

let sprite6Position = new THREE.Vector3(42.402006966681824, -19.09807193619093, 18.253303169955387);
let sprite7Position = new THREE.Vector3(22.67620119010866, -11.193139859034932, -43.046105111070105);
let Sprite6 = addSprite(sprite6Position, "Sprite-6", './Style/Images/PNG/Arrow-1.png')
let Sprite7 = addSprite(sprite7Position, "Sprite-7", './Style/Images/PNG/Arrow-1.png')
Sprite6.visible = false
Sprite7.visible = false

let sprite8Position = new THREE.Vector3(12.23026642168882, -20.970033684614197, -43.634448533051135);
let sprite9Position = new THREE.Vector3(-21.351842931384255, -20.020107370852752, -40.46227558340001);
let sprite10Position = new THREE.Vector3(-46.302936005922504, -10.297594676898232, -15.712835289577667);
let Sprite8 = addSprite(sprite8Position, "Sprite-8", './Style/Images/PNG/Arrow-1.png')
let Sprite9 = addSprite(sprite9Position, "Sprite-9", './Style/Images/PNG/Arrow-1.png')
let Sprite10 = addSprite(sprite10Position, "Sprite-10", './Style/Images/PNG/Arrow-1.png')
Sprite8.visible = false
Sprite9.visible = false
Sprite10.visible = false