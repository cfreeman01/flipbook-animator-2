/*These 3 sets of points are used to draw smoothed curves.*/
let oldX = 0, oldY = 0;
let midX = 0, midY = 0;
let newX = 0, newY = 0;

let isDrawing = false;

export let layers = [[]];

export let undoStack = [];
export let redoStack = [];

export let botCanvas = {
    ref: null
};

/*This algorithm for drawing smoothed curves is stolen from :
https://stackoverflow.com/questions/7054272/how-to-draw-smooth-curve-through-n-points-using-javascript-html5-canvas*/
const calcSmoothPoints = (tension, numSegments) => {
    let smoothedPoints = [];
    let t1x, t2x, t1y, t2y;
    let st;
    let c1, c2, c3, c4;
    let smoothedX, smoothedY;

    for (let t = 0; t <= numSegments; t++) {
        //calc tension vectors
        t1x = (midX - oldX) * tension;
        t2x = (newX - oldX) * tension;

        t1y = (midY - oldY) * tension;
        t2y = (newY - oldY) * tension;

        // calc step
        st = t / 16;

        // calc cardinals
        c1 = 2 * Math.pow(st, 3) - 3 * Math.pow(st, 2) + 1;
        c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2);
        c3 = Math.pow(st, 3) - 2 * Math.pow(st, 2) + st;
        c4 = Math.pow(st, 3) - Math.pow(st, 2);

        // calc x and y cords with common control vectors
        smoothedX = c1 * oldX + c2 * midX + c3 * t1x + c4 * t2x;
        smoothedY = c1 * oldY + c2 * midY + c3 * t1y + c4 * t2y;

        //store points in array
        smoothedPoints.push(smoothedX);
        smoothedPoints.push(smoothedY);
    }
    return smoothedPoints;
}

export let tools = {
    Pencil: {
        startPath: (event, canvas) => {
            let ctx = canvas.getContext('2d');
            let rect = canvas.getBoundingClientRect();
            undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            redoStack.length = 0;
            isDrawing = true;
            oldX = midX = event.clientX - rect.left;
            oldY = midY = event.clientY - rect.top;
        },

        draw: (event, canvas) => {
            let rect = canvas.getBoundingClientRect();
            let ctx = canvas.getContext('2d');
            newX = event.clientX - rect.left;
            newY = event.clientY - rect.top;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            if (isDrawing === true) {

                /*calculate the points of the smoothed curve*/
                let smoothedPoints = calcSmoothPoints(0.5, 16);

                /*draw the curve*/
                ctx.beginPath();
                ctx.moveTo(smoothedPoints[0], smoothedPoints[1]);
                for (let i = 2; i < smoothedPoints.length - 1; i += 2)
                    ctx.lineTo(smoothedPoints[i], smoothedPoints[i + 1]);

                ctx.stroke();
                ctx.closePath();

                oldX = midX;
                oldY = midY;
                midX = newX;
                midY = newY;
            }
        },

        endPath: () => {
            isDrawing = false;
        }
    },

    Pen: {
        startPath: (event, canvas) => {
            let ctx = canvas.getContext('2d');
            let rect = canvas.getBoundingClientRect();
            undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            redoStack.length = 0;
            isDrawing = true;
            oldX = midX = event.clientX - rect.left;
            oldY = midY = event.clientY - rect.top;
        },

        draw: (event, canvas) => {
            let rect = canvas.getBoundingClientRect();
            let ctx = canvas.getContext('2d');
            newX = event.clientX - rect.left;
            newY = event.clientY - rect.top;
            let smoothedPoints = [];
            ctx.lineCap = "square";
            ctx.lineJoin = "square";
            if (isDrawing === true) {

                /*calculate the points of the smoothed curve*/
                let smoothedPoints = calcSmoothPoints(0.5, 16);

                /*draw the curve*/
                ctx.beginPath();
                ctx.moveTo(smoothedPoints[0] - 2, smoothedPoints[1] - 1);
                for (let i = 2; i < smoothedPoints.length - 1; i += 2)
                    ctx.lineTo(smoothedPoints[i] - 2, smoothedPoints[i + 1] - 1);

                ctx.moveTo(smoothedPoints[0], smoothedPoints[1]);
                for (let i = 2; i < smoothedPoints.length - 1; i += 2)
                    ctx.lineTo(smoothedPoints[i] - 1, smoothedPoints[i + 1] - 1);

                ctx.moveTo(smoothedPoints[0] + 1, smoothedPoints[1] + 1);
                for (let i = 2; i < smoothedPoints.length - 1; i += 2)
                    ctx.lineTo(smoothedPoints[i], smoothedPoints[i + 1]);

                ctx.moveTo(smoothedPoints[0] + 2, smoothedPoints[1] + 2);
                for (let i = 2; i < smoothedPoints.length - 1; i += 2)
                    ctx.lineTo(smoothedPoints[i] + 2, smoothedPoints[i + 1] + 2);

                ctx.stroke();
                ctx.closePath();

                oldX = midX;
                oldY = midY;
                midX = newX;
                midY = newY;
            }
        },

        endPath: () => {
            isDrawing = false;
        }
    },

    Eraser: {
        startPath: (event, canvas) => {
            let ctx = canvas.getContext('2d');
            let rect = canvas.getBoundingClientRect();
            undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            redoStack.length = 0;
            isDrawing = true;
            oldX = midX = event.clientX - rect.left;
            oldY = midY = event.clientY - rect.top;
        },

        draw: (event, canvas) => {
            let rect = canvas.getBoundingClientRect();
            let ctx = canvas.getContext('2d');
            newX = event.clientX - rect.left;
            newY = event.clientY - rect.top;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            if (isDrawing === true) {
                let tempStrokeStyle = ctx.strokeStyle;
                ctx.strokeStyle = 'rgba(255,255,255,1)';
                ctx.globalCompositeOperation = "destination-out";

                /*calculate the points of the smoothed curve*/
                let smoothedPoints = calcSmoothPoints(0.5, 16);

                /*draw the curve*/
                ctx.beginPath();
                ctx.moveTo(smoothedPoints[0], smoothedPoints[1]);
                for (let i = 2; i < smoothedPoints.length - 1; i += 2)
                    ctx.lineTo(smoothedPoints[i], smoothedPoints[i + 1]);

                ctx.stroke();
                ctx.closePath();

                oldX = midX;
                oldY = midY;
                midX = newX;
                midY = newY;
                ctx.strokeStyle = tempStrokeStyle;
                ctx.globalCompositeOperation = "source-over";
            }
        },

        endPath: () => {
            isDrawing = false;
        }
    },

    Dropper: {
        startPath: function (event, canvas) { //get color at x,y coordinate on main canvas
            let rect = canvas.getBoundingClientRect();
            let ctx = canvas.getContext('2d');
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            let imgData = ctx.getImageData(x * window.devicePixelRatio, y * window.devicePixelRatio, 1, 1).data;
            let rgb = [];
            for (let i = 0; i < 3; i++) {
                rgb[i] = imgData[i].toString(16);
                if (rgb[i].length === 1) rgb[i] = '0' + rgb[i];
            }
            let newColor = '#' + rgb[0] + rgb[1] + rgb[2];
            return newColor;
        },

        draw: function (event) {

        },

        endPath: function () {

        }
    }
}