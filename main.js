const INCH_TO_CM_K = 2.54


function on_valueschange()
{
	let d = +document.getElementById("in-d-inches").value
	let ar = getAspectRatio()
	setDimensions( calculateDimensions( d, ar[0], ar[1] ) )
}


/**
 * @param {number} size the size of the screen in inches
 * @param {number} rw aspect ratio width
 * @param {number} rh aspect ratio heigth
 * @returns {number[]} the dimensions in inches [x,y,unit]
 */
function calculateDimensions(size, rw, rh)
{
	let Dpow = Math.pow(size, 2)
	let unit = Math.sqrt(Dpow / (rw * rw + rh * rh))
	return [unit * rw, unit * rh, unit]
}


function getAspectRatio()
{
	let w = +document.getElementById("in-ratio-w").value
	let h = +document.getElementById("in-ratio-h").value
	return [w, h]
}

/**
 * 
 * @param {number} precision 
 * @param  {number[]} whu 
 */
function setDimensions(whu, precision = 1)
{
	let prec10 = Math.pow(10, precision)
	document.getElementById("out-size-w-cm").value = Math.round(whu[0] * INCH_TO_CM_K * prec10 + Number.EPSILON) / prec10
	document.getElementById("out-size-h-cm").value = Math.round(whu[1] * INCH_TO_CM_K * prec10 + Number.EPSILON) / prec10
	document.getElementById("out-size-w-in").value = Math.round(whu[0] * prec10 + Number.EPSILON) / prec10
	document.getElementById("out-size-h-in").value = Math.round(whu[1] * prec10 + Number.EPSILON) / prec10
}
