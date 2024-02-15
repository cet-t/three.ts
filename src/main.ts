import * as Three from 'three';
import * as trrne from '@cet-t/selftslib';

const appElement = document.querySelector<HTMLDivElement>('#appElement')!;

//#region initialize
const renderer = new Three.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(appElement.offsetWidth, appElement.offsetHeight);
const camera = new Three.PerspectiveCamera(45, appElement.offsetWidth / appElement.offsetHeight);
camera.position.set(0, 0, 1000);
const scene = new Three.Scene();
appElement.appendChild(renderer.domElement);
//#endregion

function match(input: string, target: string): boolean { 
    return new RegExp('[' + target.toUpperCase() + target.toLowerCase() + ']').test(input);
}

function keyup(e: any): void {
    if (match(e.key, 'a')) {
        console.log('input: ' + e.key);
    }
}
function keydown(e: any): void { }
document.addEventListener('keyup', keyup);
document.addEventListener('keydown', keydown);

const cubeSize = appElement.offsetWidth / 10;
const cube = new Three.Mesh(
    new Three.BoxGeometry(cubeSize, cubeSize, cubeSize),
    new Three.MeshNormalMaterial()
);
scene.add(cube);
cube.position.x = -appElement.offsetWidth / 4;

function update(time: number): void {
    cube.position.y = Math.sin(time / 2) * appElement.offsetHeight / 8;
    cube.rotation.x = cube.rotation.y = cube.rotation.z = time;
}

var time = 0.0;
renderer.setAnimationLoop(() => {
    update(time += 0.02);
    renderer.render(scene, camera);
});

new trrne.test().hello();