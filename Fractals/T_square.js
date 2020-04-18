function square() {
    let canva = document.getElementById('canvas');
    canva.width = window.innerWidth;
    canva.height = window.innerHeight;
    let ctx = canva.getContext('2d');
    let MAX_X = canva.width;
    let MAX_Y = canva.height;
    let N = 4;
    CreateTFractal();
    function CreateTFractal() {
        clear();
        let size = N;
        let countByX = Math.floor(MAX_X / size),
            countByY = Math.floor(MAX_Y / size);

        while ((countByX > 0) && (countByY > 0)) { // пока рисунок помещается в область
            for (let i = 0; i <= countByX; i++) {
                for (let k = 0; k <= countByY; k++) {
                    PrintFigure(i * size, k * size, size, 'rgba(255, 255, 255)');
                } // k
            } // i

            size *= 2; // новый размер для следующей итерации
            countByX = Math.floor(MAX_X / size),
                countByY = Math.floor(MAX_Y / size);
        }
    }
    function clear() {
        ctx.clearRect(0, 0, canva.width, canva.height);
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0, 0, canva.width, canva.height);
    }



    function PrintFigure(x, y, size, style) {
        let sizeElem = Math.floor(size  / N  );
        let figure = [N , N];
        for (let i = 0; i < N; i++)
            for (let k = 0; k < N; k++)
                if (i === 1  && k === 1) {
                    ctx.fillStyle = style;
                    ctx.fillRect(x + k  * sizeElem, y + i * sizeElem, sizeElem * 2, sizeElem * 2);
                }
    }

}