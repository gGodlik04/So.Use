addEventListener ('DOMContentLoaded', function(){

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const mixHexagons = (event) => {

        this.document.querySelector('body').style = `background-color: ${getRandomColor()}`;
        console.log(getRandomInt(256).toString(16))

        const hexagons =   Array.from(this.document.querySelectorAll('.container__hexagons-wrap'));
        hexagons.forEach(element => {
            element.style = `order: ${getRandomInt(11)}`;
        });
    }

    let button = this.document.querySelector('.container__button').addEventListener('click', mixHexagons)
})