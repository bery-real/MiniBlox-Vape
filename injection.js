const container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = '10px';
container.style.left = '10px';
container.style.display = 'flex';
container.style.gap = '20px';
container.style.zIndex = '10000';

const logo1 = document.createElement('img');
logo1.src = 'https://raw.githubusercontent.com/7GrandDadPGN/VapeForMiniblox/main/assets/logo.png';
logo1.style.width = '50px';
logo1.style.height = 'auto';
container.appendChild(logo1);

const logo2 = document.createElement('img');
logo2.src = 'https://raw.githubusercontent.com/7GrandDadPGN/VapeForMiniblox/main/assets/logov4.png';
logo2.style.width = '50px';
logo2.style.height = 'auto';
container.appendChild(logo2);

document.body.appendChild(container);
