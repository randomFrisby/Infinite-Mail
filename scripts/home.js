import {navbar, footer, trust, boximg, bestclient} from '../components/navbar.js';
document.getElementById('kanavbar').innerHTML = navbar();
document.getElementById('kafooter').innerHTML = footer();
document.querySelector('#kaboximg').innerHTML = boximg();
document.querySelector('.katrust').innerHTML = trust();
document.querySelector('.kaclient').innerHTML = bestclient();
