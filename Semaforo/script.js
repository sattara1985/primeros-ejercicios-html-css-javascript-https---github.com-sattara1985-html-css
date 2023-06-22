const semaphore = document.getElementById('semaphore');
const lights = semaphore.getElementsByClassName('light');
let currentLightIndex = 0;

function changeLight() {
    const currentLight = lights[currentLightIndex];
    const nextLightIndex = (currentLightIndex + 1) % lights.length;
    const nextLight = lights[nextLightIndex];

    currentLight.classList.remove('active');
    nextLight.classList.add('active');

    currentLightIndex = nextLightIndex;

    if (currentLightIndex === 0) {
        setTimeout(changeLight, 3000); // Cambiar de Rojo a Verde después de 3 segundos
    } else if (currentLightIndex === 1) {
        setTimeout(changeLight, 1000); // Cambiar de Amarillo a Rojo después de 1 segundo
    } else {
        setTimeout(changeLight, 2000); // Cambiar de Verde a Amarillo después de 2 segundos
    }
}

changeLight(); // Iniciar el cambio de luces

